/*
  Warnings:

  - A unique constraint covering the columns `[uploadId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gitHubId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Preview" (
    "id" SERIAL NOT NULL,
    "position" INTEGER[],
    "scale" INTEGER[],
    "color" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Preview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_uploadId_key" ON "Image"("uploadId");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_gitHubId_key" ON "User"("gitHubId");

-- AddForeignKey
ALTER TABLE "Preview" ADD CONSTRAINT "Preview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
