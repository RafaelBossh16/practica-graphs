"use client";

import ReactEcharts from "echarts-for-react";

export default function StockDayChart({
  openPrice,
  highPrice,
  lowPrice,
  currentPrice
}: {
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  currentPrice: number;
}) {
  const option = {
    title: {
      text: "Stock Day Chart",
      left: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: ["Open", "High", "Low", "Current"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [openPrice, highPrice, lowPrice, currentPrice],
        type: "bar",
        barWidth: "50%",
        color: "#4caf50"
      }
    ]
  };
  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
}