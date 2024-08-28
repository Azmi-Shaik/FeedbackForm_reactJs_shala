import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormList = ({ forms, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Give us your valuable feedback</h2>
      <List>
        {forms.map((form) => (
          <ListItem key={form.id} button onClick={() => navigate(`/feedback/${form.id}`)}>
            <ListItemText primary={form.title} />
            <Button onClick={() => navigate(`/admin/edit/${form.id}`)}>Edit</Button>
            <Button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the ListItem click event
                onDelete(form.id);
              }}
              color="error"
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FormList;
