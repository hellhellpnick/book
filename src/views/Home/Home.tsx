import React from 'react';
import HomePage from '../../components/Home/Home';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

function Home({ title }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <HomePage />;
}

export default Home;
