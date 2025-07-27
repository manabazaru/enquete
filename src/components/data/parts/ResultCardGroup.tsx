import ResultCard, { ResultProp } from '@/components/data/parts/ResultCard';
import { Box } from '@mui/material';

export interface ResultCardGroupProps {
    enqueteName     : string;
    resultProps : ResultProp[];
}

const ResultCardGroup = ( { enqueteName, resultProps } : ResultCardGroupProps ) => {

    return (
        <Box
            display='flex'
            justifyContent='center'
            flexWrap='wrap'
            gap={2}
            alignItems='center'>
            {resultProps.map(( prop : ResultProp, idx ) => (
                <ResultCard 
                    key={idx}
                    questionNo={prop.questionNo}
                    isNecessary={prop.isNecessary}
                    questionText={prop.questionText}
                    questionSubtext={prop.questionSubtext}
                    enqueteName={enqueteName}
                    questionType={prop.questionType}
                    choicesList={prop.choicesList}
                    userAnsProps={prop.userAnsProps}
                />
            ))}
        </Box>
    );
};

export default ResultCardGroup;