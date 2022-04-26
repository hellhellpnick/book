/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, Link, IconButton, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { arrLessonFront, arrLessonSliderFront } from '../../../constants/lessonsFront';
import useEvents from '../../../hooks/useEvents';
import useStyles from './Lesson.styled';

interface ILesson {
  id: number,
  title: string,
  url: string,
  elements: any[],
}
interface ILessonSlider {
  id: number,
  title: string,
  url: string,
  elements:
  {
    title: string,
    p: string,
    id: number,
    pre: string
  }[]
}

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
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
  const [isLessonSlider, setLessonSlider] = useState<ILessonSlider>({
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const handler = ({ key }) => {
    if (key === 'Escape') {
      setShowSlider(false);
    } else if (key === 'F9') {
      setShowSlider(true);
    }
  };

  useEventListener('keydown', handler);

  useEffect(() => {
    arrLessonFront.find((item) => (item.url === id
      ? setLesson(item)
      : false));
    arrLessonSliderFront.find((item) => (item.url === id
      ? setLessonSlider(item)
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
        <Slider {...settingsSlider}>
          {isLessonSlider.elements.map((item) => (
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
      <Typography component="h2" className={classes.title}>{isLesson.title}</Typography>
      {!!isLesson.elements.length
        && isLesson.elements.map((item) => {
          if (item.p) {
            return (
              <Box
                component="p"
                key={item.id}
                className={classes.text}
              >
                {item.p}
              </Box>
            );
          } if (item.link) {
            return <Link href={item.url}>{item.link}</Link>;
          }
          return (
            <Box
              component="pre"
              key={item.id}
              className={classes.img}
            >
              {item.pre}
            </Box>
          );
        })}
    </Box>
  );
}

export default LessonPage;
