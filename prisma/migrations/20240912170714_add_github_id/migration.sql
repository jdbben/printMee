/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gitHubId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gitHubId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Image" (
    "uploadId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("uploadId")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
