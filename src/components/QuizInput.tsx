"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createQuiz } from "@/lib/opeanAiClientApi";

export default function QuizInput() {
	const [userPrompt, setUserPrompt] = useState(
		"make a one sentence story about a cat named mojo",
	);
	const [llmOutput, setLlmOutput] = useState("");

	return (
		<div>
			<Input
				type="text"
				value={userPrompt}
				onChange={(e) => setUserPrompt(e.target.value)}
			/>
			<Button
				type="button"
				variant="outline"
				onClick={() => createQuiz(userPrompt, setLlmOutput)}
			>
				Create Quiz
			</Button>
			<p>{llmOutput}</p>
		</div>
	);
}
