import { PromptTemplate } from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { RunnableSequence } from '@langchain/core/runnables';
import { z } from 'zod';
import { StructuredOutputParser } from 'langchain/output_parsers';

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
    stress_level: z
      .number()
      .describe(
        'Give a stress level out of 10 for the user current submission, The level should be a whole number.'
      ),
    tasks: z.array(
      z.object({
        shortform: z
          .string()
          .describe(
            "4 tasks to improve user's current mental health in short form (three words)."
          ),
        longform: z
          .array(
            z
              .string()
              .describe(
                'Exactly 4 points explaining the steps of the short form.'
              )
          )
          .length(4),
      })
    ),
    exercise: z
      .array(
        z.object({
          exercise_name: z
            .string()
            .describe(
              'Give me only the name of Exercises to improve mental health.'
            ),
          exercise_description: z
            .array(
              z
                .string()
                .describe('Give me 3 steps to do the corresponding exercise.')
            )
            .length(3),
        })
      )
      .length(3),
  })
);
const model = new ChatGoogleGenerativeAI({
  apiKey: 'AIzaSyCmYbHz_PvndyICs2n7lvrpCGoiN3cAPzo',
  model: 'gemini-pro',
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
      'Answer the users question as best as possible.\n{format_instructions}\n{question}'
    ),
    model,
    parser,
  ]);
  let response = {};
  try {
    response = await chain.invoke({
      question: inputdata,
      format_instructions: parser.getFormatInstructions(),
    });
  } catch (error) {
    response = await chain.invoke({
      question: inputdata,
      format_instructions: parser.getFormatInstructions(),
    });
  }
  return response;
};
