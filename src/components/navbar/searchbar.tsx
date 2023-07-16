import React from 'react';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router';
export const Searchbar = () => {
  const purpleTheme = createTheme({ palette: { primary: purple } })

  const navigate = useNavigate();
  const handleSubmit = () => {
    const value = (document.getElementById("search") as HTMLInputElement).value
    if (value !== null) {
      navigate("/search", { state: value });
    }
  }

  return (
    <div>
      <ThemeProvider theme={purpleTheme}>
        <TextField fullWidth label="Search for a course" id="search" color='primary' style={{
          borderRadius: 35,
          backgroundColor: "#f3e5f5",
          fontSize: "18px",
          width: '1200px',
          marginLeft: '15px',
          marginTop: '5px'
        }}
        />
        <button onClick={handleSubmit} style={{
          borderRadius: 35,
          backgroundColor: "#f3e5f5",
          padding: "18px 36px",
          fontSize: "18px",
          marginLeft: '15px'
        }}>Search</button>
      </ThemeProvider>
    </div>
  )
}
