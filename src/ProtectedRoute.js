import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute'; // Importe o ProtectedRoute
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verificar se o usuário está logado ao carregar o app
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página Inicial */}
          <Route 
            path="/" 
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
          />
          {/* Login */}
          <Route 
            path="/login" 
            element={<Login />} 
          />
          {/* Recuperação de Senha */}
          <Route 
            path="/forgot-password" 
            element={<ForgotPassword />} 
          />
          {/* Dashboard protegido */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
