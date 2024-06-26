// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Credit from '../components/Credit/Component';
import Footer from '../components/Footer/Component';
import Reportone from '@/components/Reportone/Component';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Reportone />
      
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Home;