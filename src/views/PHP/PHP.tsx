import React from 'react';
import PHPPage from '../../components/PHP/PHPPage';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

function PHP({ title }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <PHPPage />;
}

export default PHP;
