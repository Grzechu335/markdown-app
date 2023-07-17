-- CreateTable
CREATE TABLE "MarkDownFile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "MarkDownFile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MarkDownFile" ADD CONSTRAINT "MarkDownFile_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
