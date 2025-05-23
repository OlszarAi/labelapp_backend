/*
  Warnings:

  - You are about to drop the column `size` on the `LabelElement` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "LabelElement_properties_idx";

-- AlterTable
ALTER TABLE "LabelElement" DROP COLUMN "size";
