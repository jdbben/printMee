/*
  Warnings:

  - Made the column `img` on table `Preview` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Preview" ALTER COLUMN "img" SET NOT NULL;
