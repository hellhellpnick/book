import { useEffect } from 'react';

const useChangeTitlePage = () => {
  const ChangeTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };

  return { ChangeTitle };
};

export default useChangeTitlePage;
