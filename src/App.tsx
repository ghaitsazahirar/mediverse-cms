import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { supabase } from './supabaseClient';

function App() {
  useEffect(() => {
    const checkSupabase = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Supabase connection error:', error);
        } else {
          console.log('✅ Supabase connected! Session:', data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    checkSupabase();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
