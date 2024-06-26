
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
// import "../../styles/component.css";
import TabCard from './TabCard/Component';
const TabFive = ({ options, placeholder }) => {

  return (
    <>
      <div className='container'>
        <Link href="/dashboard">
          <div className='myback_bot'>
            <button className='back'>
              <i className="ri-arrow-left-s-line lefticon"></i>  Go Back
            </button>
          </div>
        </Link>
        <div className='five_flx'>
          <div className='five_head'>
          <p class="credit_head">Lorem ip Tab 5</p>
          </div>
          <Link href="./addtabFive"> <div className='five_head'>
            <div className='Add_icon'>
            <i className="ri-add-line"></i>
            </div>
          </div></Link>
        </div>
        <TabCard />
      </div>

    </>
  );
}

export default TabFive;
