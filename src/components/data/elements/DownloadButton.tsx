import { useState, useRef, useEffect } from "react";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import dynamic from "next/dynamic";
import html2canvas from "html2canvas";
import DownloadIcon from '@mui/icons-material/Download';

export interface DownloadButtonProp{
    chartRef: React.RefObject<HTMLDivElement>;
    fileName: string;
}

const DownloadImage = ({ chartRef, fileName } : DownloadButtonProp) => {
    const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if(chartRef.current){
            const canvas = await html2canvas(chartRef.current);
            const link = document.createElement("a");
            link.download = fileName;
            link.href = canvas.toDataURL();
            link.click();
        }
    };

    return (
        <IconButton 
            size="small"
            className="position-absolute top-0 end-0 m-1"
            onClick={handleDownload}>
                <DownloadIcon fontSize="small"/>
            </IconButton>
    );
}

export default DownloadImage;

