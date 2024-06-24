// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Signup from '../components/Signup/Component';
import Footer from '../components/Footer/Component';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Signup />
      
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Home;