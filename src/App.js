import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import MusicTheory from './MusicTheory'; // Importe o seu componente



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/musictheory" element={<MusicTheory />} />
      </Routes>
    </Router>
  );
};

export default App;
