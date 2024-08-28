import React, { useState, useEffect } from 'react';
import { getForms, deleteForm } from '../api/formApi';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchForms = async () => {
      const data = await getForms();
      setForms(data);
    };
    fetchForms();
  }, []);

  const handleDelete = async (id) => {
    await deleteForm(id);
    setForms(forms.filter(form => form.id !== id));
  };

  return (
    <div>
      <h2>Feedback Forms</h2>
      <Button variant="contained" color="primary" onClick={() => navigate('/admin/create')}>
        Create New Form
      </Button>
      <List>
        {forms.map((form) => (
          <ListItem key={form.id}>
            <ListItemText primary={form.title} secondary={form.description} />
            <Button onClick={() => navigate(`/admin/edit/${form.id}`)}>Edit</Button>
            <Button onClick={() => handleDelete(form.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Dashboard;
