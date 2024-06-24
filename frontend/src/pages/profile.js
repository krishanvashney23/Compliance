// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Profile from '../components/Profile/Component';
import Footer from '../components/Footer/Component';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Home;