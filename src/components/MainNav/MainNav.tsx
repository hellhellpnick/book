import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  ListSubheader,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import PhpIcon from '@mui/icons-material/Php';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CodeIcon from '@mui/icons-material/Code';
import ListItemButton from '@mui/material/ListItemButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { NavLink } from 'react-router-dom';
import useStyles from './MainNav.styled';
import { routes } from '../../Router';
import { useScreenDetector } from '../../hooks/useScreenDetector';

function MainNav() {
  const classes = useStyles();
  const { isTablet } = useScreenDetector();
  const [isFront, setFront] = useState(false);
  const [isBack, setBack] = useState(false);
  const [isHidden, setHidden] = useState(false);

  useEffect(
    () => setHidden(isTablet),
    [isTablet],
  );

  return (
    // eslint-disable-next-line max-len
    <Box component="div" className={`${classes.navWrapper} ${isHidden && classes.navHidden}`}>
      {isTablet && (
        <Box component="div" className={classes.arrowEvent} onClick={() => setHidden(!isHidden)}>
          <DoubleArrowIcon className={classes.navIcon}>
            <HtmlIcon />
          </DoubleArrowIcon>
        </Box>
      )}

      <Typography component="h1" className={classes.navTitle}>
        Programer Book
      </Typography>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={(
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={classes.navSubtitle}
          >
            Menu
          </ListSubheader>
        )}
        className={classes.nav}
      >
        <ListItemButton onClick={() => setFront(!isFront)}>
          <ListItemIcon className={classes.navIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText className={classes.navText} primary="Front" />
          {isFront
            ? <KeyboardArrowDownIcon className={classes.navIcon} />
            : <KeyboardArrowUpIcon className={classes.navIcon} />}
        </ListItemButton>
        <Collapse in={isFront} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton>
              <NavLink onClick={() => { isTablet && setHidden(true); }} to={routes.front.html.main} className={classes.navText}>
                <ListItemIcon className={classes.navIcon}>
                  <HtmlIcon />
                </ListItemIcon>
                <ListItemText primary="HTML" />
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink onClick={() => { isTablet && setHidden(true); }} to={routes.front.css.main} className={classes.navText}>
                <ListItemIcon className={classes.navIcon}>
                  <CssIcon />
                </ListItemIcon>
                <ListItemText primary="CSS" />
              </NavLink>
            </ListItemButton>
            <ListItemButton>

              <NavLink onClick={() => { isTablet && setHidden(true); }} to={routes.front.js.main} className={classes.navText}>
                <ListItemIcon className={classes.navIcon}>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText primary="JS" />
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink onClick={() => { isTablet && setHidden(true); }} to={routes.front.react.main} className={classes.navText}>
                <ListItemIcon className={classes.navIcon}>
                  <Box component="i" className="fa-brands fa-react" />
                </ListItemIcon>
                <ListItemText primary="React" />
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink onClick={() => { isTablet && setHidden(true); }} to={routes.front.lessons.main} className={classes.navText}>
                <ListItemIcon className={classes.navIcon}>
                  <Box component="i" className="fa-solid fa-person-chalkboard" />
                </ListItemIcon>
                <ListItemText primary="Lessons" />
              </NavLink>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => setBack(!isBack)}>
          <ListItemIcon className={classes.navIcon}>
            <CodeOffIcon />
          </ListItemIcon>
          <ListItemText className={classes.navText} primary="Back" />
          {isBack
            ? <KeyboardArrowDownIcon className={classes.navIcon} />
            : <KeyboardArrowUpIcon className={classes.navIcon} />}
        </ListItemButton>
        <Collapse in={isBack} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton>
              <NavLink to={routes.back.php.main} className={classes.navText}>
                <ListItemIcon className={classes.navIcon}>
                  <PhpIcon />
                </ListItemIcon>
                <ListItemText primary="PHP" />
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink to={routes.back.lessons.main} className={classes.navText}>
                <ListItemIcon className={classes.navIcon}>
                  <Box component="i" className="fa-solid fa-person-chalkboard" />
                </ListItemIcon>
                <ListItemText primary="Lessons" />
              </NavLink>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}

export default MainNav;
