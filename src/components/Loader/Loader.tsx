import React from 'react';
import { Box } from '@mui/material';
import { useStyles } from './Loader.styled';

function Loader() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.center}>
      <Box component="div" className={classes.loader}>
        <Box component="div" className={classes.inner} />
      </Box>
    </Box>
  );
}

export default Loader;
