import initialData from "../../data.json";

function QuizItem({ item }: { item: { id: string; name: string } }) {
	return <div>{item.name}</div>;
}

export default function Home() {
	return (
		<>
			<header>
				<h1>Home</h1>
			</header>

			<main>
				{initialData.map((item) => {
					return <QuizItem key={item.id} item={item} />;
				})}
			</main>

			<footer>
				<p>&copy; 2025 Example Company</p>
			</footer>
		</>
	);
}
