import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Navbar from "../Front/Comman/Header";
import BlogPage from "../Front/Blog/Index";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Container maxWidth="lg" style={{ marginTop: '10px' }}>
                <Routes>
                    <Route path="/" element={<BlogPage />} exact />
                    <Route path="/blog" element={<BlogPage />} exact />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}
export default App;