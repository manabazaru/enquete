'use client';
// SearchPage.tsx
import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { SearchBar } from "@/components/temp/SearchBar";
import { SearchResults } from '@/components/temp/SearchResult';

type Item = { id: string; title: string; description?: string };

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      // 例: fetch(`/api/search?q=${encodeURIComponent(query)}`)
      //       .then(res => res.json())
      //       .then(data => setResults(data.items));
      // デモ用ローカルフィルタリング
      const allItems: Item[] = [
        { id: '1', title: 'りんご', description: '赤い果物' },
        { id: '2', title: 'バナナ', description: '黄色い果物' },
        { id: '3', title: 'オレンジ', description: 'オレンジ色の果物' },
        { id: '4', title: 'りんごa', description: '赤い果物' },
        { id: '5', title: 'りんごb', description: '赤い果物' },
      ];
      const filtered = allItems.filter(item =>
        item.title.includes(query)
      );
      setResults(filtered);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box display="flex" alignItems="center">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          onSearch={handleSearch}
        />
      </Box>

      {/* 読み込み中インジケータ */}
      {loading && <Typography sx={{ mt: 2 }}>検索中…</Typography>}

      <SearchResults items={results} />
    </Container>
  );
};

export default SearchPage;