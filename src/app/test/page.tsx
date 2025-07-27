'use client';
// app/test/page.tsx
import React from 'react';
import DownloadableChart from '@/components/data/parts/DownloadableChart';
import DataCardGroup from '@/components/data/parts/ResponseStateCard';
import { Box } from '@mui/material';
import CommonArea from '@/components/data/parts/CommonArea';
import FilledTab from '@/components/common/elements/FilledTab';

const TestPage = () => {
  // サンプルデータ
  const depts = ['グループ経営ソリューション事業部', '製造', '金融1', 'グループ経営ソリューション事業部', 'グループ経営ソリューション事業部', '金融2'];
  const label = '全体';
  const responseRate = 20;
  const responseCount = 20;
  const labels = ['回答', '未回答']
  const values = [85, 100-85]
  const fileName = 'response_chart.png'
  const totalChart = <DownloadableChart
            labels={labels}
            values={[responseCount, 100-responseCount]}
            type="pie"
            fileName={'total_chart.png'}
            height={300}
            top={20}
            right={20}

          />
  const content = (
    <div style={{ padding: 12 }}>
      <AnswerStateGrid
        deptName="グループ経営ソリューション事業部"
        responseRate={85}
        responseCount={100}
        chart={
          <DownloadableChart
            labels={labels}
            values={values}
            type="pie"
            fileName={fileName}
          />
        }
      />
    </div>
  );
  const contents = [content, content, content, content, content];
  const responseContents = (
    <Box>
     <DataCardGroup contents={contents}/>
    </Box>
  );
  const tabProps = [
  {
    title: '回答状況',
    eventKey: 'responseState',
    content: responseContents
  },
  {
    title: '回答結果',
    eventKey: 'result',
    content: <div>Welcome to the Home tab!</div>
  }

];

const tabsProp = {
  activeKey: 0,              // 初期表示するタブのインデックス
  id: 'filled-tab-test',     // <Tabs> の id 属性
  className: 'mb-3',         // CSS クラス
  variant: 'pills',          // react-bootstrap の variant
  color: 'primary',          // カスタムカラー（必要に応じて FilledTab が対応）
};


  return (
    <Box>
    <CommonArea label={label} depts={depts} responseRate={responseRate} responseCount={responseCount} chart={totalChart}/>
    <FilledTab tabProps={tabProps} tabsProp={tabsProp} />
    </Box>
  )
}

export default TestPage
