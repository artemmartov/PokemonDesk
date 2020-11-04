import React from 'react';
import Header from '../../components/Header/Header';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default DefaultLayout;
