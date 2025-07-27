'use client';
import { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';


export interface FixedFooterProp {
    footerContent    : React.ReactNode;
    backgroundColor? : string;
}

const FixedFooter = ({ footerContent, backgroundColor='white' }: FixedFooterProp ) => {

    const footerAreaRef = useRef<HTMLDivElement>(null);
    const [showFixed, setShowFixed] = useState(false);
    // useEffectの第2引数に[]を指定し, マウント/アンマウントのタイミングで一度だけ実行
    useEffect(() => {
        // footerAreaRef に何も登録されていない場合, 処理を終了
        if(!footerAreaRef.current){ return; }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowFixed(!entry.isIntersecting);},
            { root: null, threshold: 0}
        );

        observer.observe(footerAreaRef.current);
        return () => { observer.disconnect(); };
    }, []);

    return (
        <Box>
            {/*画面内にある時*/}
            <div ref={footerAreaRef}>
                {footerContent}
            </div>
            {/*画面外の時*/}
            {showFixed && (
            <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: {backgroundColor}
            }}
            py={2}
            >
            {footerContent}
            </Box>
            )}

        </Box>
    );
};

export default FixedFooter;