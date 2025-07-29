// 質問 Prop
export interface QuestionProp {
    questionNo   : number;   
    isNecessary  : boolean;  
    text         : string;
    subText      : string;
    choiceList   : string[];
    questionType : number;    // 1: ラジオ, 2: チェックボックス, 3: 自由記述, 4: プルダウン
}

export interface QAProp extends QuestionProp {
    answer : number | string | number[]; 
}

// 1アンケート全体の質問 Prop
export interface QuestionsProp {
    questionPropList : QuestionProp[];
}

// 1アンケート全体の回答 Prop
export interface AnswersProp {
    // それぞれの形式事に解答を分類
    // 各型式には質問番号が小さい順に格納
    radioAnsList     : number[];
    checkboxAnsList  : number[][];
    textAnsList      : string[];
    pulldownAnsList  : number[];
}

// 1アンケートの Prop
export interface EnqueteProp {
    enqueteName     : string;
    questionsProp   : QuestionsProp;
    answersProp     : AnswersProp;
}
