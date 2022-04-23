import {
  Box, Typography, TextField, Button,
} from '@material-ui/core';
import React from 'react';
import { arrHTML } from '../../constants/html';
import useStyles from './HTML.styled';
import Card from './Card/Card';

function HTMLPage() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.center}>
      <Box component="div" className={classes.header}>
        <Box component="div" className={classes.info}>
          <Typography component="h2" className={classes.title}>
            Современный учебник HTML
          </Typography>
          <Typography component="h3" className={classes.subtitle}>
            Перед вами учебник по HTML,
            начиная с основ, включающий в себя
            много тонкостей и фишек.
          </Typography>
          <Box component="div" className={classes.boxSearch}>
            <TextField
              id="outlined-basic"
              label="Поиск"
              variant="outlined"
              className={classes.input}
            />
            <Button
              variant="outlined"
              className={classes.btn}
              color="default"
            >
              Поиск
            </Button>
          </Box>

        </Box>
        <Box component="div" className={classes.public}>
          <Typography component="h4" className={classes.data}>
            Последнее обновление: 21 апреля 2022 г.
          </Typography>
          <Box component="div" className={classes.links}>
            <Box component="div" className={classes.card}>
              <Typography component="p" className={classes.linksText}>
                <i className="fa-brands fa-discord" />
                Discord чат
              </Typography>
            </Box>
            <Box component="div" className={classes.card}>
              <Typography component="p" className={classes.linksText}>
                <i className="fa-brands fa-telegram" />
                Telegram чат
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component="div" className={classes.boxContent}>
        {arrHTML
          && arrHTML.map((item) => (
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

export default HTMLPage;
