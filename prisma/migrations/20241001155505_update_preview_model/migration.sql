/*
  Warnings:

  - Added the required column `product` to the `Preview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Preview" ADD COLUMN     "product" TEXT NOT NULL;
