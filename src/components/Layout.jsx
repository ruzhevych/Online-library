import React, { useState } from 'react';
import { Breadcrumb, Layout as LayoutAnt, Menu, theme } from 'antd';
import { BookOutlined, HomeFilled, InfoCircleFilled,  } from '@ant-design/icons';
import BooksTable from './BooksTable';
import { Link, Outlet, useLocation } from 'react-router-dom';


const { Header, Content, Footer } = LayoutAnt;

const items = [
    {
        key: '/',
        label: 'Home',
        icon: <Link to="/"><HomeFilled /></Link>
    },
    {
        key: '/mybooks',
        label: 'My Books',
        icon: <Link to="/mybooks"><BookOutlined/></Link>,
    },
    {
        key: '/about',
        label: 'About',
        icon: <Link to="/about"><InfoCircleFilled/></Link>,
    },

]

const Layout = () => {
    const [current] = useState(useLocation().pathname);

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
      return (
        <LayoutAnt className='Layout'>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[current]}
              items={items}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            />
          </Header>
          <Content className='main'
            style={{
              padding: '0 48px',
            }}
          >
            <div
              style={{
                background: colorBgContainer,
                minHeight: 280,
                padding: 24,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </LayoutAnt>
    );
};
export default Layout;