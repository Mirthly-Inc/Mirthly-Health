"use client";
import { NavigationMenuDemo } from "@/components/Navigation";
import { useData } from "@/utils/dataContext";

const data = {
  tasks: [
    {
      shortform: "Calm Breathing",
      longform: [
        "Take a comfortable position.",
        "Place your hands on your stomach or chest.",
        "Close your eyes and take a few deep breaths.",
        "Focus on the rise and fall of your breath.",
      ],
    },
    {
      shortform: "Thought Jogging",
      longform: [
        "Think of a positive memory or experience.",
        "Jot down 5-10 details about the memory.",
        "Try to recall as much as you can about the experience.",
        "Recall the positive feelings associated with the memory.",
      ],
    },
    {
      shortform: "Gratitude List",
      longform: [
        "Write down 3-5 things you're grateful for.",
        "Focus on the positive aspects of your life.",
        "Reflect on the reasons why you're grateful for each item.",
        "Savor the positive feelings associated with gratitude.",
      ],
    },
    {
      shortform: "Mindful Break",
      longform: [
        "Take 5 minutes to focus on your breath.",
        "Notice the sensations of your body.",
        "Pay attention to your thoughts and feelings.",
        "Return to the present moment without judgment.",
      ],
    },
  ],
  exercise: [
    {
      exercise_name: "Yoga",
      exercise_description: [
        "Find a comfortable and quiet space.",
        "Follow a beginner-friendly yoga routine.",
        "Focus on coordinating your breath with your movements.",
      ],
    },
    {
      exercise_name: "Mindfulness Meditation",
      exercise_description: [
        "Sit in a comfortable position with your back straight.",
        "Close your eyes and focus on your breath.",
        "When your mind wanders, gently bring it back to your breath.",
      ],
    },
    {
      exercise_name: "Tai Chi",
      exercise_description: [
        "Find an open space with plenty of room.",
        "Follow a beginner-friendly Tai Chi routine.",
        "Focus on slow and gentle movements.",
      ],
    },
  ],
};
const Dashboard = () => {
  // const { data } = useData();

  return (
    <div className="h-screen">
      <NavigationMenuDemo />
      <div className="p-6 h-[90%]">
        <div className="flex gap-6 h-full">
          <div className="flex flex-col basis-1/2 gap-6">
            <div className="flex justify-between items-center">
              <div>
                <div>Hello Prem</div>
                <div className="text-xl">Good Morning</div>
              </div>
              <div>Random Motivational Quote</div>
            </div>
            <div className="flex gap-6 h-[150px]">
              <div className="p-4 basis-1/3 border-black border-2 rounded-xl">
                <div className="text-xl font-semibold">Stress Level</div>
                <div className="pt-4 text-5xl font-light">5/10</div>
              </div>
              <div className="p-4 basis-1/3 border-black border-2 rounded-xl">
                <div className="text-xl font-semibold">Average Sleep</div>
                <div className="pt-4 text-5xl font-light">6 hours</div>
              </div>
              <div className="p-4 basis-1/3 border-black border-2 rounded-xl">
                <div className="text-xl font-semibold">Need to discuss</div>
                <div className="pt-4 text-5xl font-light">NA</div>
              </div>
            </div>
            <div className="h-full border-black border-2 rounded-xl p-4">
              Stress level Graph
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-6">
            <div className="flex gap-6 h-fit  ">
              <div className="basis-2/5 border-2 border-black p-4 rounded-xl">
                <div className="font-semibold text-xl">Tasks List :</div>
                <div className="pt-2 pl-2">
                  {data.tasks.map((single_task, index) => (
                    <div key={index} className="pb-2">
                      {single_task.shortform}
                    </div>
                  ))}
                </div>
                <div className="font-semibold text-xl pt-4">
                  Exercises List :
                </div>
                <div className="pt-2 pl-2">
                  {data.exercise.map((single_exercise, index) => (
                    <div key={index} className="pb-2">
                      {single_exercise.exercise_name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="basis-3/5 border-2 border-black p-4 rounded-xl">
                Happiness Feeling pie Chart or graph
              </div>
            </div>
            <div className="border-2 border-black p-4 rounded-xl h-full ">
              Sleep Chart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
