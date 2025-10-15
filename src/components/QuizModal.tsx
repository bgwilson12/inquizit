"use client";

import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "./ui/dialog";
import { Quiz, Question } from "@prisma/client";
import { getSingleQuiz } from "@/app/actions/getSingleQuiz";
import { useEffect, useState } from "react";

type QuizWithQuestions = Quiz & { questions: Question[] };

export default function Modal({
	quizId,
	isOpen,
	onOpenChange,
}: {
	quizId: string;
	isOpen: boolean;
	onOpenChange: () => void;
}) {
	const [quiz, setQuiz] = useState<QuizWithQuestions | null>(null);

	useEffect(() => {
		if (isOpen && quizId) {
			getSingleQuiz(quizId).then(setQuiz);
		}
	}, [isOpen, quizId]);

	const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
	const currentQuestion = quiz?.questions[currentQuestionIdx];
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Here&#39;s your quiz!</DialogTitle>
					<DialogDescription>Fill in the blank</DialogDescription>
				</DialogHeader>
				<p>{currentQuestion?.text}</p>

				{currentQuestion && (
					<p>
						{currentQuestion.answers.map((ans, idx) => (
							<span key={idx}>
								&nbsp;&nbsp;&nbsp;&nbsp;
								{["A.", "B.", "C.", "D.", "E."][idx]} {ans}
								<br />
							</span>
						))}
					</p>
				)}
				<DialogFooter>
					<Button
						onClick={() =>
							setCurrentQuestionIdx(
								(prev) =>
									(prev = Math.abs(prev - 1) % (quiz?.questions.length ?? 1)),
							)
						}
					>
						Previous
					</Button>
					<Button
						onClick={() =>
							setCurrentQuestionIdx(
								(prev) => (prev = (prev + 1) % (quiz?.questions.length ?? 1)),
							)
						}
					>
						Next
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
