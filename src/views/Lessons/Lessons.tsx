import React from 'react';
import LessonsPage from '../../components/Lessons/Lessons';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

function Lessons({ title, show }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <LessonsPage show={show} />;
}

export default Lessons;
