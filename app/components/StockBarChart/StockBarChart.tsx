"use client";

import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import ReactEcharts from 'echarts-for-react';

echarts.use([BarChart, GridComponent, CanvasRenderer]);
export const StockBarChart = ({ 
  indices
}: {
  indices: { name: string; value: number }[];
}) => {
  const option = {
    title: {
      text: "Stock Bar Chart"
    },
    xAxis: {
      type: 'category',
      data: indices.map((index) => index.name)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: indices.map((index) => index.value),
        type: 'bar',
        barWidth: "60%",
        itemStyle: {
          color: "#547000"
        }
      }
    ]
  }
  return <ReactEcharts option={option} />;
};