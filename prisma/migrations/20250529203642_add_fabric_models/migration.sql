-- CreateTable
CREATE TABLE "FabricProject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FabricProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FabricCanvas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'mm',
    "background" TEXT DEFAULT '#ffffff',
    "projectId" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "metadata" JSONB DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FabricCanvas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FabricObject" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "canvasId" TEXT NOT NULL,
    "left" DOUBLE PRECISION NOT NULL,
    "top" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "scaleX" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "scaleY" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "angle" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fill" TEXT,
    "stroke" TEXT,
    "strokeWidth" DOUBLE PRECISION DEFAULT 0,
    "opacity" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "text" TEXT,
    "fontFamily" TEXT DEFAULT 'Arial',
    "fontSize" DOUBLE PRECISION DEFAULT 16,
    "fontWeight" TEXT DEFAULT 'normal',
    "fontStyle" TEXT DEFAULT 'normal',
    "textAlign" TEXT DEFAULT 'left',
    "qrValue" TEXT,
    "uuidLength" INTEGER,
    "qrErrorLevel" TEXT DEFAULT 'M',
    "zIndex" INTEGER NOT NULL DEFAULT 0,
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FabricObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FabricTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "thumbnail" TEXT,
    "canvasData" JSONB NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FabricTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FabricProject_userId_idx" ON "FabricProject"("userId");

-- CreateIndex
CREATE INDEX "FabricProject_createdAt_idx" ON "FabricProject"("createdAt");

-- CreateIndex
CREATE INDEX "FabricCanvas_projectId_idx" ON "FabricCanvas"("projectId");

-- CreateIndex
CREATE INDEX "FabricCanvas_createdAt_idx" ON "FabricCanvas"("createdAt");

-- CreateIndex
CREATE INDEX "FabricObject_canvasId_idx" ON "FabricObject"("canvasId");

-- CreateIndex
CREATE INDEX "FabricObject_type_idx" ON "FabricObject"("type");

-- CreateIndex
CREATE INDEX "FabricObject_zIndex_idx" ON "FabricObject"("zIndex");

-- CreateIndex
CREATE INDEX "FabricTemplate_category_idx" ON "FabricTemplate"("category");

-- CreateIndex
CREATE INDEX "FabricTemplate_isPublic_idx" ON "FabricTemplate"("isPublic");

-- CreateIndex
CREATE INDEX "FabricTemplate_userId_idx" ON "FabricTemplate"("userId");

-- CreateIndex
CREATE INDEX "FabricTemplate_createdAt_idx" ON "FabricTemplate"("createdAt");

-- AddForeignKey
ALTER TABLE "FabricProject" ADD CONSTRAINT "FabricProject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FabricCanvas" ADD CONSTRAINT "FabricCanvas_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "FabricProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FabricObject" ADD CONSTRAINT "FabricObject_canvasId_fkey" FOREIGN KEY ("canvasId") REFERENCES "FabricCanvas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FabricTemplate" ADD CONSTRAINT "FabricTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
