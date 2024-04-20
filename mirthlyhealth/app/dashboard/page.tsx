"use client";
import { NavigationMenuDemo } from "@/components/Navigation";
import { useData } from "@/utils/dataContext";
const Dashboard = () => {
  const { data } = useData();

  return (
    <div>
      <NavigationMenuDemo />
      <div className="p-4">
        <div>Hello Prem</div>
        {console.log(data)}
        <div className="text-xl">Good Morning</div>
        <div className="p-4 flex border-black border-2 rounded-xl gap-6">
          <div className="flex flex-col basis-1/2 gap-3 h-[450px] border-black border-2 rounded-xl">
            <div className="flex gap-3 basis 1/10 h-[50px] border-black border-2 rounded-xl">
              <div className="basis-1/3">Stress Level</div>
              <div className="basis-1/3">Stress Level</div>
              <div className="basis-1/3">Stress Level</div>
            </div>
            <div className="basis-9/10 h-full border-black border-2 rounded-xl">
              Graph
            </div>
          </div>
          <div className="flex basis-1/2 gap-6">
            <div className="basis-2/5 border-2 border-black p-4 rounded-xl">
              Hello World
            </div>
            <div className="basis-3/5 border-2 border-black p-4 rounded-xl">
              Hello World
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
