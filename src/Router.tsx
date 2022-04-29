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
    lessons: {
      main: 'lessonsFront/',
      primary: 'lessonsFront/:id',
    },
  },
  back: {
    php: {
      main: 'php/',
      primary: 'php/:id',
    },
    lessons: {
      main: 'lessonsBack/',
      primary: 'lessonsBack/:id',
    },
  },
};

const Home = lazy(() => import('./views/Home/Home'));
const HTML = lazy(() => import('./views/Html/HTML'));
const CSS = lazy(() => import('./views/Css/CSS'));
const PHP = lazy(() => import('./views/PHP/PHP'));
const Lessons = lazy(() => import('./views/Lessons/Lessons'));
const Lesson = lazy(() => import('./views/Lessons/Lesson/Lesson'));
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
            <CSS title="Book - CSS" />
          }
        />
        <Route
          path={routes.back.php.main}
          element={
            <PHP title="Book - PHP" />
          }
        />
        <Route
          path={routes.front.lessons.main}
          element={
            <Lessons title="Book - Lessons Front-end" show />
          }
        />
        <Route
          path={routes.front.lessons.primary}
          element={
            <Lesson title="Book - Lesson Front-end" show />
          }
        />
        <Route
          path={routes.back.lessons.main}
          element={
            <Lessons title="Book - Lessons Back-end" show={false} />
          }
        />
        <Route
          path={routes.back.lessons.primary}
          element={
            <Lesson title="Book - Lesson Back-end" show={false} />
          }
        />
      </Route>

    </Routes>
  );
}

export { Router, routes };
