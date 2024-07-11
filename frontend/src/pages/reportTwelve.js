// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Credit from '../components/Credit/Component';
import Footer from '../components/Footer/Component';
import ReportTwelve from '@/components/ReportTwelve/Component';

const Component = () => {
  return (
    <div>
      <Navbar />
      <ReportTwelve />
      
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Component;