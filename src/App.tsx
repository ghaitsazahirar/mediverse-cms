import React, { useEffect } from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoutes';
import { supabase } from './supabaseClient';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const checkSupabaseSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Supabase connection error:', error);
        } else {
          console.log('✅ Supabase connected! Session:', data);
          // Automatically set isLoggedIn to true if there's an existing session
          if (data.session) {
            setIsLoggedIn(true);
          }
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    checkSupabaseSession();
  }, []);

  function handleLoginSuccess(): void {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLoginSuccess={handleLoginSuccess} />
          }
        />
        <Route path="/dashboard" 
        element={
          <PrivateRoute isAuthenticated={isLoggedIn}>
            <DashboardPage />
          </PrivateRoute>
        } 
        />
      </Routes>
    </Router>
  );
}

export default App;
