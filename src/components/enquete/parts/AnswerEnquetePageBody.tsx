import { EnqueteProp } from '@/components/enquete/elements/CommonInterfaces';
import { useMemo } from 'react';



const AnswerEnquetePageBody = (
    {enqueteName, questionsProp, answersProp}: EnqueteProp
) => {
    const questionPropList = useMemo(() => questionsProp.questionPropList, []);
    // typeIndexList は [問題形式番号, 問題形式ごとのリストにおけるインデックス] が格納
    const typeIndexList: number[][] = useMemo(() => getTypeIndexList(), []);

    const getTypeIndexList = () => {
        const qNum = questionPropList.length;
        const typeIndexList: number[][] = [];
        // 質問タイプごとの累計数 (questiontype は 1~4 のため, 先頭はダミー)
        let qTypeCntList: number[] = [-1, 0, 0, 0, 0];

        for(let prop of questionPropList){
            const qType = prop.questionType;
            const qIdx  = qTypeCntList[qType];
            typeIndexList.push([qType, qIdx]);
        }
        return typeIndexList;
    };

    const getAnswer = (questionNo: number) => {
        const typeIndex = typeIndexList[questionNo];
        const type = typeIndex[0];
        const index = typeIndex[1];
        switch(type){
            case 1:
                return answersProp.radioAnsList[index];
            case 2:
                return answersProp.checkboxAnsList[index];
            case 3:
                return answersProp.textAnsList[index];
            case 4:
                return answersProp.pulldownAnsList[index];
        }
    };
}