"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CustomTooltip = ({ payload, label, active }: any) => {
  if (active) {
    const analysis = payload[0].payload;
    return (
      <div className="p-8 custom-tooltip bg-[#cbddfb] shadow-md border border-black rounded-lg backdrop-blur-md relative hover">
        <div
          className="absolute left-2 top-2 w-2 h-2 rounded-full"
          style={{ background: "#0000" }}
        ></div>
        <p className="intro text-black text-xl uppercase">
          Sleep Level: {analysis.sleep_level}
        </p>
      </div>
    );
  }
};

const SleepBarChart = ({ data }: any) => {
  console.log(data);
  return (
    <div className=" h-[90%] ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data}>
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="sleep_level" fill="#ffff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepBarChart;
