import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import { purple } from '@mui/material/colors';
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (props: number) => {
    console.log(props.toString());
    setAnchorEl(null);
  };
  const purpleTheme = createTheme({ palette: { primary: purple } })


  return (
    <div>
      <ThemeProvider theme={purpleTheme}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color='primary'
          startIcon={<MenuIcon />}
          style={{
            borderRadius: 35,
            backgroundColor: "#f3e5f5",
            padding: "18px 36px",
            fontSize: "18px",
        }}
          // sx={{ border: 5, borderColor: "secondary.main" }}
        >
          Categories
        </Button>
      </ThemeProvider>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleClose(1)}>Development</MenuItem>
        <MenuItem onClick={() => handleClose(2)}>Business</MenuItem>
        <MenuItem onClick={() => handleClose(3)}>Finance</MenuItem>
        <MenuItem onClick={() => handleClose(4)}>IT</MenuItem>
        <MenuItem onClick={() => handleClose(5)}>Office</MenuItem>
        <MenuItem onClick={() => handleClose(6)}>Personal</MenuItem>
        <MenuItem onClick={() => handleClose(7)}>Design</MenuItem>
        <MenuItem onClick={() => handleClose(8)}>Marketing</MenuItem>
      </Menu>
    </div>
  );
}
