-- This migration adds an index on the properties field of the LabelElement table
-- to improve query performance when filtering by text formatting properties.

-- Add comment to describe schema changes
COMMENT ON COLUMN "LabelElement"."properties" IS 'Stores additional element properties like text formatting (bold, italic, strikethrough, fontFamily, fontSize)';

-- Create a GIN index for properties to enable faster JSON searches
CREATE INDEX IF NOT EXISTS "LabelElement_properties_idx" ON "LabelElement" USING gin("properties");
