/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, IconButton, Typography,
} from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { animated, Transition } from 'react-spring';
import { Transition as TransitionReact } from 'react-transition-group';
import { arrLessonFront } from '../../../constants/lessonsFront';
import { arrLessonBack } from '../../../constants/lessonsBack';
import { PrevArrow, NextArrow } from './Arrows';
import useEvents from '../../../hooks/useEvents';
import useStyles from './Lesson.styled';
import { ILesson } from '../../../modules/Lessons';

function LessonPage({ show }) {
  const { id } = useParams();
  const { useEventListener } = useEvents();
  const classes = useStyles();
  const [isShowSlider, setShowSlider] = useState(false);
  const [isShowAlert, setShowAlert] = useState(false);
  const nodeRef = useRef(null);
  const [isLesson, setLesson] = useState<ILesson>({
    id: 1,
    title: '',
    url: '',
    elements: [],
  });

  const duration = 300;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
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

  const getClipboard = (e) => {
    const target = e.currentTarget;
    const { parentNode } = target;
    const pre = parentNode.querySelector('pre');

    navigator.clipboard.writeText(pre.innerHTML);
    setShowAlert(true);
  };

  useEventListener('keydown', handler);

  useEffect(() => {
    if (isShowAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [isShowAlert]);
  useEffect(() => {
    if (show) {
      arrLessonFront.find((item) => (item.url === id
        ? setLesson(item)
        : false));
    } else {
      arrLessonBack.find((item) => (item.url === id
        ? setLesson(item)
        : false));
    }
  }, [id, show]);
  return (
    <Box component="div" className={classes.center}>
      <Transition
        items={isShowSlider}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        delay={200}
      >
        {({ opacity }, item) => item && (
          <animated.div
            style={{
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}
            className={classes.showSlider}
          >
            <IconButton
              color="primary"
              onClick={() => handler({ key: 'Escape' })}
              className={classes.iconClose}
            >
              <CloseIcon />
            </IconButton>
            <Slider {...settingsSlider}>
              {isLesson.elements.map((elem) => (
                <Box component="div" key={elem.id} className={classes.slider}>
                  <Typography component="h3" className={classes.title}>
                    {elem.title}
                  </Typography>
                  <Box component="p" className={classes.text}>
                    {elem.p}

                  </Box>
                  {elem.pre
                    && (
                      <Box component="div" className={classes.wrapperPre}>
                        <IconButton
                          color="primary"
                          onClick={getClipboard}
                          className={classes.iconCopy}
                        >
                          <ContentCopyIcon />
                        </IconButton>
                        <Box component="pre" className={classes.imgSlider}>
                          {elem.pre}

                        </Box>
                      </Box>
                    )}
                </Box>
              ))}
              <Box component="div" className={classes.slider}>
                <Typography component="h3" className={classes.title}>
                  Спасибо за ваше внимание!
                </Typography>
                <Box
                  component="p"
                  className={classes.text}
                >
                  Домашка не будет скучной :)

                </Box>
              </Box>

            </Slider>
          </animated.div>
        )}
      </Transition>

      {
        !!isLesson.elements.length
        && isLesson.elements.map((item) => (
          <Box component="div" key={item.id}>
            <Typography component="h3" className={classes.title}>
              {item.title}
            </Typography>
            <Box component="p" className={classes.text}>{item.p}</Box>
            {item.pre && (
              <Box component="div" className={classes.wrapperPre}>
                <IconButton
                  color="primary"
                  onClick={getClipboard}
                  className={classes.iconCopy}
                >
                  <ContentCopyIcon />
                </IconButton>
                <Box component="pre" className={`${classes.img} pre`}>
                  {item.pre}
                </Box>
              </Box>
            )}
          </Box>
        ))
      }
      <TransitionReact nodeRef={nodeRef} in={isShowAlert} timeout={duration}>
        {(state) => (
          <Alert
            variant="filled"
            severity="success"
            ref={nodeRef}
            className={classes.alert}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            Copy success!
          </Alert>
        )}
      </TransitionReact>
    </Box>
  );
}

export default LessonPage;
