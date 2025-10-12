"use client";
import { Settings } from "lucide-react";

export default function QuizCard({
	item,
	toggleModalOpen,
}: {
	item: { id: string; name: string };
	toggleModalOpen: () => void;
}) {
	return (
		<div
			className="h-56 w-56 p-2 m-2 shadow-lg rounded-xl bg-slate-500 cursor-pointer"
			onClick={toggleModalOpen}
		>
			<div>{item.name}</div>
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
