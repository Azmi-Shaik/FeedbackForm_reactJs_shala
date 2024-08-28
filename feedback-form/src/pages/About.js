import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Our Feedback System
      </Typography>
      <Typography variant="body1" paragraph>
        Our feedback system is designed to help us gather valuable insights from our users. We believe that by listening to your suggestions, we can continuously improve our services and deliver a better experience. This system allows you to provide feedback on various aspects of our services through a user-friendly interface.
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you have comments on our current offerings or ideas for new features, we welcome all types of feedback. Our team reviews each submission to ensure that we address any issues and consider new opportunities for growth. Thank you for helping us to serve you better.
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about how to use the feedback system or about the types of feedback we collect, please feel free to reach out to us through the contact information provided.
      </Typography>
    </Container>
  );
};

export default About;
