import ResultCard, { ResultProp } from '@/components/data/parts/ResultCard';
import { Box, Grid } from '@mui/material';

export interface ResultCardGroupProps {
    enqueteName     : string;
    resultProps : ResultProp[];
}

const ResultCardGroup = ( { enqueteName, resultProps } : ResultCardGroupProps ) => {

    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={2}
            alignItems='center'>
            {resultProps.map(( prop : ResultProp, idx ) => (
        <Box
          key={prop.questionNo}
          width="100%"
          maxWidth={600}      // お好みで幅を調整
        >
          <ResultCard
            questionNo={prop.questionNo}
            isNecessary={prop.isNecessary}
            questionText={prop.questionText}
            questionSubtext={prop.questionSubtext}
            enqueteName={enqueteName}
            questionType={prop.questionType}
            choicesList={prop.choicesList}
            userAnsProps={prop.userAnsProps}
          />
        </Box>
            ))}
        </Box>
    );
};

export default ResultCardGroup;