import { portfolioContext } from "@/app/lib/portfolioContext";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
      return Response.json(
        { reply: "Please enter a message." },
        { status: 400 },
      );
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return Response.json(
        { reply: "Missing OpenRouter API key." },
        { status: 500 },
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://192.168.100.229:3000/",
          "X-Title": "Portfolio Chat",
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            { role: "system", content: portfolioContext },
            { role: "user", content: message },
          ],
          max_tokens: 500,
          temperature: 0.4,
        }),
      },
    );

    const rawText = await response.text();
    console.log("OpenRouter raw response:", rawText);

    let data;
    try {
      data = JSON.parse(rawText);
    } catch (parseError) {
      return Response.json(
        { reply: `Unexpected response: ${rawText}` },
        { status: 500 },
      );
    }

    let reply =
      "Sometimes i get tired of replying to people so i take a break. Even AI needs rest :). Try again later maybe i'll answer you then. (Free tier limits, unfortunately - kurt) ";

    if (data?.choices?.[0]?.message?.content) {
      reply = data.choices[0].message.content.trim();
    } else if (data?.choices?.[0]?.message?.reasoning) {
      // fallback for reasoning models
      reply = data.choices[0].message.reasoning.trim();
    } else if (data?.error) {
      console.error("OpenRouter error:", JSON.stringify(data.error));
      reply = `Error: ${data.error?.message ?? JSON.stringify(data.error)}`;
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat route error:", error);

    return Response.json(
      { reply: "Something went wrong while generating a response." },
      { status: 500 },
    );
  }
}
