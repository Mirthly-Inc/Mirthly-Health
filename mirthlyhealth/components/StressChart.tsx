"use client";

import React from "react";
import { LineChart, Line, Tooltip, Legend } from "recharts";

const StressChart = ({ data }) => {
  return (
    <div className="p-6 text-white">
      <LineChart width={600} height={300}>
        <Line type="monotone" dataKey="stress_level" stroke="#555" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default StressChart;
