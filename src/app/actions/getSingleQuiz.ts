"use server";

import { prisma } from "@/lib/prisma";

export async function getSingleQuiz(idValue: string) {
	return prisma.quiz.findFirst({
		where: { id: idValue },
		include: { questions: true },
	});
}
