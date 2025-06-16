import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to MUI Sample Page
        </Typography>
        <Typography variant="body1" paragraph>
          This is a sample page using Material-UI components.
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Box>
    </Container>
  );
}

export default App; 