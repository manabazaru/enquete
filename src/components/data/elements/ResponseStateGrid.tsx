import { Typography, Box } from "@mui/material";
import  Grid  from "@mui/material/Grid";

export interface ResponseStateGridProp {
  deptName      : string;
  responseRate  : number;
  responseNum   : number;
  totalNum      : number;
  chart         : React.ReactNode;
}

const ResponseStateGrid = ({
  deptName,
  responseRate,
  responseNum,
  totalNum,
  chart,
}: ResponseStateGridProp) => {

  return (
        <Grid container alignItems="center" spacing={2}>
          <Grid size={{xs:6}}>
            <Typography variant="h6" gutterBottom>
              {deptName}
            </Typography>
            <Typography variant="body1">
              回答率: {responseRate} %
            </Typography>
            <Typography variant="body1">
              回答数: {responseNum} 名 / {totalNum} 名
            </Typography>
          </Grid>

          <Grid size={{xs:2}} alignItems='center'>
            <Box sx={{width: "100%", 
                      height: "100%", 
                      display: "flex", 
                      justifyContent: "center",
                      alignItems: "center",
                      pl: 5 }}>
                      {chart}
                    </Box>
          </Grid>  
        </Grid>
  );
};

export default ResponseStateGrid;
