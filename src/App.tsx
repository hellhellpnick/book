import { ThemeProvider } from '@material-ui/core/styles';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import MainNav from './components/MainNav/MainNav';
import { Router } from './Router';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<Loader />}>
            <Router />
          </Suspense>
          <MainNav />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
