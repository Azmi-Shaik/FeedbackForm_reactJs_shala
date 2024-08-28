import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const FormEdit = ({ form, onSave }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Form: {form.name}
      </Typography>
      {/* Render form fields for editing here */}
      <Button variant="contained" color="primary" onClick={onSave}>
        Save Changes
      </Button>
    </Container>
  );
};

export default FormEdit;
