import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop: React.FC<{ children: React.ReactNode }> = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
