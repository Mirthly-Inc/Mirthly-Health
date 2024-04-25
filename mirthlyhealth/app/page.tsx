"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          className="object-cover"
          src="/home.jpg"
          layout="fill"
          alt="home.jpg"
        />
        <div className="text-slate-800 font-serif flex flex-col gap-[20px] absolute h-screen w-full p-4">
          <div className="text-2xl font-medium flex justify-between w-full h-fit ">
            <div className="flex gap-2 items-center">
              <Image
                className="rounded-md"
                src="/mirthly.jpg"
                height={45}
                width={65}
                alt="mirthly logo"
              />
              <div className="font-medium text-2xl">Mirthly Health</div>
            </div>
            <div className="flex gap-6 font-sans items-center">
              <Link href="/auth" className="text-[#fff2de]">
                Login
              </Link>
              <Link
                href="/auth"
                className="px-4 py-1 rounded-xl bg-[#fff2de] text-[#243f36]"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className=" flex justify-between pr-[60px]">
            <div className="pt-[80px]">
              <div className="pl-6 font-serif text-7xl">
                Your Path to <div className="pt-6">Mental Wellness</div>
              </div>
              <div className="pt-4 text-3xl pl-6">
                <div>Servies We offer</div>
                <div className="w-[600px]">
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="bg-[#fefffe] p-6 flex justify-center items-center rounded-xl border border-black w-full">
                      Stress Analyser
                    </div>
                    <div className="bg-[#fefffe] p-6 flex justify-center items-center rounded-xl border border-black w-full">
                      Exercise
                    </div>
                    <div className="bg-[#fefffe] p-6 flex justify-center items-center rounded-xl border border-black w-full">
                      Tasks
                    </div>
                    <div className="bg-[#fefffe] p-6 flex justify-center items-center rounded-xl border border-black w-full">
                      Sleep Tracker
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#e7e9e7] font-medium font-sans grid grid-cols-1 h-fit gap-4">
              <div className="w-fit h-fit text-xl bg-[#314b42] p-4 px-6 rounded-xl">
                Emotional Support
              </div>
              <div className="w-fit h-fit text-xl bg-[#314b42] p-4 px-6 rounded-xl">
                Improved Coding Skills
              </div>
              <div className="w-fit h-fit text-xl bg-[#314b42] p-4 px-6 rounded-xl">
                Stress Reduction
              </div>
              <div className="w-fit h-fit text-xl bg-[#314b42] p-4 px-6 rounded-xl">
                Healthy Lifestyle Changes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
