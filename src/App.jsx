import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";

// Import your components/pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layouts/Layout';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <AuthProvider>
    <Router>
     
      
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
          </Route>
        </Routes>
      
    </Router>
    </AuthProvider>
  );
}

export default App;
