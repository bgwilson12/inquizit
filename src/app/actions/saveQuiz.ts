"use server";

import { prisma } from "@/lib/prisma";
import type { QuizInput } from "@/lib/types";

export async function saveQuiz(quiz: QuizInput) {
	return prisma.quiz.create({
		data: {
			quizName: quiz.quizName,
			questions: {
				create: quiz.questions.map((q) => ({
					text: q.text,
					answers: q.answers,
					correctAnswer: q.correctAnswer,
				})),
			},
		},
		include: {
			questions: true,
		},
	});
}
