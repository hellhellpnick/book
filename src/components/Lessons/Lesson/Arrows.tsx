import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  IconButton,
} from '@material-ui/core';
import React from 'react';
import useStyles from './Lesson.styled';

function NextArrow(props) {
  const { onClick } = props;
  const classes = useStyles();

  return (
    <IconButton
      color="primary"
      aria-label="add an alarm"
      onClick={onClick}
      className={classes.arrowNext}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  const classes = useStyles();

  return (
    <IconButton
      color="primary"
      aria-label="add an alarm"
      onClick={onClick}
      className={classes.arrowPrev}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

export { PrevArrow, NextArrow };
