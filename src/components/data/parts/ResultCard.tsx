import DataCard from '@/components/data/elements/DataCard';
import DownloadableChart from '@/components/data/parts/DownloadableChart';
import ResultGrid, { BasicQuestionProp } from '@/components/data/elements/ResultGrid';
import ResultTable, { ResultRow } from '@/components/data/elements/ResultTable';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChoiceList from '@/components/data/elements/ChoiceList';


export interface UserAnsProp {
    /*
    ansList に格納される値
    - 問題形式によって中身が異なる
    - 自由記述 -> string が1つ入った配列
    - 単一選択 -> number が1つ入った配列
    - 複数選択 -> number が複数入った配列
    - 選択式における number は選択肢の番号を示す。5択の1つ目なら 0 が配列に格納される
    */
    esqId   : string;
    name    : string;
    ansList : string[] | number[];
}

export interface QuestionProp extends BasicQuestionProp {
    /*
    BasicQuestionProp の要素
    - questionNo     : number;
    - isNecessary    : boolean;
    - questionText   : string;
    - questionSubtext: string;
     */
    questionType    : '単一選択' | '複数選択' | '自由記述';
    choicesList?    : string[];
}

export interface AnswerProp {
    userAnsProps : UserAnsProp[]; 
}

export interface ResultProp extends QuestionProp, AnswerProp {}

interface ResultCardProp extends ResultProp { enqueteName : string; }


const ResultCard = (
    { questionNo, isNecessary, questionText, 
      questionSubtext, enqueteName,
      questionType, choicesList, userAnsProps } : ResultCardProp
) => {

    let isPie: boolean = false; 
    let overviewContent;

    switch (questionType) {
        case '自由記述':
            overviewContent = (
                <div style={{ padding : 12 }}>
                    <ResultGrid 
                        questionNo={questionNo}
                        isNecessary={isNecessary}
                        questionText={questionText}
                        questionSubtext={questionSubtext}
                        answerNum={userAnsProps.length}
                    />
                </div>
            );
            break;

        case '単一選択':
            isPie = true;
        
        default:
            const chartType = isPie ? 'pie' : 'bar';
            const values: number[] = Array(choicesList.length).fill(0);
            for(let prop of userAnsProps){
                // 選択形式ではansList に選ばれた選択肢のインデックスが格納されるため, 以下の様に記述
                for(let choiceIdx of prop.ansList){ values[choiceIdx] += 1; }
            }
            const fileName = enqueteName + '_Q' + questionNo;
            const resultChart = <DownloadableChart
                                    labels={choicesList}
                                    values={values}
                                    type={chartType}
                                    fileName={fileName}
                                    height={300}
                                />
            overviewContent = (
                <div style={{ padding: 12 }}>
                    <ResultGrid
                    questionNo={questionNo}
                        isNecessary={isNecessary}
                        questionText={questionText}
                        questionSubtext={questionSubtext}
                        answerNum={userAnsProps.length}
                        chart={resultChart}
                    />
                </div>
            );
    }

    const rows : ResultRow[] = [];
    for(let prop of userAnsProps){
        let ansText: string = prop.ansList.join('\n');
        // 選択方式の回答加工 (choicesListの番号からテキストを取得)
        if(questionType == '単一選択' || questionType =='複数選択'){
            const ansTextList: string[] = prop.ansList.map((choiceIdx) => {return choicesList[choiceIdx]});
            ansText = ansTextList.join(', ');
        }
        const row : ResultRow = {
            esqId  : prop.esqId,
            name   : prop.name,
        /*
         ansTextの記述方法
         - 選択形式では選択肢の文字列を表示
         - 複数選択の場合, 選択肢の文字列を羅列し, 間に改行を挿入
         - 自由記述の場合, 解答をそのまま表示
         */
            ansText: ansText
        };
        rows.push(row);
    }

    const additionalContent = ( 
        <Box>
            {questionType!='自由記述' &&
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1-content'>
                    <Typography component="span">選択肢リスト</Typography>
                </AccordionSummary>
                <AccordionDetails>
                     <ChoiceList choicesList={choicesList}/>
                </AccordionDetails>
            </Accordion>}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1-content'>
                    <Typography component="span">回答詳細</Typography>
                </AccordionSummary>
                <AccordionDetails>
                     <ResultTable rows={rows}/>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
    const popupTitle = 'Q. ' + questionNo;

    return (
        <DataCard 
            overviewContent={overviewContent}
            additionalContent={additionalContent}
            popupTitle={popupTitle}
        />
    );

};

export default ResultCard;