"use client";

import { NavigationMenuDemo } from "@/components/Navigation";
// import { useData } from "@/utils/dataContext";

const data = {
  tasks: [
    {
      shortform: "",
      longform:
        "Take a moment to focus on your breath. Notice the rise and fall of your chest, the feeling of the air entering and leaving your body. Continue to focus on your breath for several minutes, letting go of any distractions.",
    },
    {
      shortform: "",
      longform:
        "Write down three things you are grateful for each day. Reflect on the positive aspects of your life and appreciate the good things that you have.",
    },
    {
      shortform: "",
      longform:
        "Set small, achievable goals for yourself each day. Accomplishing your goals will give you a sense of purpose and boost your motivation.",
    },
    {
      shortform: "",
      longform:
        "Take regular breaks throughout the day to rest and recharge. Get up and move around, or step outside for some fresh air.",
    },
    {
      shortform: "",
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
        <div className="p-4 grid grid-cols-3 gap-4">
          {data.tasks.map((solo) => (
            <div key={solo.longform}>{solo.longform}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
