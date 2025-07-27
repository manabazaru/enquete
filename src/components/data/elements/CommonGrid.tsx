import { Typography, Box, Stack } from "@mui/material";
import NormalButton from "@/components/common/elements/NormalButton";
import  Grid  from "@mui/material/Grid";

export interface CommonGridProp {
  responseRate  : number;
  responseNum   : number;
  totalNum      : number;
  chart         : React.ReactNode;
}

const CommonGrid = ({
  responseRate,
  responseNum,  
  totalNum,
  chart,
}: CommonGridProp) => {

  return (
        <Grid container alignItems="center" spacing={2}>
          <Grid size={{xs:6}} sx={{maxWidth: 350}}>
            <Typography variant="h4" gutterBottom>
              全体
            </Typography>
            <Typography variant="h6">
              回答率: {responseRate} %
            </Typography>
            <Typography variant="h6">
              回答数: {responseNum} 名 / {totalNum} 名
            </Typography>
            <Box  sx={{ py: 3, display: "flex", flexDirection: "column", gap: 2, width: 200 }}>
              <Stack direction="column" spacing={2}>
                <NormalButton label="通知設定へ" onClick={()=>{console.log("toNotice")}} 
                              variant='contained' color='success' size='medium'/>
                <NormalButton label="回答CSVのダウンロード" onClick={()=>{console.log("csvDownload")}} 
                              variant='contained' color='success' size='medium'/>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{xs:2}} alignItems='center'>
            <Box sx={{width: "100%", 
                      height: "100%", 
                      display: "flex", 
                      justifyContent: "center",
                      alignItems: "center",
                      pr: 20}}>
                      {chart}
                    </Box>
          </Grid>  
        </Grid>
  );
};

export default CommonGrid;
