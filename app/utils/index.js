import reactLocalStorage from './localStorage';
import Utils from './utils';
import { useEffect } from 'react';

export const scrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
};

export { Utils, reactLocalStorage };
