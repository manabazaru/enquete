'use client';
import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import SettingBodyPage, { DeptUsersProp } from '@/components/setting/parts/SettingBodyPage';


const esqIdList = ['a0000', 'a0002', 'a0003', 'a0004'];
const nameList = ['小泉進次郎', '安倍晋三', '麻生太郎', '石破茂'];
const deptUsersProp1: DeptUsersProp = {deptName:'総務', esqIdList:esqIdList, nameList:nameList};
const deptUsersProp2: DeptUsersProp = {deptName:'法務', esqIdList:esqIdList, nameList:nameList};
const deptUsersProp3: DeptUsersProp = {deptName:'営業', esqIdList:esqIdList, nameList:nameList};
const deptUsersProps: DeptUsersProp[] = [deptUsersProp1, deptUsersProp2, deptUsersProp3];


const MySection = () => {
    return (
    <SettingBodyPage enqueteName='テストアンケート' deptUserProps={deptUsersProps}/>
    );
};

export default MySection;