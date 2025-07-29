import { Radio, RadioGroup, FormControlLabel, FormControl, Box }  from '@mui/material';

interface RadioProp {
    choiceList       : string[];
    selectedIndex    : number;
    setSelectedIndex : (value: number) => void;
}

const RadioContent = (
    {choiceList, selectedIndex, setSelectedIndex}: RadioProp
) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedIndex(Number(event.target.value));
    };

    return (
        <Box>
            <FormControl fullWidth>
                <RadioGroup
                    value={selectedIndex}
                    onChange={onChange}
                >
                    {choiceList.map((choice, idx) => (
                        <FormControlLabel 
                            key={idx} 
                            value={idx} 
                            control={<Radio/>} 
                            label={choice}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default RadioContent;