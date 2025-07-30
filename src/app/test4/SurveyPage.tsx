import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  Button,
  Stack,
} from '@mui/material';

// 質問定義
interface Question {
  id: string;
  type: 'radio' | 'checkbox' | 'text';
  label: string;
  options?: { value: string; label: string }[];
}

const questions: Question[] = [
  { id: 'q1', type: 'radio', label: '1. 性別を選択してください', options: [
    { value: 'male', label: '男性' },
    { value: 'female', label: '女性' },
    { value: 'other', label: 'その他' },
  ] },
  { id: 'q2', type: 'checkbox', label: '2. 興味のある項目を選択してください（複数選択可）', options: [
    { value: 'sports', label: 'スポーツ' },
    { value: 'music', label: '音楽' },
    { value: 'tech', label: '技術' },
  ] },
  { id: 'q3', type: 'text', label: '3. ご意見・ご要望' },
  { id: 'q4', type: 'radio', label: '4. あなたの職業は？', options: [
    { value: 'student', label: '学生' },
    { value: 'engineer', label: 'エンジニア' },
    { value: 'other', label: 'その他' },
  ] },
  { id: 'q5', type: 'checkbox', label: '5. よく飲む飲み物を選んでください（複数選択可）', options: [
    { value: 'water', label: '水' },
    { value: 'coffee', label: 'コーヒー' },
    { value: 'tea', label: 'お茶' },
  ] },
  { id: 'q6', type: 'text', label: '6. 趣味について教えてください' },
  { id: 'q7', type: 'radio', label: '7. あなたの年齢層は？', options: [
    { value: 'under20', label: '20未満' },
    { value: '20s', label: '20代' },
    { value: '30s', label: '30代' },
    { value: '40plus', label: '40以上' },
  ] },
  { id: 'q8', type: 'checkbox', label: '8. 週に運動する頻度', options: [
    { value: 'none', label: 'しない' },
    { value: '1-2', label: '1-2回' },
    { value: '3plus', label: '3回以上' },
  ] },
  { id: 'q9', type: 'text', label: '9. 最近読んだ本や記事があれば教えてください' },
  { id: 'q10', type: 'radio', label: '10. 現在住んでいる地域は？', options: [
    { value: 'kanto', label: '関東' },
    { value: 'kansai', label: '関西' },
    { value: 'other', label: 'その他' },
  ] },
  { id: 'q11', type: 'checkbox', label: '11. SNSを利用していますか？（複数選択可）', options: [
    { value: 'twitter', label: 'Twitter' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'none', label: '利用していない' },
  ] },
  { id: 'q12', type: 'text', label: '12. その他ご意見があればご記入ください' },
];

export default function SurveyPage() {
  // 全ての回答を id -> 値 で管理
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleChange = (id: string, value: any) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    console.log('提出データ:', answers);
    alert('アンケートを送信しました！');
  };

  const handleReset = () => {
    setAnswers({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" gutterBottom>
        大規模アンケートプレビュー
      </Typography>
      <Stack spacing={4} sx={{ mt: 2 }}>
        {questions.map(q => (
          <FormControl
            component="fieldset"
            key={q.id}
            sx={{ width: '100%' }}
          >
            <FormLabel component="legend">{q.label}</FormLabel>

            {q.type === 'radio' && (
              <RadioGroup
                value={answers[q.id] || ''}
                onChange={e => handleChange(q.id, e.target.value)}
              >
                {q.options?.map(opt => (
                  <FormControlLabel
                    key={opt.value}
                    value={opt.value}
                    control={<Radio />}
                    label={opt.label}
                  />
                ))}
              </RadioGroup>
            )}

            {q.type === 'checkbox' && q.options?.map(opt => (
              <FormControlLabel
                key={opt.value}
                control={
                  <Checkbox
                    value={opt.value}
                    checked={Array.isArray(answers[q.id]) && answers[q.id].includes(opt.value)}
                    onChange={e => {
                      const prev = Array.isArray(answers[q.id]) ? answers[q.id] : [];
                      handleChange(
                        q.id,
                        e.target.checked
                          ? [...prev, opt.value]
                          : prev.filter((v: string) => v !== opt.value)
                      );
                    }}
                  />
                }
                label={opt.label}
              />
            ))}

            {q.type === 'text' && (
              <TextField
                fullWidth
                multiline
                minRows={3}
                value={answers[q.id] || ''}
                onChange={e => handleChange(q.id, e.target.value)}
                sx={{ mt: 1 }}
              />
            )}
          </FormControl>
        ))}
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" onClick={handleSubmit}>
          送信
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          リセット
        </Button>
      </Stack>
    </Box>
  );
}
