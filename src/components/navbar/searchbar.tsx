import React from 'react'
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
export const Searchbar = () => {
  const purpleTheme = createTheme({ palette: { primary: purple } })

  const handleChange = (props: any) => {
    console.log("BBBB",props);
  }


  return (
    <div>
      <ThemeProvider theme={purpleTheme}>
        <TextField fullWidth label="Search for a course" id="fullWidth" color='primary' style={{
          borderRadius: 35,
          backgroundColor: "#f3e5f5",
          // padding: "18px 36px",
          fontSize: "18px",
          width: '1200px',
          marginLeft: '15px'
        }} 
        onChange={(event) => handleChange(event.target.value)}
        />
      </ThemeProvider>
    </div>
  )
}
