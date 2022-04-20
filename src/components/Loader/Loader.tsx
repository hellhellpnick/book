import React from 'react';
import { useStyles } from './Loader.styled';

function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <div className={classes.loader}>
        <div className={classes.inner} />
      </div>
    </div>
  );
}

export default Loader;
