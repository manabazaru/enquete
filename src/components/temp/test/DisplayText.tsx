// src/components/DisplayText.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

export interface DisplayTextProps {
  text: string;
}

const DisplayText: React.FC<DisplayTextProps> = ({ text }) => (
  <Box mt={2} p={2} bgcolor="#f5f5f5" borderRadius={1}>
    <Typography variant="body1">
      {text || 'ここに入力内容が表示されます'}
    </Typography>
  </Box>
);

export default DisplayText;
