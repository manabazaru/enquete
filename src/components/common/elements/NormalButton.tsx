import Button  from '@mui/material/Button';

export interface NormalButtonProp {
    label: string;
    onClick : () => void;
    variant?: 'text' | 'outlined' | 'contained';
    color?  : 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning';
    size?   : 'small' | 'medium' | 'large';
}

const NormalButton = ({label, onClick, variant, color, size}: NormalButtonProp) => {
    return (
        <Button onClick={onClick} variant={variant} color={color} size={size}>
            {label}
        </Button>
    );
};

export default NormalButton;
