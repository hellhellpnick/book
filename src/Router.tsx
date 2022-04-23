import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const routes = {
  home: '/Book',
  front: {
    html: {
      main: 'html/',
      primary: 'html/:id',
    },
    css: {
      main: 'css/',
      primary: 'css/:id',
    },
    js: {
      main: 'js/',
      primary: 'js/:id',
    },
    react: {
      main: 'react/',
      primary: 'react/:id',
    },
  },
  back: {
    php: {
      main: 'php/',
      primary: 'php/:id',
    },
  },
};

const Home = lazy(() => import('./views/Home/Home'));
const HTML = lazy(() => import('./views/Html/HTML'));
const Layout = lazy(() => import('./components/Layout/Layout'));

function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route
          index
          element={
            <Home title="Book - programer" />
}
        />
        <Route
          path={routes.front.html.main}
          element={
            <HTML title="Book - HTML" />
}
        />
        <Route
          path={routes.front.css.main}
          element={
            <HTML title="Book - CSS" />
}
        />
      </Route>

    </Routes>
  );
}

export { Router, routes };
