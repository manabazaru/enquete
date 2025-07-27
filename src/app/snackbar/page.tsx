'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';
import MySnackBar from '@/components/common/elements/MySnackBar';

export default function Page() {
  const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(true);
    };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Open Snackbar
      </Button>

      <MySnackBar
        open={open}
        setOpen={setOpen}
        message="This Snackbar will be dismissed in 2 seconds."
        autoHideDuration={2000}
      />
    </div>
  );
}
