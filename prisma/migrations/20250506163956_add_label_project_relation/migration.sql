/*
  Warnings:

  - You are about to drop the column `labelId` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_labelId_fkey";

-- AlterTable
ALTER TABLE "Label" ADD COLUMN     "projectId" TEXT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "labelId";

-- AddForeignKey
ALTER TABLE "Label" ADD CONSTRAINT "Label_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
