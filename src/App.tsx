import React from 'react';
import { Box, ThemeProvider, Typography } from "@mui/material";
import { appTheme } from './config/theme';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component={"main"}
        sx={{ 
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900] 
        }}>

        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Typography variant="h1">Home</Typography>} />
            <Route path="/about" element={<Typography variant="h1">About</Typography>} />
            <Route path="/contact" element={<Typography variant="h1">Contact</Typography>} />
          </Routes>
        </Layout>

      </Box>
    </ThemeProvider>
  );
}

export default App;
