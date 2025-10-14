"use client";

import { useState } from "react";
import QuizCard from "./QuizCard";
import Modal from "./Modal";

type QuizData = { id: string; name: string }[];

export default function QuizList({ data }: { data: QuizData }) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	function toggleModalOpen() {
		setIsModalOpen(!isModalOpen);
	}
	return (
		<div className="flex">
			{data.map((item) => {
				return (
					<QuizCard
						key={item.id}
						item={item}
						toggleModalOpen={toggleModalOpen}
					/>
				);
			})}

			<Modal isOpen={isModalOpen} onOpenChange={toggleModalOpen} />
		</div>
	);
}
