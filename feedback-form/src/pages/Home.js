import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/feedback');
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Feedback System
      </Typography>
      <Typography variant="h6" gutterBottom>
        We value your feedback and strive to improve our services based on your suggestions.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGetStarted}>
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
