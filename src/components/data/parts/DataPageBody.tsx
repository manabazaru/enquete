'use client';
import { QuestionProp, AnswerProp, ResultProp } from '@/components/data/parts/ResultCard';
import { Box } from '@mui/material';
import CommonArea, {CommonAreaProps} from '@/components/data/parts/CommonArea';
import FilledTab from '@/components/common/elements/FilledTab';
import ResponseStateCardGroup, { ResponseStateCardGroupProps } from '@/components/data/parts/ResponseStateCardGroup';
import ResultCardGroup, { ResultCardGroupProps } from '@/components/data/parts/ResultCardGroup';
import { DeptResponseStateProp } from '@/components/data/parts/ResponseStateCard';
import MySnackBar from '@/components/common/elements/MySnackBar';
import { useState } from 'react';

export interface DeptProp {
    deptName        : string;
    esqIdList       : string[];
    nameList        : string[];
    hasResponseList : boolean[];
    answers         : AnswerProp[];
}

export interface DataBodyProps {
    enqueteName   : string;
    deptProps     : DeptProp[];
    questionProps : QuestionProp[];
}

const DataPageBody = ({ enqueteName, deptProps, questionProps }: DataBodyProps ) => {

    // チェックボックスの状態管理
    const [checkedState, setCheckedState] = useState<boolean[]>(
        Array(deptProps.length).fill(true)
    );

    // 回答結果用 Prop の処理
    // チェックボックスが選択されている事業部の回答データを取得
    const getCheckedDeptAnswerProps = (checkedState) => {
        const ansProps: AnswerProp[] = [];
        for(let questionIdx=0 ; questionIdx < questionProps.length ; questionIdx++){
            const ansProp : AnswerProp = { userAnsProps:[] };
            ansProps.push(ansProp);
        }
        for(let deptIdx=0; deptIdx < deptProps.length ; deptIdx++){
            if(checkedState[deptIdx]){
                deptProps[deptIdx].answers.map((ans: AnswerProp, questionIdx) => (
                    ans.userAnsProps.map((userAnsProp) => {
                        ansProps[questionIdx].userAnsProps.push(userAnsProp)
                    })
                ));
            }
        }
        return ansProps;
    };
    // 結果リスト (要素数は設問数)
    const resultProps: ResultProp[] = [];
    // resultProps の初期化
    const initialAnsProps = getCheckedDeptAnswerProps(checkedState);
    for(let questionIdx=0 ; questionIdx < questionProps.length ; questionIdx++){
        const questionProp = questionProps[questionIdx];
    
        const resultProp: ResultProp = {
            questionNo: questionProp.questionNo,
            isNecessary: questionProp.isNecessary,
            questionText: questionProp.questionText,
            questionSubtext: questionProp.questionSubtext,
            questionType: questionProp.questionType,
            choicesList: questionProp.choicesList,
            userAnsProps: initialAnsProps[questionIdx].userAnsProps
        }
        resultProps.push(resultProp);
    }
    // resultCardGroupProps の初期化
    const resultCardGroupProps : ResultCardGroupProps = {
        enqueteName : enqueteName,
        resultProps : resultProps
    };

    // 回答状況用 Prop, 共通部分用 Prop の処理
    const deptResponseStateProps : DeptResponseStateProp[] = [];        // 回答状況用
    const totalDeptResponseStateProps : DeptResponseStateProp[] = [];   // 共通用

    for(let deptIdx=0 ; deptIdx < deptProps.length ; deptIdx++){
        const prop = deptProps[deptIdx];
        const deptResponseStateProp : DeptResponseStateProp = {
            deptName        : prop.deptName,
            esqIdList       : prop.esqIdList,
            nameList        : prop.nameList,
            hasResponseList : prop.hasResponseList
        }
        if(checkedState[deptIdx]){
            deptResponseStateProps.push(deptResponseStateProp);
        }
        totalDeptResponseStateProps.push(deptResponseStateProp);
    }

    // 回答状況用 Prop の初期化
    const responseStateCardGroupProps: ResponseStateCardGroupProps = {
        enqueteName            : enqueteName,
        deptResponseStateProps : deptResponseStateProps
    }

    // checkboxes の処理記述
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const handleChange = (index: number, isChecked: boolean) => {
        // 選択されたチェックボックスが 1 つの場合, 最後のチェックボックスは外させない
        // 選択部署が 0 の場合, 表示がバグる可能性を抱えているため
        // 該当の場合は 3 秒間 snackbar を表示
        const onCount = checkedState.filter((bool) => bool).length;
        if(!isChecked && onCount <= 1){
            setSnackBarOpen(true);
            return;
        }
        const newState = [...checkedState];
        newState[index] = isChecked;
        setCheckedState(newState);
    };

    // 共通部分用 Prop の初期化
    const commonAreaProps: CommonAreaProps = {
        deptResponseStateProps : totalDeptResponseStateProps,
        enqueteName            : enqueteName,
        checkedState           : checkedState,
        handleChange           : handleChange
    }

    // FilledTab用Prop
    const tabsProp = {
        activeKey: 0,              // 初期表示するタブのインデックス
        id: 'dataTab',             // <Tabs> の id 属性
        className: 'mb-3',         // CSS クラス
        variant: 'pills',          // react-bootstrap の variant
        color: 'primary',          // カスタムカラー（必要に応じて FilledTab が対応）
    };
    // 回答状況の表示内容
    const responseStateContents = (
        <ResponseStateCardGroup
            enqueteName={responseStateCardGroupProps.enqueteName}
            deptResponseStateProps={responseStateCardGroupProps.deptResponseStateProps}
        />
    )
    // 回答結果の表示内容
    const resultContents = (
        <ResultCardGroup 
            enqueteName={resultCardGroupProps.enqueteName}
            resultProps={resultCardGroupProps.resultProps}
        />
    )
    const tabProps = [
        {
            title: '回答状況',
            eventKey: 'responseState',
            content: responseStateContents
        },
        {
            title: '回答結果',
            eventKey: 'result',
            content: resultContents
        }
    ];

    return (
        <Box py={4} px={4}>
            <MySnackBar 
                open={snackBarOpen} 
                setOpen={setSnackBarOpen} 
                message='操作が無効です。1つ以上のチェックボックスを選択してください。'
                />
            <CommonArea 
                deptResponseStateProps={commonAreaProps.deptResponseStateProps}
                enqueteName={commonAreaProps.enqueteName}
                checkedState={commonAreaProps.checkedState}
                handleChange={commonAreaProps.handleChange}
            />
            <FilledTab tabProps={tabProps} tabsProp={tabsProp}/>
        </Box>
    );
};

export default DataPageBody;
