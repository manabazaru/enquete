'use client';
import { Box, Divider, FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import MyDivider from '@/components/setting/elements/MyDivider';
import FixedFooterButtons from '@/components/common/parts/FixedFooterButtons';
import NormalButton, { NormalButtonProp } from '@/components/common/elements/NormalButton';
import { useState } from 'react';
import MyModal from '@/components/common/parts/MyModal';
import AddibleTextField from '@/components/setting/parts/AddibleTextField';

export interface DeptUsersProp {
    deptName    : string;
    esqIdList   : string[];
    nameList    : string[];
}

export interface SettingBodyPageProps {
    enqueteName     : string;
    deptUserProps   : DeptUsersProp[];
}

const SettingBodyPage = (
    {enqueteName, deptUserProps} : SettingBodyPageProps
) => {

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [deptText, setDeptText] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [showAdminModal, setShowAdminModal] = useState(false);

    const onClickAddibleButton = () => {
        setDisplayText(deptText);
        setDeptText('');
    };

    const deptList: string[] = [];
    deptUserProps.map((dept, idx) => (deptList.push(dept.deptName)));

    const updateButtonProp: NormalButtonProp = {
        label   : '更新',
        onClick : () => setShowUpdateModal(true),
        variant : 'contained',
        color   : 'inherit',
        size    : 'large'
    };

    const backButtonProp: NormalButtonProp = {
        label   : '戻る',
        onClick : () => setShowUpdateModal(false),
        variant : 'contained',
        color   : 'info',
        size    : 'large'
    };

    const confirmUpdateButtonProp: NormalButtonProp = {
        label   : '確認',
        onClick : () => setShowUpdateModal(false),
        variant : 'contained',
        color   : 'error',
        size    : 'large'
    };

    const addAdminButtonProp: NormalButtonProp = {
        label   : '管理者を追加',
        onClick : () => setShowAdminModal(true),
        variant : 'contained',
        color   : 'info',
        size    : 'medium'
    };

    const modalContent = (
        <Typography variant='h6'>
            設定を変更します。本当によろしいですか？
        </Typography>
    );

    return (
        <Box py={8} px={40} sx={{minWidth: 700}}>
            <Grid
                container
                spacing={6}
                direction='column'
            >
                <Grid container alignItems='center' justifyContent='center' py={2}>
                    <Typography variant='h3'>
                        {enqueteName}
                    </Typography>
                </Grid>

                <Grid>
                    <Typography variant='h5'>
                        公開期限設定
                    </Typography>
                    <MyDivider/>
                    <Box sx={{display: 'flex', gap: 2}} alignItems='center'>
                        <Box pl={2}>
                            <Typography variant='body1'>
                                アンケート受付終了日: 
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='body1'>
                                ここは日付フォームに変更予定
                            </Typography>
                        </Box>

                    </Box>
                    <Box pt={3} pl={2}>
                        <Typography variant='body1' color='error'>
                            エラー用
                        </Typography>
                    </Box>
                </Grid>

                <Grid>
                    <Typography variant='h5'>
                        公開部署設定
                    </Typography>
                    <MyDivider/>
                    <Box sx={{display: 'flex', gap: 2}} alignItems='center'>
                        <Box>
                            <AddibleTextField options={deptList}
                                              placeholder='事業部名'
                                              text={deptText}
                                              onClick={onClickAddibleButton}
                                              onChange={setDeptText}
                            />
                        </Box>
                        <Box>
                            <Typography variant='body2'>{displayText}da</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Typography variant='h5'>
                        アンケート管理者設定
                    </Typography>
                    <MyDivider/>
                    <Box sx={{display: 'flex', gap: 2}} alignItems='center'>
                        <Box>
                            <Typography variant='h6'>現在の管理者</Typography>
                        </Box>
                        <Box>
                            <NormalButton 
                                onClick={addAdminButtonProp.onClick}
                                label={addAdminButtonProp.label}
                                variant={addAdminButtonProp.variant}
                                color={addAdminButtonProp.color}
                                size={addAdminButtonProp.size}
                            />
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Typography variant='h5'>
                        通知設定
                    </Typography>
                    <MyDivider/>
                    <Box>
                        <FormControlLabel control={<Switch />} 
                            label='チェック後に設定変更を行うと、すぐに公開対象事業部へ Teams から通知されます。' />
                    </Box>
                </Grid>

                <Grid>
                    <Typography variant='h5'>
                        感謝メッセージ設定
                    </Typography>
                    <MyDivider/>
                    <Box>
                    <Typography variant='body1'>
                        従業員がアンケート回答を完了すると、以下のメッセージが表示されます。
                    </Typography>
                    </Box>
                </Grid>

                <FixedFooterButtons buttonProps={[updateButtonProp]}/>
            </Grid>
            <MyModal
                show={showUpdateModal}
                onHide={() => setShowUpdateModal(false)}
                title='アンケート設定変更確認'
                content={modalContent}
                buttonProps={[backButtonProp, confirmUpdateButtonProp]}
                size='lg'
                />
        </Box>
    );
};

export default SettingBodyPage;