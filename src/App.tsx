import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './Pages/AboutMe';
import Project from './Pages/Project';
import Service from './Pages/Services';
import ProjectPage from './Pages/ProjectPage';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Layout>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
