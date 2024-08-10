import {
  Box, Typography, TextField,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { arrHTML } from '../../constants/html';
import useStyles from './HTML.styled';
import Card from './Card/Card';

function HTMLPage() {
  const classes = useStyles();
  const [currentArray, setCurrentArray] = useState(arrHTML);
  const [search, setSearch] = useState('');

  function onCheckList() {
    if (search) {
      const newArray = arrHTML.reduce((acc, item) => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const currentArray = [];

        item.elements.forEach((element) => {
          if (element.title.includes(search)) {
            currentArray.push(element);
          }
        });

        if (currentArray.length > 0) {
          return [...acc, {
            ...item,
            elements: currentArray,
          }];
        }

        return acc;
      }, []);

      return setCurrentArray(newArray);
    }

    return setCurrentArray(arrHTML);
  }

  useEffect(() => {
    onCheckList();
  }, [search]);

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
              value={search}
              onChange={(e) => { setSearch(e.target.value); }}
              className={classes.input}
            />
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
        {currentArray
          && currentArray.map((item: any) => (
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
