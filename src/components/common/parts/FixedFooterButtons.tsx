'use client';
import { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import NormalButton, {NormalButtonProp} from '@/components/common/elements/NormalButton';
import FixedFooter from '@/components/common/parts/FixedFooter';

export interface FixedFooterButtonsProps {
    buttonProps      : NormalButtonProp[];
}

const FixedFooterButtons = (
    {buttonProps}: FixedFooterButtonsProps 
) => {
    
    const buttonContent = (
        <Box className='d-flex justify-content-center gap-4'>
            {buttonProps.map((prop, idx) => (
                <NormalButton
                    key={idx}
                    label={prop.label}
                    onClick={prop.onClick}
                    variant={prop.variant}
                    color={prop.color}
                    size={prop.size}/>
            ))}
        </Box>
    );
    return (
        <FixedFooter footerContent={buttonContent}/>
    );


};

export default FixedFooterButtons;