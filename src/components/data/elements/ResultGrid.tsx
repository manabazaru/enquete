import { Typography, Box } from "@mui/material";
import  Grid  from "@mui/material/Grid";

export interface BasicQuestionProp {
    questionNo     : number;
    isNecessary    : boolean;
    questionText   : string;
    questionSubtext: string;
}

interface ResultGridProp extends BasicQuestionProp {
    answerNum : number;
    chart?    : React.ReactNode;
}

const ResultGrid = (
    { questionNo, isNecessary, questionText, questionSubtext, answerNum, chart=false } : ResultGridProp
) => {
    const hasChart = Boolean(chart);
    const chartSize = 2;
    const textSize = hasChart ? 6 : 6+chartSize;

  return (
        <Grid container alignItems="center" spacing={2}>
          <Grid size={{xs:textSize}}>
            <Typography variant="h6" gutterBottom>
              No. {questionNo} ({isNecessary ? '必須' : '任意'})
            </Typography>
            <Typography variant="h6" gutterBottom>
              {questionText}
            </Typography>
            <Typography variant="body2">
              {questionSubtext}
            </Typography>
            <Typography variant="body1">
              回答数 : {answerNum} 件
            </Typography>
          </Grid>
          {hasChart && (
          <Grid size={{xs:chartSize}} alignItems='center'>
            <Box sx={{width: "100%", 
                      height: "100%", 
                      display: "flex", 
                      justifyContent: "center",
                      alignItems: "center",
                      pl: 15}}>
                      {chart}
            </Box>
          </Grid>
          )}  
        </Grid>
  );
};

export default ResultGrid;
