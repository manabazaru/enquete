import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const TextInputDisplay: React.FC = () => {
  const [text, setText] = useState('');
  const [display, setDisplay] = useState('');

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        placeholder="入力してください"
        value={text}
        onChange={e => setText(e.target.value)}
        inputProps={{ 'aria-label': 'input-text' }}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={() => setDisplay(text)}
      >
        表示
      </Button>
      <Box sx={{ mt: 2 }}>
        <Typography data-testid="display-text">
          {display}
        </Typography>
      </Box>
    </Box>
  );
};

export default TextInputDisplay;
