import { Box } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNav from '../MainNav/MainNav';
import useStyles from './Layout.styled';

function Layout() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.row}>
      <MainNav />
      <Box component="div" className={classes.content}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
