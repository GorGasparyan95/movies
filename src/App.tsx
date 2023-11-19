import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { routers } from './routes';
import 'antd/dist/reset.css';
dayjs.extend(utc);

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <RouterProvider router={routers} />
    </ConfigProvider>
  );
};

export default App;
