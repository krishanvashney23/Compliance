import React from 'react';
import Link from 'next/link';
// import "../../styles/component.css";

const Dashboard = () => {
  return (
    <>
      <div className='back_color'>
        <p className='dashboard_head'>
          Lorem ipsum dolor sit amet, consectetur sop
        </p>
        <p className='dashboard_desc'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa
        </p>
        <form action="#">
          <center><div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <span className="search-icon">
              <button type="submit" className='srch'><i className="ri-search-line srch_icn"></i></button>
              {/* <i className="glyphicon glyphicon-search" height="24px" width="24px" viewBox="0 0 24 24" fill="#ccc"></i> */}
            </span>
          </div></center>
        </form>
        <div className='main-container'>
          <div className='container'>
            <p className='cards_head'>
              Tab's heading
            </p>
            <div className='row'>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <Link href="/profile"> <div className='tab_card'>
                  <div className='first_icn'>
                    <i className="ri-user-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Profile
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <Link href="/setting"><div className='tab_card'>
                  <div className='first_icn'>
                    <i className="ri-settings-3-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Setting
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <Link href="/credit"> <div className='tab_card'>
                  <div className='first_icn'>
                    <i className="ri-bank-card-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Credit
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div></Link>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <div className='tab_card' data-bs-toggle="modal" data-bs-target="#enterpassword">
                  <div className='card1_lock'>
                    <i className="ri-lock-fill"></i>
                  </div>
                  <div className='first_icn'>
                    <i className="ri-user-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Lorem Ip
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <div className='tab_card' >
                  <div className='card1_lock'>
                    <i className="ri-lock-fill"></i>
                  </div>
                  <div className='first_icn'>
                    <i className="ri-user-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Lorem Ip
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <div className='tab_card' >
                  <div className='card1_lock'>
                    <i className="ri-lock-fill"></i>
                  </div>
                  <div className='first_icn'>
                    <i className="ri-user-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Lorem Ip
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <div className='tab_card' >
                  <div className='card1_lock'>
                    <i className="ri-lock-fill"></i>
                  </div>
                  <div className='first_icn'>
                    <i className="ri-user-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Lorem Ip
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <div className='tab_card' >
                  <div className='card1_lock'>
                    <i className="ri-lock-fill"></i>
                  </div>
                  <div className='first_icn'>
                    <i className="ri-user-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Lorem Ip
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <div className='tab_card' >
                  <div className='card1_lock'>
                    <i className="ri-lock-fill"></i>
                  </div>
                  <div className='first_icn'>
                    <i className="ri-user-line"></i>
                  </div>
                  <div className='tab_content'>
                    <p className='tab_inner_head'>
                      Lorem Ip
                    </p>
                    <p className='tab_inner_desc'>
                      Lorem ipsum dolor sit amet, find of a adipiscing
                    </p>
                    <div className='my_bot'>
                      <button className='tab_view'>View</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* <!-- The Modal --> */}
        <div className="modal fade" id="enterpassword">
          <div className="modal-dialog modal-md">
            <div className="modal-content">

              {/* <!-- Modal Header --> */}
              <div className="modal-header modalback">
                <h5 className="modal-title">Unlock The screen</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal">

                </button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <div className='password_form'>
                  <form action="#" method='POST'>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" className="form-label user_label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                    </div>
                    <Link href="/dashboard"> <button type="submit" className="submit_bot1">Log In</button></Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </>
  );
}

export default Dashboard;
