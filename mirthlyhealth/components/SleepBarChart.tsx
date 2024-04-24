'use client'

import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const SleepBarChart = ({data}) =>{
    return(
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}


export default SleepBarChart