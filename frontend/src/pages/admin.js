// src/pages/index.js
import React from 'react';
import Dashboard from '../components/Admin/Dashboard/Component';
import Myhome from '../components/Myhome/Component';
import Footer from '../components/Footer/Component';

const Admin = () => {
  return (
    <div>
      <Dashboard />
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
}

export default Admin;
