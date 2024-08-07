
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import "../../styles/component.css";

const Credit = () => {
  
  return (
    <>
      <div className='creditFilter'>
        <div className='filterData'>
          <p class="credit_head2">Credit Summary</p>
        </div>
        <div className='filtersearch'>
          <form action="#">
            <center><div className="fsearch-container">
              <input type="text" className="fsearch-input" placeholder="Search..." />
              <span className="fsearch-icon">
                <button type="submit" className='srch'><i className="ri-search-line fsrch_icn"></i></button>
                {/* <i className="glyphicon glyphicon-search" height="24px" width="24px" viewBox="0 0 24 24" fill="#ccc"></i> */}
              </span>
            </div></center>
          </form>
        </div>
      </div>
    </>
  );
}

export default Credit;
