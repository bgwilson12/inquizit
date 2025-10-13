"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createQuiz } from "@/lib/openAiClientApi";

export default function QuizInput() {
	const [userPrompt, setUserPrompt] = useState(
		"make a one sentence story about a cat named mojo",
	);
	const [llmOutput, setLlmOutput] = useState("");
	async function handleClick() {
		const output = await createQuiz(userPrompt);
		setLlmOutput(output);
	}
	return (
		<div>
			<Input
				type="text"
				value={userPrompt}
				onChange={(e) => setUserPrompt(e.target.value)}
			/>
			<Button type="button" variant="outline" onClick={handleClick}>
				Create Quiz
			</Button>
			<p>{llmOutput}</p>
		</div>
	);
}
