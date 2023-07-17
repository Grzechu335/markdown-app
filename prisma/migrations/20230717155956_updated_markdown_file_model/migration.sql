/*
  Warnings:

  - You are about to drop the column `createdAt` on the `MarkDownFile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MarkDownFile" DROP COLUMN "createdAt",
ADD COLUMN     "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
