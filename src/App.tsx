import React from 'react';
import './App.css';
import Album from './components/main/main-page';
import { NavBar } from './components/navbar/navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const defaultTheme = createTheme();
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <NavBar />
        <Album />
      </ThemeProvider>
    </div>
  );
}

export default App;
