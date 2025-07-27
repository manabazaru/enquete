// app/data-test/page.tsx
'use client';

import React from 'react';
import DataPageBody, {
  DeptProp
} from '@/components/data/parts/DataPageBody';
import { QuestionProp } from '@/components/data/parts/ResultCard';

const deptProps: DeptProp[] = [
  {
    deptName: '営業部',
    esqIdList: ['S001', 'S002', 'S003','S004', 'S005', 'S006', 'S007'],
    nameList: ['佐藤 太郎', '鈴木 二郎', '安倍晋三', '山本太郎', '麻生太郎', '小泉進次郎', '石破茂'],
    hasResponseList: [true, false, false, false, false, false],
    answers: [
      // Q1: 本日の満足度（単一選択）
      {
        userAnsProps: [
          { esqId: 'S001', name: '佐藤 太郎', ansList: [4] }
        ]
      },
      // Q2: 改善点（自由記述）
      {
        userAnsProps: [
          { esqId: 'S001', name: '佐藤 太郎', ansList: ['特になし'] }
        ]
      },
      // Q3: 好きな社内イベント（複数選択）
      {
        userAnsProps: [
          { esqId: 'S001', name: '佐藤 太郎', ansList: [0, 2] } // 忘年会, 旅行
        ]
      }
    ]
  },
  {
    deptName: '開発部',
    esqIdList: ['D001', 'D002', 'D003'],
    nameList: ['田中 花子', '山田 次郎', '高橋 美咲'],
    hasResponseList: [true, true, false],
    answers: [
      // Q1
      {
        userAnsProps: [
          { esqId: 'D002', name: '山田 次郎', ansList: [2] },
          { esqId: 'D001', name: '田中 花子', ansList: [3] }
        ]
      },
      // Q2
      {
        userAnsProps: [
          { esqId: 'D002', name: '山田 次郎', ansList: ['もう少し時間がほしい'] },
          { esqId: 'D001', name: '田中 花子', ansList: ['特にありません'] }
        ]
      },
      // Q3
      {
        userAnsProps: [
          { esqId: 'D002', name: '山田 次郎', ansList: [1, 3, 4, 5] }, // BBQ, 研修
          { esqId: 'D001', name: '田中 花子', ansList: [0] }     // 忘年会
        ]
      }
    ]
  },
  {
    deptName: '人事部',
    esqIdList: ['H001', 'H002', 'H003'],
    nameList: ['岡田 信之', '伊藤 真由美', '清水 健太'],
    hasResponseList: [true, false, true],
    answers: [
      // Q1
      {
        userAnsProps: [
          { esqId: 'H001', name: '岡田 信之', ansList: [4] },
          { esqId: 'H003', name: '清水 健太', ansList: [0] }
        ]
      },
      // Q2
      {
        userAnsProps: [
          { esqId: 'H001', name: '岡田 信之', ansList: ['福利厚生は良い'] },
          { esqId: 'H003', name: '清水 健太', ansList: ['もう少し改善をお願いします'] }
        ]
      },
      // Q3
      {
        userAnsProps: [
          { esqId: 'H001', name: '岡田 信之', ansList: [0, 1] }, // 忘年会, BBQ
          { esqId: 'H003', name: '清水 健太', ansList: [2, 3] }   // 旅行, 研修
        ]
      }
    ]
  }
];

const questionProps: QuestionProp[] = [
  {
    questionNo: 1,
    isNecessary: true,
    questionText: '本日の満足度を教えてください。aaaaaaaaaaaaaaaaaa',
    questionSubtext: '1: 非常に不満 ～ 5: 非常に満足',
    questionType: '単一選択',
    choicesList: ['1', '2', '3', '4', '5']
  },
  {
    questionNo: 2,
    isNecessary: false,
    questionText: '改善点があればご記入ください。',
    questionSubtext: '',
    questionType: '自由記述'
  },
  {
    questionNo: 3,
    isNecessary: false,
    questionText: '好きな社内イベントをすべて選択してください。aaaaaaaaaaaaaaaa',
    questionSubtext: '',
    questionType: '複数選択',
    choicesList: ['忘年会', 'BBQ', '旅行', '研修', '普段の宴会', 'パーティ']
  }
];

export default function Page() {
  return (
    <DataPageBody
      enqueteName="テストアンケート（拡張版）"
      deptProps={deptProps}
      questionProps={questionProps}
    />
  );
}
