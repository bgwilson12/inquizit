export async function createQuiz(userPrompt: string, setLlmOutput: (input: string) => void) {
	const res = await fetch('/api/chat', {method: 'POST', body: JSON.stringify({userPrompt: userPrompt})});
	if (!res.ok) throw new Error('Failed to fetch');
	const output = await res.json();
	setLlmOutput(output.output_text)
	console.log('javelin', output.output_text);
	return output.output_text;
}