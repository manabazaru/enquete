import { Box, FormControl, Select, MenuItem } from '@mui/material';

interface PulldownProp {
    choiceList       : string[];
    selectedIndex    : number;
    setSelectedIndex : (value: number) => void;
}

const PulldownContent = (
    {choiceList, selectedIndex, setSelectedIndex}: PulldownProp
) => {

    const value = -1 < selectedIndex && selectedIndex < choiceList.length ? choiceList[selectedIndex] : '';

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedIndex(choiceList.indexOf(value));
    };

    return (
        <Box>
            <FormControl fullWidth>
                <Select 
                    value={value}
                    onChange={onChange}
                >
                    {choiceList.map((choice, idx) => (
                        <MenuItem 
                            key={idx}
                            value={choice}>
                            {choice}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default PulldownContent;