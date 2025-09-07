import React, { useMemo } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";

// Predefined palette
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2", "#D65DB1"];

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const MyPieChart = () => {
  const storeData = useSelector((state) => state.watchlist.items || []);

  // Assign colors per coin (stable per render)
  const dataWithColors = useMemo(() => {
    const colorMap = {};
    return storeData.map((coin, index) => {
      if (!colorMap[coin.id]) {
        colorMap[coin.id] = COLORS[index] || getRandomColor();
      }
      return {
        ...coin,
        color: colorMap[coin.id],
      };
    });
  }, [storeData]);

  const data = dataWithColors.map((coin) => ({
    name: coin.name,
    value: coin.value, 
    color: coin.color,
  }));

  // console.log("Pie data:", data);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-[20px] lg:flex-row">
      {data.length > 0 ? (
        <div className="flex flex-col gap-4 w-full lg:flex-row">
          {/* Pie Chart */}
          <div className="flex items-center justify-center rounded-lg overflow-hidden max-w-[356px] lg:w-[180px] lg:h-[180px]">
            <PieChart width={236} height={236}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={59}
                outerRadius={118}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Coin names with matching colors */}
          <div className="max-h-[200px] w-full flex flex-col justify-center items-between gap-4">
            {data.map((coin) => (
              <div key={coin.name} className="flex justify-between gap-2">
                <span
                  className="text-sm font-medium"
                  style={{ color: coin.color }}
                >{coin.name}</span>
                <span className="text-sm text-gray-400">
                  {coin.value.toFixed(2)} %
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-gray-500">No portfolio data</div>
      )}
    </div>
  );
};

export default MyPieChart;
