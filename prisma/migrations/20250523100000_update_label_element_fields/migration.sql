-- Rename size field to fontSize for text and preserve width for QRCode size
-- First create the new column
ALTER TABLE "LabelElement" ADD COLUMN "fontSize" FLOAT;

-- Copy data from size to fontSize for text elements
UPDATE "LabelElement" SET "fontSize" = "size" WHERE "type" = 'text' OR "type" = 'uuidText' OR "type" = 'company';

-- Update the properties for text formatting to ensure they're properly stored
UPDATE "LabelElement"
SET "properties" = JSONB_SET(
  COALESCE("properties"::jsonb, '{}'::jsonb),
  '{fontFamily}',
  COALESCE(("properties"->>'fontFamily')::jsonb, '"Arial"'::jsonb)
)
WHERE "type" = 'text' OR "type" = 'uuidText' OR "type" = 'company';

-- Ensure bold, italic, and strikethrough are properly stored
UPDATE "LabelElement"
SET "properties" = JSONB_SET(
  COALESCE("properties"::jsonb, '{}'::jsonb),
  '{bold}',
  CASE WHEN "type" = 'company' THEN 'true'::jsonb ELSE 'false'::jsonb END
)
WHERE ("type" = 'text' OR "type" = 'uuidText' OR "type" = 'company') AND 
      ("properties" IS NULL OR NOT ("properties" ? 'bold'));

UPDATE "LabelElement"
SET "properties" = JSONB_SET(
  COALESCE("properties"::jsonb, '{}'::jsonb),
  '{italic}',
  'false'::jsonb
)
WHERE ("type" = 'text' OR "type" = 'uuidText' OR "type" = 'company') AND 
      ("properties" IS NULL OR NOT ("properties" ? 'italic'));

UPDATE "LabelElement"
SET "properties" = JSONB_SET(
  COALESCE("properties"::jsonb, '{}'::jsonb),
  '{strikethrough}',
  'false'::jsonb
)
WHERE ("type" = 'text' OR "type" = 'uuidText' OR "type" = 'company') AND 
      ("properties" IS NULL OR NOT ("properties" ? 'strikethrough'));

-- Ensure qrCode elements use width as size
UPDATE "LabelElement"
SET "width" = "size"
WHERE "type" = 'qrCode' AND "size" IS NOT NULL AND ("width" IS NULL OR "width" != "size");

-- Add comment explaining the field changes
COMMENT ON COLUMN "LabelElement"."fontSize" IS 'Font size for text elements, replacing the deprecated size field';
COMMENT ON COLUMN "LabelElement"."width" IS 'Width of element; for qrCode elements this is also the size';

-- We'll keep the size column for backward compatibility temporarily, but mark it as deprecated
COMMENT ON COLUMN "LabelElement"."size" IS 'DEPRECATED: Use fontSize for text elements and width for QR codes';
