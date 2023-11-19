import React, { useState } from 'react';
import { Layout } from 'antd';

import { IMainLayout } from '../../types/components';
import AntMenu from '../Menu';
import { menuItems } from '../../constants';

const { Sider, Content } = Layout;

const MainLayout: React.FC<IMainLayout> = ({ children, bg }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <Layout
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '100% 100%',
        height: '100%',
      }}
    >
      <Sider style={{ height: '100%', background: 'none', zIndex: 1 }}>
        <AntMenu
          theme='dark'
          items={menuItems}
          className={collapsed ? 'hide' : ''}
          onClick={(): void => setCollapsed(false)}
          style={{ background: 'none' }}
        />
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
