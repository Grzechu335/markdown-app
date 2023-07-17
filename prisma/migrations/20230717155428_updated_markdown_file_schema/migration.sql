/*
  Warnings:

  - Added the required column `name` to the `MarkDownFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MarkDownFile" ADD COLUMN     "name" TEXT NOT NULL;
