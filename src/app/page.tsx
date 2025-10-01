import initialData from "../../data.json";

function QuizItem({ item }: { item: { id: string; name: string } }) {
	return <div className="bg-gray-500 text-9xl">{item.name}</div>;
}

export default function Home() {
	return (
		<>
			<header>
				<h1>Home</h1>
			</header>

			<main className="bg-gray-600">
				<div className="bg-gray-500">
					{initialData.map((item) => {
						return <QuizItem key={item.id} item={item} />;
					})}
				</div>
			</main>

			<footer>
				<p>&copy; 2025 Example Company</p>
			</footer>
		</>
	);
}
