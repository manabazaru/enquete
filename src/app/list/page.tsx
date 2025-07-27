// app/scroll-test/page.tsx
'use client';

import React from 'react';
import FixedScrollList from '@/components/data/elements/ChoiceList';

export default function Page() {
  // サンプルデータ：20項目を用意
  const sampleChoices = Array.from({ length: 20 }, (_, i) => `項目 ${i + 1}`);
  sampleChoices.push('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

  return (
    <div style={{ padding: 24 }}>
      <h1>FixedScrollList テストページ</h1>
      <FixedScrollList choicesList={sampleChoices} />
    </div>
  );
}
