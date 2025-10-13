export async function createQuiz(userPrompt: string) {
	const res = await fetch("/api/chat", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ userPrompt: userPrompt }),
	});
	if (!res.ok) throw new Error("Failed to fetch");
	const output = await res.json();
	return output.output_text;
}
