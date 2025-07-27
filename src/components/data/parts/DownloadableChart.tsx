'use client';
import DownloadImage from '@/components/data/elements/DownloadButton';
import ChartComponent, {ChartComponentProps} from '@/components/data/elements/Chart';
import {Box} from '@mui/material';

import { useRef } from 'react';

export interface DownloadableChartProps extends ChartComponentProps{
    fileName: string;
    height? : number;
};

const DownloadableChart = ({fileName, 
                            labels, 
                            values, 
                            type, 
                            title, 
                            height=200 }: DownloadableChartProps
) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const top = type == 'pie' ? 30 : 10;
    const right = type == 'pie' ? 5 : 10;
    return (
        <Box sx={{position: 'relative'}}>
            <Box ref={chartRef} sx={{width: '100%', height}}>
                 <ChartComponent labels={labels} values={values} type={type} title={title}/>
            </Box>
            <Box sx={{position: 'absolute', top, right}}>
            <DownloadImage chartRef={chartRef} fileName={fileName}/>
            </Box>
        </Box>
    );
};

export default DownloadableChart;
