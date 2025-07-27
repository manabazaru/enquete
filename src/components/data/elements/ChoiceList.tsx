// components/FixedScrollList.tsx
import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

export interface FixedScrollListProps {
  choicesList: string[];
}

const ChoiceList = ({ choicesList }) => {
  return (
    <Box
      sx={{
        width: '100%',              // 横サイズを固定（pxでも % でもOK）
        height: 200,             // 縦サイズを固定
        overflowX: 'auto',       // 横オーバー時スクロール
        overflowY: 'auto',       // 縦オーバー時スクロール
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
      }}
    >
      <List disablePadding>
        {choicesList.map((choice, idx) => (
          <ListItem key={idx} disableGutters divider>
            <ListItemText primary={choice} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChoiceList;
