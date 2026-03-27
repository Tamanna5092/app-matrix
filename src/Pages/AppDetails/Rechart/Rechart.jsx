import React from "react";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Rechart({ ratings = [] }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Ratings</h3>

      <ResponsiveContainer>
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis type="count" />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#f97316"
            radius={[0, 10, 10, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
