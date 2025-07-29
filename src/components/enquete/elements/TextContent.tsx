import { Box, TextField } from '@mui/material';

interface TextProp {
    text    : string;
    setText : (value: string) => void;
}

const TextContent = (
    {text, setText}: TextProp
) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <Box>
            <TextField
                fullWidth
                variant='outlined'
                value={text}
                onChange={onChange}
            />
        </Box>
    );
};

export default TextContent;