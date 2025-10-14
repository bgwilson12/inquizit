import { saveQuiz } from "@/app/actions/saveQuiz";
import type { Quiz } from "@prisma/client";

export async function createQuiz(userPrompt: string): Promise<Quiz> {
	const res = await fetch("/api/chat", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ userPrompt: userPrompt }),
	});

	if (!res.ok) throw new Error("Failed to fetch");

	const quizData = await res.json();
	const savedQuiz = await saveQuiz(quizData);

	return savedQuiz;
}
