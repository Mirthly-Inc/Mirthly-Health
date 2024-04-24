"use client";

import React from "react";
import { LineChart, Line, Tooltip, Legend } from "recharts";

const CustomTooltip = ({ payload, label, active }) => {
  if (active) {
    const analysis = payload[0].payload;
    return (
      <div className="p-8 custom-tooltip bg-[#cbddfb] shadow-md border border-black rounded-lg backdrop-blur-md relative hover">
        <div
          className="absolute left-2 top-2 w-2 h-2 rounded-full"
          style={{ background: "#0000" }}
        ></div>
        <p className="intro text-black text-xl uppercase">
          Stress Level: {analysis.stress_level}
        </p>
      </div>
    );
  }
};

const StressChart = ({ data }) => {
  return (
    <div className="p-6 text-black">
      <LineChart width={600} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="stress_level"
          stroke="#ffff"
          className="text-black"
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </div>
  );
};

export default StressChart;
