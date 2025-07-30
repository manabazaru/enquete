'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  DateRange,
  NotificationsActive,
  AccountCircle,
  Business,
  Favorite,
} from '@mui/icons-material';
import SurveyPage from './SurveyPage'; // アンケートページコンポーネント

// 管理情報の型定義
interface AdminInfo {
  esqId: string;
  userName: string;
  department: string;
}
interface SurveyPreviewProps {
  deadline: string;
  notifyAfterEnd: string;
  admin: AdminInfo;
  targetDepartment: string;
  thankYouMessage: string;
}

const SurveyPreview: React.FC<SurveyPreviewProps> = ({
  deadline,
  notifyAfterEnd,
  admin,
  targetDepartment,
  thankYouMessage,
}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box>
      {/* タイトル */}
      <Box textAlign="center" py={4}>
        <Typography variant="h4">アンケート公開確認</Typography>
      </Box>
      {/* 上部: 管理情報とコンテンツを並べる */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* 左側: 管理情報カード */}
        <Card
          variant="outlined"
          sx={{ width: '35%', maxHeight: 600, display: 'flex', flexDirection: 'column' }}
        >
          <CardHeader
            title="管理情報"
            titleTypographyProps={{ variant: 'h6' }}
          />
          <Divider />
          <CardContent sx={{ overflowY: 'auto', p: 0 }}>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <DateRange color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="期限"
                  secondary={deadline}
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <NotificationsActive color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="終了後通知"
                  secondary={notifyAfterEnd}
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <AccountCircle color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="管理者"
                  secondary={`${admin.esqId} ${admin.userName} (${admin.department})aaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`}
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <Business color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="公開事業部"
                  secondary={targetDepartment}
                />
              </ListItem>
              <Divider component="li" />
            </List>
          </CardContent>
        </Card>

        {/* 右側: タブ切り替えプレビュー */}
        <Card
          variant="outlined"
          sx={{ width: '65%', maxHeight: 600, display: 'flex', flexDirection: 'column' }}
        >
          <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
            <Tab label="プレビュー" />
            <Tab label="完了画面" />
          </Tabs>
          <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
            {tabIndex === 0 && <SurveyPage />}
            {tabIndex === 1 && (
              <Box textAlign="center" mt={4}>
                <Typography variant="h6" gutterBottom>
                  完了画面プレビュー
                </Typography>
                <Typography>{thankYouMessage}</Typography>
              </Box>
            )}
          </Box>
        </Card>
      </Box>

      {/* 下部: アクションボタン */}
      <Box
        component="footer"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2,
          gap: 2,
          height: 36,
        }}
      >
        <Button variant="outlined" size="small">
          ← 戻る
        </Button>
        <Button variant="contained" size="small">
          公開
        </Button>

      </Box>
    </Box>
  );
};

export default SurveyPreview;