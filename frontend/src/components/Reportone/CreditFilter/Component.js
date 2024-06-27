
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import "../../styles/component.css";

const Credit = () => {

  return (
    <>
      <div className='reportone_flx mt-3'>
        <div className='filterData'>
          <p class="credit_head2">Report 1 (EC)</p>
        </div>
        <div className='reportone_search'>
          <form action="#">
            <center><div className="fsearch-container">
              <input type="text" className="fsearch-input" placeholder="Search..." />
              <span className="fsearch-icon">
                <button type="submit" className='srch'><i className="ri-search-line fsrch_icn"></i></button>
                {/* <i className="glyphicon glyphicon-search" height="24px" width="24px" viewBox="0 0 24 24" fill="#ccc"></i> */}
              </span>
            </div></center>
          </form>
          <Link href="/addreportone">
            <div className='a_buton'>
              <div class="Add_icon">
                <i class="ri-add-line"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Credit;
