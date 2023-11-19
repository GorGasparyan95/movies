import { createBrowserRouter } from 'react-router-dom';

import { PATHS } from '../constants';
import Homepage from '../pages/Homepage';

export const routers = createBrowserRouter([
  {
    path: PATHS.HOMEPAGE,
    element: <Homepage />,
  },
]);
