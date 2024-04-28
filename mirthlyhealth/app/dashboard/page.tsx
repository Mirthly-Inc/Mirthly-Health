"use client";
import Link from "next/link";
import { fetchAll } from "@/server";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useData } from "@/utils/dataContext";
import StressChart from "@/components/StressChart";
import { NavigationMenuDemo } from "@/components/Navigation";
import SleepBarChart from "@/components/SleepBarChart";
import MoodPie from "@/components/MoodPie";
import { exercise_type, task_type } from "@/utils/Types";
import React from "react";

const mentalHealthQuotes = [
  "You don't have to be everything to everyone. You just have to be you.",
  "One day at a time. One step at a time.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Don't be afraid to ask for help. It's a sign of strength, not weakness.",
  "Your mental health is just as important as your physical health. Take care of yourself.",
  "You are not alone. Millions of people struggle with mental health issues.",
  "Every day is a new opportunity. Let go of yesterday.",
  "Don't compare your journey to others. Everyone walks at their own pace.",
  "It's okay not to be okay. It's okay to take a break.",
  "You are worthy of love and happiness, no matter what.",
  "Your feelings are valid. Don't let anyone tell you otherwise.",
  "Focus on the things you can control, not the things you can't.",
  "Setbacks are a part of the journey. Don't give up.",
  "Be kind to yourself. You are doing the best you can.",
  "You are capable of amazing things. Believe in yourself.",
  "It's okay to ask for what you need.",
  "Celebrate your small victories. Every step forward counts.",
  "Don't let your past define you. You are stronger than your struggles.",
  "You are worthy of happiness. Don't settle for anything less.",
  "You are enough. You are loved. You are important.",
  "Taking care of your mental health is a lifelong journey. Be patient with yourself.",
  "There is light at the end of the tunnel. You will get through this.",
  "Don't be afraid to reach out for help. There are people who care about you.",
  "Small changes can make a big difference. Start where you are.",
  "You are not your thoughts or your feelings. You are stronger than them.",
  "It's okay to cry. Letting your emotions out can be healing.",
  "Focus on the positive. There is always something good in your life.",
  "Gratitude is a powerful tool. Take time to appreciate the good things in your life.",
  "Helping others is a great way to improve your own mental health.",
  "Surround yourself with positive people who support you.",
  "Set realistic goals for yourself. Don't try to do too much at once.",
  "Take care of your physical health. It can have a big impact on your mental health.",
  "Exercise is a great way to improve your mood and reduce stress.",
  "Getting enough sleep is essential for mental health.",
  "Eating a healthy diet can help improve your mood and energy levels.",
  "Spend time in nature. It can be very calming and grounding.",
  "Find a hobby or activity that you enjoy. It's important to have fun and relax.",
  "Mindfulness and meditation can help you focus on the present moment and reduce stress.",
  "Don't be afraid to say no. It's okay to set boundaries.",
  "Learn to forgive yourself. Everyone makes mistakes.",
  "You are not a burden. People who care about you want to help.",
  "There is hope. Recovery is possible.",
  "You are stronger than you think. You can overcome anything.",
  "Believe in yourself. You are capable of achieving anything you set your mind to.",
  "Don't let mental health hold you back from living your life.",
  "You are worthy of a happy and fulfilling life.",
  "Take care of yourself. You matter.",
  "You are not alone. We are in this together.",
];

