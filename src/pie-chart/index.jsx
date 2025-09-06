import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const MyPieChart = () => {
  return (
    <div className="flex items-center justify-center rounded-lg overflow-hidden w-[356px] lg:w-[180px] lg:h-[180px]">
      <PieChart width={236} height={236}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={59}
          outerRadius={118}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default MyPieChart;
