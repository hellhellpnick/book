import React from 'react';
import useChangeTitlePage from '../../../hooks/useChangeTitlePage';
import LessonPage from '../../../components/Lessons/Lesson/Lesson';

function Lesson({ title }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <LessonPage />;
}

export default Lesson;
