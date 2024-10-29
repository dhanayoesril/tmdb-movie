import React, { lazy } from 'react';
import './styles.scss';

const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header isTransparent={false} />
      {children}
      <Footer isTransparent={false} />
    </div>
  );
};

export default Layout;
