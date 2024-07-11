
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import "../../styles/component.css";

const Component = () => {

  return (
    <>
      <div className='reportone_flx mt-3'>
        <div className='filterData'>
          <p class="credit_head2">Report 15 (MTR)</p>
        </div>
        <div className='reportone_search'>


          <div className='report2_buton'>
            <button class="Add_icon">
              Download
            </button>
          </div>
          {/* </Link> */}
        </div>
      </div>
      <div className='="row'>
        <div className="col-lg-4">
          <div className="mb-3 mt-2">
            <select name="cars" id="cars" class=" form-select">
              <option value="volvo">Select one</option>
              <option value="saab">Select Card (Tab 2)</option>
              <option value="mercedes">Select Card (Tab 3)</option>
              <option value="mercedes">Select Card (Tab 4)</option>
              <option value="mercedes">Select Card (Tab 5)</option>
              
            </select>
          </div>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}

export default Component;
