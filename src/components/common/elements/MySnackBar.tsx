import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

export interface SnackBarProps {
    open: boolean;
    setOpen: (bool: boolean) => void;
    message: string;
    autoHideDuration?: number;
}

const MySnackBar = (
  { open, setOpen, message, autoHideDuration = 3000 }: SnackBarProps
) => {

  const handleClose = (
    event: React.SyntheticEvent<any, Event> | Event,
    reason?: SnackbarCloseReason
  ) => {
    // クリックアウェイ時は無視
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical:'top', horizontal:'center' }}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message}
    />
  );
};

export default MySnackBar;
