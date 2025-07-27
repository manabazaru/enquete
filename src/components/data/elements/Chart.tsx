'use client';
// ChartComponent.tsx
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Colors
} from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Colors
)

export type ChartType = 'bar' | 'pie'

export interface ChartComponentProps {
  labels: string[]
  values: number[]
  type  : ChartType
  title?: string
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  labels,
  values,
  type,
  title,
}) => {
  if (type === 'bar') {
    // ──────────── 棒グラフ用の型 ────────────
    const data: ChartData<'bar', number[], string> = {
      labels,
      datasets: [{ label: title || '', data: values }],
    }
    const options: ChartOptions<'bar'> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        colors: {
            forceOverride: true,
        },
        legend: { display: false },
        title: { display: !!title, text: title },
      },
    }
    return <Bar data={data} options={options} />
  } else {
    // ──────────── 円グラフ用の型 ────────────
    const data: ChartData<'pie', number[], string> = {
      labels,
      datasets: [{ label: title || '', data: values }],
    }
    const options: ChartOptions<'pie'> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        colors: {
            forceOverride: true,
        },
        legend: { position: 'top' },
        title: { display: !!title, text: title },
      },
    }
    return <Pie data={data} options={options} />
  }
}

export default ChartComponent;
