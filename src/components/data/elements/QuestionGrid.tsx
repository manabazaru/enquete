import { Typography, Box } from "@mui/material";
import  Grid  from "@mui/material/Grid";
import EmergencyIcon from "@mui/icons-material/Emergency";

export interface QuestionGridProp {
  questionNo: number;
  questionTitle: string;
  isRequired: boolean;
  questionText: string;
  questionSubText: string;
  chart?: React.ReactNode;
}

const QuestionGrid = ({
  questionNo,
  questionTitle,
  isRequired,
  questionText,
  questionSubText,
  chart=false,
}: QuestionGridProp) => {
  const hasChart = Boolean(chart);

  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid size={hasChart ? {xs : 8} : {xs: 12}}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h6">
              {questionNo}. {questionTitle}
            </Typography>
          </Grid>
          {isRequired && (
            <Grid>
              <EmergencyIcon color="error" />
            </Grid>
          )}
        </Grid>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {questionText}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
          {questionSubText}
        </Typography>
      </Grid>

      {hasChart && (
        <Grid size={{xs:4}}>
          <Box sx={{ width: "100%", height: "100%" }}>{chart}</Box>
        </Grid>
      )}
    </Grid>
  );
};

export default QuestionGrid;
