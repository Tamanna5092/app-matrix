import React from "react";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Rechart({ ratings }) {
  const singleRating = ratings.map((rating) => {
    return {
      name: rating.name,
      count: rating.count,
    };
  });

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Ratings</h3>

      <ResponsiveContainer>
        <BarChart
          data={singleRating}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#f97316"
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
