"use client";
import * as echarts from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import ReactEcharts from 'echarts-for-react';

echarts.use([BarChart, GridComponent, CanvasRenderer, LineChart, CanvasRenderer]);

export default function CryptoLineChart({
  cryptos,
  labels
}: {
  cryptos: { name: string; values: number[] }[];
  labels: string[];
}) {
  const series = cryptos.map((crypto) => ({
    data: crypto.values,
    type: "line",
    name: crypto.name,
    smooth: true,
    lineStyle: {
      width: 2     
    }
  }));
  const option = {
    title: {
      text: 'Crypto Line Chart',
      subtext: 'Price over time',
      left: 'center'
    },
    legend: {
      bottom: "0%"
    },
    xAxis: {
      type: 'category',
      data: labels,
      axisLabel: {
        rotate: 45
      }
    },
    yAxis: {
      type: 'value'
    },
    series  
  };
  return <ReactEcharts option={option} echarts={echarts} />;
}
