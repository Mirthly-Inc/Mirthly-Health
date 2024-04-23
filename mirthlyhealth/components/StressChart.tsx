"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const StressChart = ({ data }) => {
  return (
    <div>
      <LineChart width={600} height={300}>
        <Line type="monotone" data={data} stroke="#555" />
        <XAxis />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default StressChart;
