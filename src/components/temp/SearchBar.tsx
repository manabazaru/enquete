// SearchBar.tsx
import React, { FC, KeyboardEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  query: string;
  onQueryChange: (q: string) => void;
  onSearch: () => void;
};

export const SearchBar: FC<Props> = ({ query, onQueryChange, onSearch }) => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="キーワードを入力"
      value={query}
      onChange={e => onQueryChange(e.target.value)}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={onSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};
