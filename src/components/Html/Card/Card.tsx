import { Box, List, Typography } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './Card.styled';

function Card({ elements, title }) {
  const classes = useStyles();

  return (
    <Box component="div">
      <Typography component="h3" className={classes.title}>{title}</Typography>
      <List className={classes.list}>
        {elements && elements.map((item) => (
          <ListItemButton key={item.id} className={classes.listItem}>
            <NavLink to={item.url} className={classes.listLink}>
              {item.title}
            </NavLink>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default Card;
