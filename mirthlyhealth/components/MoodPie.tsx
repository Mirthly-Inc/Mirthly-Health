"use client";
import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#A7EB9A", "#E5A5EB", "#9EDBEA"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const moods = ["Sad", "Neutral", "Happy"];
  const radius = innerRadius + (outerRadius - innerRadius) * 0.22;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.tan(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#340263"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="font-semibold"
    >
      {`${moods[index]}`}
    </text>
  );
};

const MoodPie = ({ data }) => {
  return (
    <div className="h-[90%] border-2 border-white">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodPie;
