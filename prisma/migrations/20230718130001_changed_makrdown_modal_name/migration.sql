/*
  Warnings:

  - You are about to drop the `MarkDownFile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MarkDownFile" DROP CONSTRAINT "MarkDownFile_authorId_fkey";

-- DropTable
DROP TABLE "MarkDownFile";

-- CreateTable
CREATE TABLE "MarkdownFile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "MarkdownFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MarkdownFile_id_key" ON "MarkdownFile"("id");

-- AddForeignKey
ALTER TABLE "MarkdownFile" ADD CONSTRAINT "MarkdownFile_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
