
import { useState } from 'react';
import Link from 'next/link';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import "../../styles/component.css";

const Profile = () => {
 
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // Handle file upload here
    }
  };
  return (
    <>
      <div className='container-fluid'>
        <div className='row my_flx_profile_up'>
          <div className='col-xl-4 col-lg-3 col-md-2  pro1'>
            <Link href="/dashboard"> <div className='goBack'>
              <button className='back'>
                <i className="ri-arrow-left-s-line lefticon"></i>  Go Back
              </button>
            </div>
            </Link>
          </div>
          <div className='col-xl-4 col-lg-6 col-md-8 '>
            <div className='my_form_signup_profile'>
              <form action="#" method='POST'>
                <p className='login_head'>Setting</p>
                
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label user_label">Password</label>
                  <input type="Password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label user_label">Confirm Password</label>
                  <input type="Password" className="form-control" id="exampleInputPassword1" placeholder="Enter Confirm Password" />
                </div>
                <Link href="/dashboard"> <button type="submit" className="submit_bot1">Save</button></Link>
              </form>
            </div>
          </div>
          <div className='col-xl-4 col-lg-3 col-md-2 '></div>

        </div>
      </div>

    </>
  );
}

export default Profile;
