import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import FormCreation from '../components/FormCreation';
import FormEdit from '../components/FormEdit';
import { Container, AppBar, Toolbar, Button } from '@mui/material';

const AdminPanel = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/admin">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/admin/create">
            Create Form
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<FormCreation />} />
        <Route path="/edit/:id" element={<FormEdit />} />
      </Routes>
    </Container>
  );
};

export default AdminPanel;
