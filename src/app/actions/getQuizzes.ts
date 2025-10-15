"use server";

import { prisma } from "@/lib/prisma";

export async function getQuizzes() {
	return prisma.quiz.findMany({
		include: {
			questions: true,
		},
	});
}
