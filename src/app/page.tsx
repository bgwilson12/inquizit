import initialData from "../../data.json";
import { Settings } from "lucide-react";

function QuizItem({ item }: { item: { id: string; name: string } }) {
	return (
		<div className="h-56 w-56 p-2 m-2 shadow-lg rounded-xl bg-gray-100">
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
	return (
		<div className="w-3xl border-2">
			<header>
				<h1>Home</h1>
			</header>

			<main className="">
				<div className="flex">
					{initialData.map((item) => {
						return <QuizItem key={item.id} item={item} />;
					})}
				</div>
			</main>

			<footer>
				<p>&copy; 2025 Example Company</p>
			</footer>
		</div>
	);
}
