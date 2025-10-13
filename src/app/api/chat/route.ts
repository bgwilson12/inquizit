import OpenAI from "openai";
const client = new OpenAI();

export async function GET() {
	const response = await client.responses.create({
    model: "gpt-5",
    input: "Write a one-sentence bedtime story about a unicorn."
	});

	console.log(response.output_text);
  return Response.json(response);
}

export async function POST(request: Request) {
	const body = await request.json()
	const {userPrompt} = body
	const response = await client.responses.create({
    model: "gpt-5",
    input: userPrompt
	});

	console.log(response.output_text);
  return Response.json(response);
}