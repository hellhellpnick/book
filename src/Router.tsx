import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const routes = {
  home: '/',
};

const Home = lazy(() => import('./views/Home/Home'));

function Router() {
  return (
    <Routes>
      <Route
        path={routes.home}
        element={
          <Home />
}
      />

    </Routes>
  );
}

export { Router, routes };
