import React from 'react';
import JSPage from '../../components/JS/JSPage';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

function JS({ title }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <JSPage />;
}

export default JS;
