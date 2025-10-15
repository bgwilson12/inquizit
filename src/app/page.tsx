import QuizInput from "@/components/QuizInput";
import QuizList from "@/components/QuizList";
import { getQuizzes } from "./actions/getQuizzes";
const initialData = await getQuizzes();

export default function Home() {
	return (
		<div className="w-3xl border-2">
			<header>
				<h1>Home</h1>
				<QuizInput />
			</header>
			<main className="">
				<QuizList data={initialData} />
			</main>

			<footer>
				<p>&copy; bretson</p>
			</footer>
		</div>
	);
}
