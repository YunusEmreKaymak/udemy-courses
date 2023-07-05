import React from 'react'
import AppBar from '@mui/material/AppBar';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PositionedMenu from './menu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { Searchbar } from './searchbar';
import { AddCourseButton } from './add-course-button';
export const NavBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar >
            <PositionedMenu />
            <Searchbar />
            <AddCourseButton />
      </Toolbar>
    </AppBar>
  )
}
