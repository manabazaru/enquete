'use client';
import React from 'react';
import { Autocomplete, TextField, Paper, Box, IconButton, Divider } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const options = ['りんご', 'バナナ', 'ぶどう'];

export default function PlainAutocomplete() {
  return (
    <Box
      sx={{ border: '2px solid #ccc', p: 2, borderRadius: 2, width: 300}}
      alignItems='center'
      display='flex'
    >
      <Autocomplete<string, false, false, false>
        options={options}
        popupIcon={null}          // プルダウンアイコンを消す
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"    // アンダーラインのみの標準スタイル
            placeholder="事業部名"        // プレースホルダーも不要なら空文字に
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,  // アンダーラインも消す
              endAdornment: null,      // Autocomplete の装飾を完全に消す
            }}
            sx={{width: 220, height:'100%'}}
          />
        )}
      /><Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <ArrowCircleRightRoundedIcon />
      </IconButton>
      

    </Box>
  );
}
