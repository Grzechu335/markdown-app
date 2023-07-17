/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `MarkDownFile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MarkDownFile_name_key" ON "MarkDownFile"("name");
