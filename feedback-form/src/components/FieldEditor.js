import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const FieldEditor = ({ field, onChange, onDelete }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Field Label"
          value={field.label}
          onChange={(e) => onChange({ ...field, label: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Error Message"
          value={field.errorMessage}
          onChange={(e) => onChange({ ...field, errorMessage: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" color="secondary" onClick={onDelete}>
          Delete Field
        </Button>
      </Grid>
    </Grid>
  );
};

export default FieldEditor;
