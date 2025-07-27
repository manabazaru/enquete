'use client';

import React from 'react';
import ChartComponent from '@/components/data/elements/Chart';

const ExamplePage = () => {
  const labels = ['A', 'B', 'C', 'D']
  const values = [12, 19, 3, 5]

  return (
    <div style={{ width: 600, height: 400 }}>
      {/* 棒グラフ */}
      <ChartComponent
        labels={labels}
        values={values}
        type="bar"
        title="棒グラフの例"
      />

      {/* 円グラフ */}
      <ChartComponent
        labels={labels}
        values={values}
        type="pie"
        title="円グラフの例"
      />
    </div>
  )
}

export default ExamplePage
