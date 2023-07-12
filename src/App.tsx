import React from 'react';
import './App.css';
import Course from './components/main/main-page';
import { NavBar } from './components/navbar/navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from './components/addCourse/AddCourse';
import Category from './components/main/main-page-category';
function App() {
  const defaultTheme = createTheme();
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Course />}></Route> :
            <Route path='/category' element={<Category />}></Route> :
            <Route path='/addCourse' element={<AddCourse />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
