import React, { useState } from 'react';
import { Modal, Button, Typography, TextField, Rating } from '@mui/material';

const FeedbackModal = ({ form, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldId, value) => {
    setFormData({
      ...formData,
      [fieldId]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal open={Boolean(form)} onClose={onClose}>
      <div>
        <Typography variant="h4">{form?.title}</Typography>
        {form?.fields?.map((field) => (
          <div key={field.id}>
            {field.type === 'text' && (
              <TextField
                label={field.label}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            )}
            {field.type === 'rating' && (
              <Rating
                name={field.id}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            )}
            {/* Add other field types here */}
          </div>
        ))}
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
