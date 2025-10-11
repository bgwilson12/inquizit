"use client";

import { useState } from "react";
import initialData from "../../data.json";
import { Settings } from "lucide-react";
import Modal from "@/components/Modal";
// import { Dialog } from "@/components/ui/dialog";

function QuizItem({
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

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	function toggleModalOpen() {
		setIsModalOpen(!isModalOpen);
		console.log(isModalOpen);
	}

	return (
		<div className="w-3xl border-2">
			<header>
				<h1>Home</h1>
			</header>
			{/* {isModalOpen && <Modal />} */}
			<main className="">
				<div className="flex">
					{initialData.map((item) => {
						return (
							<QuizItem
								key={item.id}
								item={item}
								toggleModalOpen={toggleModalOpen}
							/>
						);
					})}

					<Modal isOpen={isModalOpen} onOpenChange={toggleModalOpen} />
				</div>
			</main>

			<footer>
				<p>&copy; 2025 Example Company</p>
			</footer>
		</div>
	);
}
