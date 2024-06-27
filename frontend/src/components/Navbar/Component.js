import React from 'react';
import Link from 'next/link';
// import "../../styles/component.css";

const Navbar = () => {
  return (
    <>
      <div className='nav_space'>
        <div className='space1'>
          <Link href="/" className='dop'><h3>Logo</h3></Link> 
        </div>
        <div className='space2'>
          <Link href="/login" className='dop'><button className='log_in'>Log In</button></Link>
          <Link href="/signup" className='dop'><button className='sign_up'>Sign Up</button></Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
