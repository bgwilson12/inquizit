import OpenAI from "openai";
import { z } from "zod";

const client = new OpenAI();

// Define a simplified schema for OpenAI (without relations, IDs, dates)
const openAIQuizSchema = z.object({
	quizName: z.string(),
	questions: z.array(
		z.object({
			text: z.string(),
			answers: z.array(z.string()),
			correctAnswer: z.string(),
		}),
	),
});

export type QuizInput = z.infer<typeof openAIQuizSchema>;

// Convert to JSON Schema using Zod 4's native function
const quizJsonSchema = z.toJSONSchema(openAIQuizSchema, { target: "draft-7" });

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

	const parsed = openAIQuizSchema.parse(JSON.parse(response.output_text));
	return Response.json(parsed);
}

export async function GET() {
	return "GET called";
}
