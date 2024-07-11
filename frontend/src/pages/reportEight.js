// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Credit from '../components/Credit/Component';
import Footer from '../components/Footer/Component';
import ReportEight from '@/components/ReportEight/Component';

const Component = () => {
  return (
    <div>
      <Navbar />
      <ReportEight />
      
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Component;