
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
// import "../../styles/component.css";

const TabFive = ({ options, placeholder }) => {

  return (
    <>
     <div className='row mt-2'>
      <div className='col-lg-4 col-md-6 col-sm-6'>
        <div className='tabCard5'>
          <div className='head_flx5'>
            <div className='mycard5'>
              <img src="img/profile.jpg" className='profile5'/>
            </div>
            <div className='card_editdlt'>
            <div className='edit_icon'>
            <i className="ri-pencil-line"></i>
            </div>
            <div className='dlt_icon'>
            <i className="ri-delete-bin-line"></i>
            </div>
            </div>
          </div>
          <div className='tab5_content'>
            <p className='Tab5_head'>
            Appointment
            </p>
            <p className='Tab5_desc mb-0'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6'>
        <div className='tabCard5'>
          <div className='head_flx5'>
            <div className='mycard5'>
              <img src="img/profile.jpg" className='profile5'/>
            </div>
            <div className='card_editdlt'>
            <div className='edit_icon'>
            <i className="ri-pencil-line"></i>
            </div>
            <div className='dlt_icon'>
            <i className="ri-delete-bin-line"></i>
            </div>
            </div>
          </div>
          <div className='tab5_content'>
            <p className='Tab5_head'>
            Appointment
            </p>
            <p className='Tab5_desc mb-0'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6'>
        <div className='tabCard5'>
          <div className='head_flx5'>
            <div className='mycard5'>
              <img src="img/profile.jpg" className='profile5'/>
            </div>
            <div className='card_editdlt'>
            <div className='edit_icon'>
            <i className="ri-pencil-line"></i>
            </div>
            <div className='dlt_icon'>
            <i className="ri-delete-bin-line"></i>
            </div>
            </div>
          </div>
          <div className='tab5_content'>
            <p className='Tab5_head'>
            Appointment
            </p>
            <p className='Tab5_desc mb-0'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6'>
        <div className='tabCard5'>
          <div className='head_flx5'>
            <div className='mycard5'>
              <img src="img/profile.jpg" className='profile5'/>
            </div>
            <div className='card_editdlt'>
            <div className='edit_icon'>
            <i className="ri-pencil-line"></i>
            </div>
            <div className='dlt_icon'>
            <i className="ri-delete-bin-line"></i>
            </div>
            </div>
          </div>
          <div className='tab5_content'>
            <p className='Tab5_head'>
            Appointment
            </p>
            <p className='Tab5_desc mb-0'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
     </div>

    </>
  );
}

export default TabFive;
