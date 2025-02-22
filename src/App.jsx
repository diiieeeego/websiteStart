import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components/pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layouts/Layout';

function App() {
  return (
    <Router>
     
      
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      
    </Router>
  );
}

export default App;
