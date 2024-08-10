import React from 'react';
import useChangeTitlePage from '../../../hooks/useChangeTitlePage';
import LessonPage from '../../../components/Lessons/Lesson/Lesson';

function Lesson({ title, show, css }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <LessonPage show={show} css={css} />;
}

export default Lesson;
