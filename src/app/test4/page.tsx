'use client';
import React from 'react';
import SurveyPreview from './SurveyPreview';

export default function Page() {
  const adminInfo = {
    esqId: 'ESQ-123',
    userName: '山田太郎',
    department: '事業部A',
  };

  return (
    <SurveyPreview
      deadline="2025-08-31"
      notifyAfterEnd="通知"                       // 例: 'メール', 'Slack' など
      admin={adminInfo}
      targetDepartment="事業部B"
      thankYouMessage="アンケートご協力ありがとうございます！"
    />
  );
}
