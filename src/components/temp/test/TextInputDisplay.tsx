// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';

// const TextInputDisplay: React.FC = () => {
//   const [text, setText] = useState('');
//   const [display, setDisplay] = useState('');

//   return (
//     <Box sx={{ p: 2 }}>
//       <TextField
//         placeholder="入力してください"
//         value={text}
//         onChange={e => setText(e.target.value)}
//         inputProps={{ 'aria-label': 'input-text' }}
//         sx={{ mb: 2 }}
//       />
//       <Button
//         variant="contained"
//         onClick={() => setDisplay(text)}
//       >
//         表示
//       </Button>
//       <Box sx={{ mt: 2 }}>
//         <Typography data-testid="display-text">
//           {display}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default TextInputDisplay;
// src/components/InputWithButton.tsx
import React from 'react';
import { Box, TextField, Button } from '@mui/material';

export interface InputWithButtonProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const InputWithButton: React.FC<InputWithButtonProps> = ({
  value,
  onChange,
  onSubmit
}) => (
  <Box display="flex" alignItems="center" gap={2}>
    <TextField
      label="入力テキスト"
      variant="outlined"
      fullWidth
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    <Button variant="contained" onClick={onSubmit}>
      表示
    </Button>
  </Box>
);

export default InputWithButton;
