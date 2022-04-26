import React from 'react';
import { Box } from '@material-ui/core';
import Card from '../Html/Card/Card';
import useStyles from '../Html/HTML.styled';
import { arrLessonsFront } from '../../constants/lessonsFront';

function LessonsPage() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.center}>
      <Box component="div" className={classes.boxContent}>
        {arrLessonsFront
          && arrLessonsFront.map((item) => (
            <Card
              key={item.id}
              elements={item.elements}
              title={item.title}
            />
          ))}

      </Box>
    </Box>
  );
}

export default LessonsPage;
