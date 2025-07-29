import { Box, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

interface CheckboxProp {
    choiceList         : string[];
    selectedIndices    : number[];
    setSelectedIndices : (value: number[]) => void;
}

const CheckboxContent = (
    {choiceList, selectedIndices, setSelectedIndices }: CheckboxProp
) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const choice = event.target.value;
        const checked = event.target.checked;
        const choiceIdx = choiceList.indexOf(choice);
        let newSelectedIndices = selectedIndices.concat();
        // チェックが外されたら, 配列から削除
        if(!checked){
            setSelectedIndices(newSelectedIndices.filter(v => v!== choiceIdx));
            return;
        } else {
            // チェックがついたら, 昇順になるように配列の中に挿入
            // typescript は純粋な数字配列のソートがないための処理
            for(let i=0; i<newSelectedIndices.length; i++){
                if(newSelectedIndices[i] > choiceIdx){
                    newSelectedIndices.splice(i, 0, choiceIdx);
                    setSelectedIndices(newSelectedIndices);
                    return;
                }
            }
            newSelectedIndices = [...newSelectedIndices, choiceIdx];
            setSelectedIndices(newSelectedIndices);
        }

    };

    return (
        <Box>
            <FormControl fullWidth>
                <FormGroup>
                    {choiceList.map((choice, idx) => (
                        <FormControlLabel
                            key={idx}
                            label={choice}
                            control={
                                <Checkbox
                                    value={choice}
                                    checked={selectedIndices.includes(idx)}
                                    onChange={onChange}
                                />
                            }
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Box>
    );
};

export default CheckboxContent;