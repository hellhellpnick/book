import React from 'react';
import CSSPage from '../../components/CSS/CSSPage';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

function CSS<String>({ title }) {
  const { ChangeTitle } = useChangeTitlePage();
  ChangeTitle(title);

  return <CSSPage />;
}

export default CSS;
