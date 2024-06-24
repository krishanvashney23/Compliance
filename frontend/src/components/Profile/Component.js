
import { useState } from 'react';
import Link from 'next/link';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import "../../styles/component.css";

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (value.length === 10) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  

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
                <p className='login_head'>Profile</p>
                <div>
                  <div className="profile_img" onClick={handleClick}>
                    <div className="inner_circle">
                      <i className="ri-user-add-line"></i>
                    </div>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label user_label">Name</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label user_label">User Id</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label user_label">Phone No.</label>
                  <div className="inputContainer">
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    maxLength={10}
                    className="form-control inputField"
                  />
                  {isValid === true && <FaCheckCircle className="icon" color="green" />}
                  {isValid === false && <FaTimesCircle className="icon" color="red" />}
                </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label user_label">Email Id</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                </div>
                <button type="submit" className="submit_bot1">Sign Up</button>
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
