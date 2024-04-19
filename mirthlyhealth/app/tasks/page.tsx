"use client";

import { NavigationMenuDemo } from "@/components/Navigation";
// import { useData } from "@/utils/dataContext";

const data = {
  tasks: [
    {
      shortform: "Take a moment to focus",
      longform:
        "Take a moment to focus on your breath. Notice the rise and fall of your chest, the feeling of the air entering and leaving your body. Continue to focus on your breath for several minutes, letting go of any distractions.",
    },
    {
      shortform: "Write down three things",
      longform:
        "Write down three things you are grateful for each day. Reflect on the positive aspects of your life and appreciate the good things that you have.",
    },
    {
      shortform: "Set small, achievable goals",
      longform:
        "Set small, achievable goals for yourself each day. Accomplishing your goals will give you a sense of purpose and boost your motivation.",
    },
    {
      shortform: "Take regular breaks",
      longform:
        "Take regular breaks throughout the day to rest and recharge. Get up and move around, or step outside for some fresh air.",
    },
    {
      shortform: "Make an effort to connect",
      longform:
        "Make an effort to connect with friends and family who support you. Spend time talking, laughing, and sharing experiences.",
    },
  ],
};
const page = () => {
  // const { data } = useData();
  return (
    <div>
      <NavigationMenuDemo />
      {data && (
        <div className="p-6 flex gap-6">
          <div className="grid gap-6 grid-cols-2 basis-2/3">
            {data.tasks.map((solo, index) => (
              <div
                className=" border-2 border-black rounded-xl p-6"
                key={index}
              >
                <div className="font-semibold">{solo.shortform}</div>
                <div className="pt-2 ">{solo.longform}</div>
              </div>
            ))}
          </div>
          <div className="basis-1/3 border-2 border-black rounded-xl p-6 shadow-xl">
            Exercises also list here
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
