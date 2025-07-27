import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export interface Prop{
    labels: string[];
    checked: boolean[];
    onChange: (index: number, isChecked: boolean) => void;
}

const Checkboxes = ({ labels, checked, onChange }: Prop) => {

  return (
    <Box sx={{ border: '2px solid #ccc', p: 2, borderRadius: 2 }}>
      <Grid container spacing={1}>
        {labels.map((lbl, idx) => (
          <Grid key={idx}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked[idx]}
                  onChange={(_, isChecked) => onChange(idx, isChecked)}
                />
              }
              label={lbl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Checkboxes;
