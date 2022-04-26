import React from 'react';
import LessonsPage from '../../components/Lessons/Lessons';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

function Lessons({ title }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <LessonsPage />;
}

export default Lessons;
