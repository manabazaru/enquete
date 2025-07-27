import React from 'react';
import { Box, Grid, Card, Typography } from '@mui/material';
import Checkboxes from '@/components/data/elements/Checkboxes';
import CommonGrid from '@/components/data/elements/CommonGrid';
import { DeptResponseStateProp } from '@/components/data/parts/ResponseStateCard';
import DownloadableChart from '@/components/data/parts/DownloadableChart';

export interface CommonAreaProps {
  deptResponseStateProps : DeptResponseStateProp[];
  enqueteName            : string;
  checkedState           : boolean[];
  handleChange           : (index: number, isChecked: boolean) => void;
}

const CommonArea = ({
  deptResponseStateProps,
  enqueteName,
  checkedState,
  handleChange
} : CommonAreaProps ) => {

  const depts: string[] = [];

  let tempResponseNum: number = 0;
  let tempTotalNum: number = 0;

  for(let prop of deptResponseStateProps){
    depts.push(prop.deptName);
    tempResponseNum += prop.hasResponseList.filter((bool) => bool).length;
    tempTotalNum += prop.esqIdList.length;
  }

  const responseNum = tempResponseNum;
  const totalNum = tempTotalNum;
  // 回答率の処理 (%表示、小数第2位で四捨五入)
  const responseRate = Math.round(responseNum / totalNum * 100 * 10) / 10;

  const labels = ['回答済み', '未回答'];
  const values = [responseNum, totalNum-responseNum];
  const fileName: string = 'RepChart_' + enqueteName + '.png';
  const responseStateChart = <DownloadableChart
                                  labels={labels}
                                  values={values}
                                  type='pie'
                                  fileName={fileName}
                                  height={300}
                              />

  return (
    <Box sx={{borderRadius: 2, p: 2,  maxWidth:1000, minWidth: 700, mx:'auto'}}>
      <Grid
        container
        spacing={2}
        direction='column'
        alignItems='center'
        maxWidth='1000px'
      >
        <Grid>
          <Typography variant="h3" gutterBottom>
            {enqueteName}
          </Typography>
        </Grid>
        <Grid>
          <Card sx={{ boxShadow: 'none', width: '100%' }}>
            <CommonGrid
              responseRate={responseRate}
              responseNum={responseNum}
              totalNum={totalNum}
              chart={responseStateChart}
            />
          </Card>
        </Grid>

        <Grid>
          <Card sx={{ boxShadow: 'none', width: '100%' }}>
            <Checkboxes labels={depts} checked={checkedState} onChange={handleChange}/>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommonArea;
