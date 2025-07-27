import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Box } from '@mui/material';
import MyModal from '@/components/common/parts/MyModal';
import { NormalButtonProp } from '@/components/common/elements/NormalButton';


export interface DataCardProp {
  overviewContent          : React.ReactNode;
  additionalContent: React.ReactNode;
  popupTitle       : string; 
}

interface CardWrapperProps {
  animate: boolean;
}

// 外側のアニメーション＆レイアウト用コンテナ
const CardWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'animate',
})<CardWrapperProps>(({ theme, animate }) => ({
  display: 'inline-block',
  maxWidth: 550,
  margin: theme.spacing(0.5),
  opacity: animate ? 1 : 0,
  transform: animate ? 'translateY(0)' : 'translateY(20px)',
  transition: 'all 0.4s ease',
}));

// Card 本体のスタイル（余白・角丸・ホバー）
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.3)',
    transform: 'scale(1.01)',
  },
}));

const DataCard = ({ overviewContent, additionalContent, popupTitle }: DataCardProp ) => {
  const [animate, setAnimate] = useState(false);
  const [show, setShow] = useState(false);

  const buttonProp: NormalButtonProp = {
    label   : '閉じる',
    onClick : () => setShow(false),
    variant : 'contained',
    color   : 'inherit',
    size    : 'medium'

  }

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box>
      <CardWrapper animate={animate}>
        <StyledCard onClick={() => setShow(true)}>
          <CardContent>{overviewContent}</CardContent>
        </StyledCard>
      </CardWrapper>
      <MyModal 
        show={show}
        onHide={() => setShow(false)}
        title={popupTitle}
        content={
          <Box className='gap-4'>
            {overviewContent}
            {additionalContent}
          </Box>
        }
        buttonProps={[buttonProp]}
        size='lg'/>
    </Box>
  );
};

export default DataCard;
