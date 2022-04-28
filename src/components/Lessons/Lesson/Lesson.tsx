/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, IconButton, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import CloseIcon from '@mui/icons-material/Close';
import { arrLessonFront } from '../../../constants/lessonsFront';
import { PrevArrow, NextArrow } from './Arrows';
import useEvents from '../../../hooks/useEvents';
import useStyles from './Lesson.styled';
import { ILesson } from '../../../modules/Lessons';

function LessonPage() {
  const { id } = useParams();
  const { useEventListener } = useEvents();
  const classes = useStyles();
  const [isShowSlider, setShowSlider] = useState(false);
  const [isLesson, setLesson] = useState<ILesson>({
    id: 1,
    title: '',
    url: '',
    elements: [],
  });
  const settingsSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handler = ({ key }) => {
    const body = document.getElementsByTagName('body')[0];

    if (key === 'Escape') {
      setShowSlider(false);
      body.style.overflow = 'auto';
    } else if (key === 'F9') {
      setShowSlider(true);
      body.style.overflow = 'hidden';
    }
  };

  useEventListener('keydown', handler);

  useEffect(() => {
    arrLessonFront.find((item) => (item.url === id
      ? setLesson(item)
      : false));
  }, [id]);

  return (
    <Box component="div" className={classes.center}>
      <Box
        component="div"
        className={isShowSlider
          ? classes.showSlider
          : classes.hiddenSlider}
      >
        <IconButton
          color="primary"
          onClick={() => handler({ key: 'Escape' })}
          className={classes.iconClose}
        >
          <CloseIcon />
        </IconButton>
        <Slider {...settingsSlider}>
          {isLesson.elements.map((item) => (
            <Box component="div" key={item.id} className={classes.slider}>
              <Typography component="h3" className={classes.title}>
                {item.title}
              </Typography>
              <Box component="p" className={classes.text}>{item.p}</Box>
              <Box component="pre" className={classes.img}>{item.pre}</Box>
            </Box>
          ))}
          <Box component="div" className={classes.slider}>
            <Typography component="h3" className={classes.title}>
              Спасибо за ваше внимание!
            </Typography>
            <Box component="p" className={classes.text}>Домашка не будет скучной :)</Box>
          </Box>

        </Slider>
      </Box>
      {!!isLesson.elements.length
        && isLesson.elements.map((item) => (
          <Box component="div" key={item.id}>
            <Typography component="h3" className={classes.title}>
              {item.title}
            </Typography>
            <Box component="p" className={classes.text}>{item.p}</Box>
            {item.pre && <Box component="pre" className={classes.img}>{item.pre}</Box>}
          </Box>
        ))}
    </Box>
  );
}

export default LessonPage;
