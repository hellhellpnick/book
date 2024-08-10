import React from 'react';
import useChangeTitlePage from '../../../hooks/useChangeTitlePage';
import LessonPage from '../../../components/Lessons/Lesson/Lesson';

function Lesson({ title, show, html }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <LessonPage show={show} html={html} />;
}

export default Lesson;
