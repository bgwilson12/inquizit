/*
  Warnings:

  - You are about to drop the column `questions` on the `quiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "quiz" DROP COLUMN "questions";

-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "answers" TEXT[],
    "correctAnswer" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;
