
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import "../../styles/component.css";

const Credit = () => {



  return (
    <>
      
        <p class="credit_head">Credit</p>

        <div className='row'>
          <div className='col-xl-4 col-lg-6 col-md-6 '>
            <div className='creditCard1'>
              <div className='credit_icon'>
                <i className="ri-wallet-2-line"></i>
              </div>
              <div className='credit_data'>
                <p className='credit_heading'>
                  Total Credit
                </p>
                <p className='credit_desc'>
                  1100
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-6 col-md-6 '>
            <div className='creditCard1'>
              <div className='credit_icon'>
                <i className="ri-play-list-add-line"></i>
              </div>
              <div className='credit_data'>
                <p className='credit_heading'>
                  Add Credit
                </p>
                <p className='credit_desc'>
                  800
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-6 col-md-6 '>
            <div className='creditCard1'>
              <div className='credit_icon'>
                <i className="ri-export-line"></i>
              </div>
              <div className='credit_data'>
                <p className='credit_heading'>
                  Withdraw
                </p>
                <p className='credit_desc'>
                  190
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Credit;
