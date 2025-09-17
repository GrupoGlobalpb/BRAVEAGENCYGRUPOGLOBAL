import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24 bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LegalLayout;
