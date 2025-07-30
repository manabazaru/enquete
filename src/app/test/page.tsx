'use client';
// TextFieldDisplay.tsx
'use client';

import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

const TextFieldDisplay: React.FC = () => {
  // テキストフィールドの入力値を管理
  const [text, setText] = useState<string>('');

  // onChange で state を更新
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Box sx={{ width: 360, mx: 'auto', mt: 4 }}>
      {/* テキストフィールド */}
      <TextField
        fullWidth
        label="テキストを入力"
        variant="outlined"
        value={text}
        onChange={handleChange}
      />

      {/* 入力中の値を表示 */}
      <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
        入力中のテキスト: {text || 'なし'}
      </Typography>
    </Box>
  );
};

export default TextFieldDisplay;

// // CheckboxDisplay.tsx
// 'use client';

// import React, { useState } from 'react';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   Typography,
// } from '@mui/material';

// const CheckboxDisplay: React.FC = () => {
//   // チェックボックスの選択肢
//   const options = ['りんご', 'ばなな', 'ぶどう', 'みかん'];

//   // 選択中の値を文字列配列で管理
//   const [selected, setSelected] = useState<string[]>([]);

//   // チェックボックス変更時のハンドラ
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target);
//     console.log(event.target.checked);
//     const { value, checked } = event.target;
//     setSelected(prev =>
//       checked
//         ? [...prev, value]               // チェックされたら追加
//         : prev.filter(v => v !== value)  // 外されたら削除
//     );
//   };

//   return (
//     <Box sx={{ width: 360, mx: 'auto', mt: 4 }}>
//       <FormControl component="fieldset" fullWidth>
//         <FormLabel component="legend">好きな果物を選んでください</FormLabel>
//         <FormGroup>
//           {options.map(opt => (
//             <FormControlLabel
//               key={opt}
//               control={
//                 <Checkbox
//                   value={opt}
//                   checked={selected.includes(opt)}
//                   onChange={handleChange}
//                 />
//               }
//               label={opt}
//             />
//           ))}
//         </FormGroup>
//       </FormControl>

//       <Typography variant="h6" sx={{ mt: 2 }}>
//         選択中の値: {selected.length > 0 ? selected.join('、') : 'なし'}
//       </Typography>
//     </Box>
//   );
// };

// export default CheckboxDisplay;

// import React, { useState } from 'react';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   FormHelperText,
//   Button,
// } from '@mui/material';

// const RadioWithHelperText: React.FC = () => {
//   const [value, setValue] = useState<number>(5);
//   const [touched, setTouched] = useState<boolean>(false);

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     newValue: string
//   ) => {
//     setValue(Number(newValue));
//   };

//   const handleSubmit = () => {
//     console.log(touched);
//     setTouched(true);
//     console.log(touched);
//     if (isError) {
//       // エラー時の処理
//       return;
//     }
//     alert(`選択値: ${value} ${typeof(value)}`);
//   };

//   const isError =  touched && !(-1 < value && value < 3);

//   return (
//     <Box sx={{ width: 360, mx: 'auto', mt: 4 }}>
//       <FormControl
//         component="fieldset"
//         error={isError}       // エラー時は true
//         required             // 必須マークを表示
//         fullWidth
//         sx={{ mb: 2 }}
//       >
//         <FormLabel component="legend">好きな色を選んでください</FormLabel>

//         <RadioGroup
//           name="favorite-color"
//           value={value}
//           onChange={handleChange}
//         >
//           <FormControlLabel
//             value={0}
//             control={<Radio />}
//             label="赤"
//           />
//           <FormControlLabel
//             value={1}
//             control={<Radio />}
//             label="緑"
//           />
//           <FormControlLabel
//             value={2}
//             control={<Radio />}
//             label="青"
//           />
//         </RadioGroup>

//         {/* FormHelperText を使ってヘルプ or エラー文を表示 */}
//         <FormHelperText>
//           {isError
//             ? '※ 色を選択してください'
//             : 'お好きな色をラジオボタンで選んでください'}
//         </FormHelperText>
//       </FormControl>

//       <Button variant="contained" onClick={handleSubmit}>
//         送信
//       </Button>
//     </Box>
//   );
// };

// export default RadioWithHelperText;



// 'use client';
// import React, { useState } from 'react';
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Typography,
// } from '@mui/material';

// const DropdownSample: React.FC = () => {
//   // 選択中の値を管理（string 型で保持）
//   const [selectedValue, setSelectedValue] = useState<string>('');

//   // Select の onChange ハンドラ
//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSelectedValue(event.target.value as string);
//   };

//   // メニューに表示するサンプルデータ
//   const options = [
//     { label: 'りんご', value: 'apple' },
//     { label: 'みかん', value: 'orange' },
//     { label: 'バナナ', value: 'banana' },
//   ];

//   return (
//     <Box sx={{ width: 300, mx: 'auto', mt: 4 }}>
//       <FormControl fullWidth>
//         {/* ラベル */}
//         <InputLabel id="demo-simple-select-label">
//           フルーツを選択
//         </InputLabel>

//         {/* プルダウン本体 */}
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={selectedValue}
//           label="フルーツを選択"
//           onChange={handleChange}
//         >
//           {options.map((opt) => (
//             <MenuItem key={opt.value} value={opt.value}>
//               {opt.label}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       {/* 選択結果の表示 */}
//       <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
//         {selectedValue
//           ? `選択中のフルーツ: ${options.find(o => o.value === selectedValue)?.label}`
//           : 'まだ何も選択されていません'}
//       </Typography>
//     </Box>
//   );
// };

// export default DropdownSample;