const Dashboard = () => {
  const router = useRouter();
  const [record, setRecord] = useState<any | null>(null);
  const { user, data } = useData();
  const [quote, setQuote] = useState<string | null>(null);
  const [rest, setRest] = useState<any | null>(null);
  const [depression, setDepression] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [overall_score, setOverallScore] = useState<any | null>(null);
  const [moodpiechart, setMoodpiechart] = useState<any | null>(null);

  useEffect(() => {
    setLoading(true);
    const response = async () => {
      try {
        const res = await fetchAll(user);
        if (res) {
          if (res.flag === false) router.push("/add");
          else {
            let sum = 0;
            res.sleep.forEach((itr: any) => {
              sum += Number(itr.sleep_level);
            });

            const avgSleep = sum / res.sleep.length;
            let moodpie: [
              { sad: number; value: number; name: string },
              { neutral: number; value: number; name: string },
              { happy: number; value: number; name: string }
            ] = [
              { sad: 0, value: 0, name: "sad" },
              { neutral: 0, value: 0, name: "neutral" },
              { happy: 0, value: 0, name: "happy" },
            ];
            sum = 0;
            res.stress.forEach((itr: any) => {
              let temp = Number(itr.stress_level);
              if (temp > 0 && temp <= 3) {
                moodpie[0].sad = moodpie[0].sad + 1;
                moodpie[0].value = moodpie[0].sad + 1;
              } else if (temp > 3 && temp <= 7) {
                moodpie[1].neutral = moodpie[1].neutral + 1;
                moodpie[1].value = moodpie[1].neutral + 1;
              } else {
                moodpie[2].happy = moodpie[2].happy + 1;
                moodpie[2].value = moodpie[2].happy + 1;
              }
              sum += temp;
            });
            const avgStress = sum / res.stress.length;
            setMoodpiechart(moodpie);
            setRest(avgSleep.toFixed(1));
            setOverallScore((10 - (avgSleep + avgStress) / 2).toFixed(1));
            setDepression(avgStress.toFixed(1));
            setRecord(res);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    response();
    setQuote(
      mentalHealthQuotes[Math.floor(Math.random() * mentalHealthQuotes.length)]
    );
    setLoading(false);
  }, [data, router, user]);

  return (
    <div className="h-screen">
      <NavigationMenuDemo />
      <div className="p-6 h-[90%] z-200">
        <div className="flex gap-6 h-full">
          <div className="flex flex-col basis-1/2 gap-6">
            <div className="flex gap-4 items-center">
              <div className="text-xl">Hello {record?.name}</div>
              <div>{quote}</div>
            </div>
            <div className="flex gap-6 h-[150px]">
              <div className="p-4 basis-1/3 card relative rounded-xl shadow-xl bg-[#020817]">
                <div className="text-xl font-semibold">Stress Level</div>
                <div className="pt-4 text-5xl font-light">
                  {record && depression}/10
                </div>
              </div>
              <div className="p-4 basis-1/3 card relative rounded-xl bg-[#020817]">
                <div className="text-xl font-semibold">Sleep Score</div>
                <div className="pt-4 text-5xl font-light">
                  {record && rest}/10
                </div>
              </div>
              <div className="p-4 basis-1/3 card relative rounded-xl bg-[#020817]">
                <div className="text-xl font-semibold">Overall Score</div>
                <div className="pt-4 text-5xl font-light">
                  {record && overall_score}/10
                </div>
              </div>
            </div>
            <div className="h-full card relative rounded-xl p-4 bg-[#020817]">
              <div className="flex justify-center text-xl">
                Stress level Graph
              </div>
              {record && <StressChart data={record.stress} />}
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-6">
            <div className="flex gap-6 h-fit">
              <Link
                href="/tasks"
                className="basis-2/4 card relative p-4 rounded-xl cursor-pointer bg-[#020817]"
              >
                <div className="font-semibold text-2xl flex justify-center">
                  Tasks List
                </div>
                <div className="pt-8 pl-6">
                  {record &&
                    record.tasks.map(
                      (single_task: task_type, index: number) => (
                        <li key={index} className="pb-4 text-xl">
                          {single_task.shortform}
                        </li>
                      )
                    )}
                </div>
              </Link>
              <div className="basis-2/4 card relative p-4 rounded-xl bg-[#020817] ">
                <div className="text-xl flex justify-center">
                  Mood Distribution Chart
                </div>
                {record && <MoodPie data={moodpiechart} />}
              </div>
            </div>
            <div className="flex w-full h-full gap-6">
              <div className="card relative basis-3/5  p-4 rounded-xl h-full bg-[#020817]">
                <div className="flex justify-center">Sleep Chart</div>
                {record && <SleepBarChart data={record.sleep} />}
              </div>
              <Link
                href="/tasks"
                className="basis-2/5 card relative rounded-xl p-4 bg-[#020817]"
              >
                <div className="font-semibold text-xl flex justify-center pt-4">
                  Exercises List
                </div>
                <div className="pt-8 pl-6">
                  {record &&
                    record.exercise.map(
                      (single_exercise: exercise_type, index: number) => (
                        <li key={index} className="pb-4 text-xl">
                          {single_exercise.exercise_name}
                        </li>
                      )
                    )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
