import React from 'react';
import { Outlet } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

export const PublicRoutes: React.FC = () => {
  return (
    <ScrollToTop>
      <Outlet />
    </ScrollToTop>
  );
};
