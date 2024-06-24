import React from 'react';
import Link from 'next/link';
// import "../../styles/component.css";

const Login = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row my_flx'>
          <div className='col-xl-4 col-lg-3 col-md-2 col-sm-1'></div>
          <div className='col-xl-4 col-lg-6 col-md-8 col-sm-10'>
            <div className='my_form'>
              <form action="#" method='POST'>
                <p className='login_head'>Log In</p>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label user_label">Username</label>
                  <input type="Text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label user_label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                </div>
                    <div id="emailHelp" className="form-text mb-3">Don't Have an Account? <Link href="/signup">Sign Up</Link></div>
                
               <Link href="/dashboard"> <button type="submit" className="submit_bot1">Log In</button></Link>
              </form>
            </div>
          </div>
          <div className='col-xl-4 col-lg-3 col-md-2 col-sm-1'></div>

        </div>
      </div>
    </>
  );
}

export default Login;
