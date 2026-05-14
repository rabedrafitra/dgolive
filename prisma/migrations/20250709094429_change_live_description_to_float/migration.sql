/*
  Warnings:

  - The `description` column on the `Live` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Association" ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "Live" DROP COLUMN "description",
ADD COLUMN     "description" DOUBLE PRECISION;
