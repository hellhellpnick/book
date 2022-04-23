import React, { Suspense } from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { Router } from './Router';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box component="div" className="App">
          <Suspense fallback={<Loader />}>
            <Router />
          </Suspense>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
