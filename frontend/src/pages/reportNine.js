// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Credit from '../components/Credit/Component';
import Footer from '../components/Footer/Component';
import ReportNine from '@/components/ReportNine/Component';

const Component = () => {
  return (
    <div>
      <Navbar />
      <ReportNine />
      
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Component;