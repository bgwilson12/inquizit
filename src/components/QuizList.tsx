"use client";

import { useState } from "react";
import QuizCard from "./QuizCard";
import Modal from "./QuizModal";
import { Quiz, Question } from "@prisma/client";

export type QuizData = (Quiz & { questions: Question[] })[];

export default function QuizList({ data }: { data: QuizData }) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedQuizId, setSelectedQuizId] = useState<string>("");
	function onOpenModal(quizId: string) {
		setSelectedQuizId(quizId);
		setIsModalOpen(!isModalOpen);
	}
	function onCloseModal() {
		setIsModalOpen(!isModalOpen);
		setSelectedQuizId("");
	}
	return (
		<div className="flex flex-wrap">
			{data.map((item) => {
				return <QuizCard key={item.id} item={item} handleClick={onOpenModal} />;
			})}

			<Modal
				quizId={selectedQuizId}
				isOpen={isModalOpen}
				onOpenChange={onCloseModal}
			/>
		</div>
	);
}
