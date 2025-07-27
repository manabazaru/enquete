'use client';
import { Autocomplete, TextField, Paper, Box, IconButton, Divider } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

export interface FieldProp {
    placeholder : string;
    options     : string[];
    text        : string;
    onClick     : () => void;
    onChange    : (value: string) => void;
}

const AddibleTextField = (
    { placeholder, options, text, onClick, onChange }: FieldProp ) => {
    
    
    return (
        <Box
            sx={{ border: '2px solid #ccc', p: 2, borderRadius: 2, width: 300}}
            alignItems='center'
            display='flex'
            >
            <Autocomplete<string, false, false, true>
                options={options}
                popupIcon={null}
                inputValue={text}
                onInputChange={(_, newValue) => onChange(newValue)}         
                renderInput={(params) => (
                <TextField
                    value={text}
                    onChange={e => onChange(e.target.value)}
                    {...params}
                    variant='standard'   
                    placeholder={placeholder}       
                    InputProps={{
                    ...params.InputProps,
                    disableUnderline: true, 
                    endAdornment: null,   
                    }}
                    sx={{width: 220, height:'100%'}}
                />
                )}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
            <IconButton type='button' 
                        sx={{ p: '10px' }} 
                        aria-label='search'
                        onClick={onClick}>
                <ArrowCircleRightRoundedIcon />
            </IconButton>
        </Box>
    );
    
};

export default AddibleTextField;