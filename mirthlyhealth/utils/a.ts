import { PromptTemplate } from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { RunnableSequence } from '@langchain/core/runnables';
import { z } from 'zod';
import { StructuredOutputParser } from 'langchain/output_parsers';

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    answer: z.string().describe("answer to the user's question"),
    sources: z
      .array(z.string())
      .describe('5 sources used to answer the question, should be websites.'),
  })
);
const model = new ChatGoogleGenerativeAI({
  apiKey: 'AIzaSyCmYbHz_PvndyICs2n7lvrpCGoiN3cAPzo',
  model: 'gemini-pro',
  maxOutputTokens: 2048,
});
export const analyze_data = async () => {
  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      'Answer the users question as best as possible.\n{format_instructions}\n{question}'
    ),
    model,
    parser,
  ]);
  const response = await chain.invoke({
    question: 'What is the capital of India?',
    format_instructions: parser.getFormatInstructions(),
  });
  console.log(response);
};

/*
  AIMessage {
    content: "Why don't bears wear shoes?\n\nBecause they have bear feet!",
  }
*/
