import React from 'react';
import HTMLPage from '../../components/Html/HTMLPage';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

function HTML({ title }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <HTMLPage />;
}

export default HTML;
