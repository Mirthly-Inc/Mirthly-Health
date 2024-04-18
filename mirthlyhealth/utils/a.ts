import { PromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { RunnableSequence } from "@langchain/core/runnables";
import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";

interface inputtype {
  Focus_and_Concentration: string;
  Motivation_and_Energy: string;
  Positive_Emotions: string;
  Self_care: string;
  Sleep: string;
  Social_Interaction: string;
  Stress_and_Anxiety: string;
  Thoughts_and_Behaviors: string;
  mood_level: string;
}
const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    tasks: z.array(
      z.object({
        shortform: z
          .string()
          .describe(
            "5 tasks to improve user's current mental health in short form (ie.. two or three words)"
          ),
        longform: z
          .string()
          .describe(
            "Give me the detailed step by step guide for the shortform task"
          ),
      })
    ),
    exercise: z
      .array(z.string())
      .describe("5 Cognitive Behavioral Therapy (CBT) Activities"),
    recommendations: z
      .array(z.string())
      .describe(
        "5 videos to improve current users mental health, should be latest youtube video links ."
      ),
  })
);
const model = new ChatGoogleGenerativeAI({
  apiKey: "AIzaSyCmYbHz_PvndyICs2n7lvrpCGoiN3cAPzo",
  model: "gemini-pro",
  maxOutputTokens: 2048,
});
export const analyze_data = async (input: inputtype) => {
  const inputdata = `Generate personalized suggestions, tasks, recommendations, and exercises to improve the user's mental health based on the provided data.
  Focus_and_Concentration: ${input.Focus_and_Concentration}
  Motivation_and_Energy: ${input.Motivation_and_Energy}
  Positive_Emotions: ${input.Positive_Emotions}
  Self_care: ${input.Self_care}
  Sleep: ${input.Sleep}
  Social_Interaction: ${input.Social_Interaction}
  Stress_and_Anxiety: ${input.Stress_and_Anxiety}
  Thoughts_and_Behaviors: ${input.Thoughts_and_Behaviors}
  mood_level: ${input.mood_level}`;
  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      "Answer the users question as best as possible.\n{format_instructions}\n{question}"
    ),
    model,
    parser,
  ]);
  const response = await chain.invoke({
    question: inputdata,
    format_instructions: parser.getFormatInstructions(),
  });
  console.log(response);
};
