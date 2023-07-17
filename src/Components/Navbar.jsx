import React from 'react'
import { Link, withRouter } from "react-router-dom";
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../personal_logo.png'

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="testClass">
        <Toolbar>
            <nav>
              <Link to="/">
                <img src={logo} class="logo" />
              </Link>
            </nav>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
          <nav>
              <Link class="remove_link" to="/">Background</Link>
            </nav>
          </Typography>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
          <nav>
              <Link class="remove_link" to="/">Projects</Link>
            </nav>
          </Typography>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
            <nav>
            <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="remove_link">
              Socials
              </a>
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;
