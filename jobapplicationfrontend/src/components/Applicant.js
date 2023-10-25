import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Applicant() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Applicant Name" variant="standard" />
      <TextField id="standard-basic" label="Applicant Address" variant="standard" />

    </Box>
  );
}
