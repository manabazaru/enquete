// SearchResults.tsx
import React, { FC } from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

type Item = { id: string; title: string; description?: string };

type Props = { items: Item[] };

export const SearchResults: FC<Props> = ({ items }) => {
  if (items.length === 0) {
    return <Typography variant="body2">結果がありません</Typography>;
  }

  return (
    <Paper sx={{ mt: 2 }}>
      <List>
        {items.map(item => (
          <ListItem key={item.id} divider>
            <ListItemText
              primary={item.title}
              secondary={item.description}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
