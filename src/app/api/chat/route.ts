import OpenAI from "openai";
import { z } from "zod";

const client = new OpenAI();

const generatedQuiz = z.object({
	quizName: z.string(),
	questions: z.array(
		z.object({
			text: z.string(),
			answers: z.array(z.string()),
			correctAnswer: z.string(),
		}),
	),
});

export type QuizInput = z.infer<typeof generatedQuiz>;

const quizJsonSchema = {
	type: "object",
	properties: {
		quizName: { type: "string" },
		questions: {
			type: "array",
			items: {
				type: "object",
				properties: {
					text: { type: "string" },
					answers: {
						type: "array",
						items: { type: "string" },
					},
					correctAnswer: { type: "string" },
				},
				required: ["text", "answers", "correctAnswer"],
				additionalProperties: false,
			},
		},
	},
	required: ["quizName", "questions"],
	additionalProperties: false,
};

export async function POST(request: Request) {
	const body = await request.json();
	const { userPrompt } = body;

	const response = await client.responses.create({
		model: "gpt-5",
		input: [
			{
				role: "system",
				content:
					"You are a quiz maker. The user will give you a prompt on a topic and your job is to make a multiple choice quiz. ",
			},
			{
				role: "user",
				content: userPrompt,
			},
		],
		text: {
			format: {
				type: "json_schema",
				name: "QuizFormat",
				strict: true,
				schema: quizJsonSchema,
			},
		},
	});

	console.log("response.output_text");
	console.log(response.output_text);
	const parsed = generatedQuiz.parse(JSON.parse(response.output_text));
	return Response.json(parsed);
}

export async function GET() {
	// const response = await client.responses.create({
	// 	model: "gpt-5",
	// 	input: "Write a one sentence story about a cat named mojo",
	// });
	// return Response.json(response);
	return "GET called";
}
