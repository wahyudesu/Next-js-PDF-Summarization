// app/api/summarize/route.ts
import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { inputText } = await req.json();

    if (!inputText) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Kau adalah orang yang ahli meringkas sesuatu, tujuanmu adalah meringkas document yang diberikan dengan singkat padat dan jelas, jelaskan intinya"
        },
        {
          role: "user",
          content: inputText
        }
      ],
      model: "llama-3.1-70b-versatile",
    });

    const summary = chatCompletion.choices[0]?.message?.content || "Takda ringkasan";
    return NextResponse.json({ summary });

  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Maaf bot sedang eror, coba lain kali" },
      { status: 500 }
    );
  }
}
