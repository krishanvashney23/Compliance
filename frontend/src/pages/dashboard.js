// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Footer from '../components/Footer/Component';
import Dashboard from '@/components/Dashboard/Component';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
     
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Home;
