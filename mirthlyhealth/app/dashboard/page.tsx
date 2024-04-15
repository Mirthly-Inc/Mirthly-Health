const task = [
  "Hello world",
  "Hello world",
  "Hello world",
  "Hello world",
  "Hello world",
  "Hello world",
];

const Dashboard = () => {
  return (
    <div>
      <div className="flex w-[80%] mx-auto">
        <div className="basis-3/4 m-4">
          <nav className="flex justify-between rounded-xl p-4 border-black border-2">
            <div>Mirthly Health</div>
            <div className="flex gap-4 ">
              <div>About Us</div>
              <div>Contact Us</div>
            </div>
          </nav>
          <div className="mt-10">
            <div className="flex justify-between pt-2">
              <div className="border-2 border-black rounded-xl p-4 w-[250px] h-[150px]">
                <div className="text-xl pb-4">
                  Add Your mood to get analysis
                </div>
                <button className="bg-blue-300 w-fit px-4 py-2 rounded-xl">
                  Add Mood
                </button>
              </div>
              <div className="border-2 border-black rounded-xl p-4 w-[250px] h-[150px]">
                <div className="text-xl pb-4">
                  Track and lower your addiction rate
                </div>
                <button className="bg-blue-300 w-fit px-4 py-2 rounded-xl">
                  Addiction
                </button>
              </div>
              <div className="border-2 border-black rounded-xl p-4 w-[250px] h-[150px]">
                <div className="text-xl pb-4">
                  Do tasks to improve your mental Health
                </div>
                <button className="bg-blue-300 w-fit px-4 py-2 rounded-xl">
                  Tasks
                </button>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="border-2 border-black rounded-xl basis-1/2 p-4">
                Your Tasks:
                {task.map((data, index) => (
                  <div key={index}>
                    {index + 1}. {data}
                  </div>
                ))}
              </div>
              <div className="border-2 border-black rounded-xl basis-1/2">
                Hello World
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/4 m-4">
          <div className=" rounded-xl border-black border-2 p-4 h-full">
            Graph
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
