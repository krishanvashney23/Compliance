import React from 'react';
import Link from 'next/link';
// import "../../styles/component.css";

const Signup = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row my_flx_sign_up'>
          <div className='col-xl-4 col-lg-3 col-md-2 col-sm-1'></div>
          <div className='col-xl-4 col-lg-6 col-md-8 col-sm-10'>
            <div className='my_form_signup'>
              <form action="#" method='POST'>
                <p className='login_head'>Sign Up</p>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label user_label">Username</label>
                  <input type="Text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label user_label">Email Id</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Id"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label user_label">Phone No.</label>
                  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone no."/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label user_label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label user_label">Confirm Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Confirm Password" />
                </div>
                    <div id="emailHelp" className="form-text mb-3">Don't Have an Account? <Link href="/signup">Sign Up</Link></div>
                
                <button type="submit" className="submit_bot1">Sign Up</button>
              </form>
            </div>
          </div>
          <div className='col-xl-4 col-lg-3 col-md-2 col-sm-1'></div>

        </div>
      </div>
        <div className='foot'>
      <div className='footer1'>
          <p className='rights'>@2024 All Rights  Reserved</p>
        </div>
      </div>
      
    </>
  );
}

export default Signup;
