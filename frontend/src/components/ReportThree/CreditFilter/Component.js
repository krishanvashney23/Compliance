
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
          <p class="credit_head2">Report 3 (AR)</p>
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
          <div class="mb-3 mt-2">
            <select name="cars" id="cars" class=" form-select">
              <option value="volvo">Select one</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}

export default Credit;
