import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PositionedMenu from './menu';
import { Searchbar } from './searchbar';
import { AddCourseButton } from './add-course-button';
import { useLocation, useNavigate } from 'react-router';
export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.toLowerCase();
  return (
    <AppBar position="relative">
      <Toolbar >
        <PositionedMenu />
        <Searchbar />
        <AddCourseButton handleClick={() => path === "/addcourse" ? navigate("/") : navigate("/addCourse")} title={
          location.pathname.toLowerCase() === "/addcourse" ? "Ana sayfa" : "Kurs Ekle"} />
      </Toolbar>
    </AppBar>
  )
}
