import React from 'react';
import { Box, ThemeProvider, Typography } from "@mui/material";
import { appTheme } from "./config/theme";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import ListPosts from './features/posts/ListPosts';
import Post from './features/posts/Post';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component={"main"}
        sx={{ 
          minHeight: "100vh",
          backgroundColor: "#404242"
        }}>

        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<ListPosts />} />
            <Route path="/post/:slug" element={<Post />} />
            <Route path="/sobre" element={<Typography variant="h1">About</Typography>} />
            <Route path="/contato" element={<Typography variant="h1">Contact</Typography>} />
          </Routes>
        </Layout>

        <Footer />

      </Box>
    </ThemeProvider>
  );
}

export default App;
