// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Component';
import Myhome from '../components/Myhome/Component';
import Footer from '../components/Footer/Component';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Myhome />
      <Footer />
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Home;
