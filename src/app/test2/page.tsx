'use client';
// DataTable.tsx
import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
// ───────────────────────────────────────────────
// ① 追加：コピーアイコンとボタン
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// ───────────────────────────────────────────────

// ② カラム定義を「ユーザID」「ユーザ名」「テキスト」に変更
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ユーザID', width: 100 },

  // ユーザ名
  { field: 'userName', headerName: 'ユーザ名', width: 150 },

  // テキスト列：renderCell でアイコン＋コピー機能を追加
  {
    field: 'text',
    headerName: 'テキスト',
    width: 300,
    sortable: false,
    // ③ renderCell を使って左右にアイコン＋文字を並べる
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          size="small"
          onClick={() => {
            // ④ クリックでクリップボードにコピー
            navigator.clipboard.writeText(params.value as string)
          }}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2" noWrap>
          {params.value}
        </Typography>
      </Box>
    ),
  },
]

// サンプルデータも合わせて定義し直し
const rows = [
  { id: 1, userName: '山田太郎aaaaaaaaaaaaaaaaa', text: 'こんにちは、世界！' },
  { id: 2, userName: '鈴木花子', text: 'リアクトで表を作っています' },
  { id: 3, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 4, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 5, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 6, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 7, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 8, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 9, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 10, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 11, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 12, userName: '田中一郎', text: 'コピーアイコン付きです' },
  { id: 13, userName: '田中一郎', text: 'コピーアイコン付きです' },
  // …必要に応じて追加…
]

// ページネーション設定（必要に応じて調整）
const paginationModel = { page: 0, pageSize: 5 }

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // ⑤ ページネーション初期化
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  )
}
