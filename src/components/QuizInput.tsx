"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createQuiz } from "@/lib/openAiClientApi";

export default function QuizInput() {
	const [userPrompt, setUserPrompt] = useState(
		"make a one question quiz about a cat named mojo",
	);
	async function handleClick() {
		await createQuiz(userPrompt);
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
		</div>
	);
}
