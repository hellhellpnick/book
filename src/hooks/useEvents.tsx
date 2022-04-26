import { useEffect, useRef } from 'react';

const useEvents = () => {
  const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef(null);

    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
      const eventListener = (event) => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, element]);
  };

  return { useEventListener };
};

export default useEvents;
