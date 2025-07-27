'use client';
// src/components/TextInputDisplay.tsx
import React, { useState } from 'react';
import { Container } from '@mui/material';
import InputWithButton from '@/components/temp/test/TextInputDisplay';
import DisplayText from '@/components/temp/test/DisplayText';

const Page: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleSubmit = () => {
    setDisplayValue(inputValue);
    setInputValue('');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <InputWithButton
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
      />
      <DisplayText text={displayValue} />
    </Container>
  );
};

export default Page;
