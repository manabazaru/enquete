// TestMyModalWithNormalButton.tsx
'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import NormalButton, { NormalButtonProp } from '@/components/common/elements/NormalButton';
import MyModal from '@/components/common/parts/MyModal';

const TestMyModalWithNormalButton: React.FC = () => {
  const [show, setShow] = useState(false);

  // フッターボタンの定義
  const buttonProps: NormalButtonProp[] = [
    {
      label: 'キャンセル',
      onClick: () => setShow(false),
      variant: 'outlined',
      color: 'error',
      size: 'medium',
    },
    {
      label: 'OK',
      onClick: () => {
        console.log('OK clicked');
        setShow(false);
      },
      variant: 'contained',
      color: 'primary',
      size: 'medium',
    },
  ];

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        MyModal + NormalButton テスト
      </Typography>

      {/* モーダルを開くボタン */}
      <NormalButton
        label="モーダルを開く"
        onClick={() => setShow(true)}
        variant="contained"
        color="info"
        size="medium"
      />

      {/* テスト用モーダル */}
      <MyModal
        show={show}
        onHide={() => setShow(false)}
        title="テストモーダル"
        content={
          <Box>
            <Typography>
              これは NormalButton をフッターに持つモーダルです。
            </Typography>
          </Box>
        }
        buttonProps={buttonProps}
        centered
        size="sm"
      />
    </Box>
  );
};

export default TestMyModalWithNormalButton;
