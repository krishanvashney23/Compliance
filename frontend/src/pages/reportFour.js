// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Credit from '../components/Credit/Component';
import Footer from '../components/Footer/Component';
import ReportFour from '@/components/ReportFour/Component';

const Home = () => {
  return (
    <div>
      <Navbar />
      <ReportFour />
      
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Home;