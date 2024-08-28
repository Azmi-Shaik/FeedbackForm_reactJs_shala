import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createForm } from '../api/formApi';
import FieldEditor from './FieldEditor';


const FormCreation = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields([...fields, { id: Date.now(), type, label: '', required: false, errorMessage: '' }]);
  };

  const handleFieldChange = (index, updatedField) => {
    const newFields = [...fields];
    newFields[index] = updatedField;
    setFields(newFields);
  };

  const handleSubmit = async () => {
    const newForm = { title, description, fields };
    await createForm(newForm);
    onSuccess();
  };

  return (
    <div>
      <TextField
        label="Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Form Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={() => addField('text')}>Add Text Field</Button>
      <Button onClick={() => addField('rating')}>Add Rating Field</Button>
      {fields.map((field, index) => (
        <FieldEditor key={field.id} field={field} onChange={(updatedField) => handleFieldChange(index, updatedField)} />
      ))}
      <Button onClick={handleSubmit}>Create Form</Button>
    </div>
  );
};

export default FormCreation;
