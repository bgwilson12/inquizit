"use client";
import { Settings } from "lucide-react";
import { QuizData } from "./QuizList";

export default function QuizCard({
	item,
	handleClick,
}: {
	item: QuizData[0];
	handleClick: (id: string) => void;
}) {
	return (
		<div
			className="shrink-0 h-56 w-56 p-2 m-2 shadow-lg rounded-xl bg-slate-500 cursor-pointer"
			onClick={() => handleClick(item.id)}
		>
			<div>{item.quizName}</div>
			<div className="flex justify-between ">
				<p>Percent Correct</p>
				<p>{90}%</p>
			</div>
			<div className="flex justify-between ">
				<p>Attempts:</p>
				<p>{4}</p>
			</div>
			<div className="flex justify-between ">
				<p>Configure</p>
				<Settings />
			</div>
		</div>
	);
}
