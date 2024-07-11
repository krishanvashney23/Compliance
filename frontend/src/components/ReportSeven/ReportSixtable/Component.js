
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import CreditDropdown from '../CreditDropdown/Component';
// import "../../styles/component.css";

const Component = () => {

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
    { label: 'Option 6', value: 'option6' },
    { label: 'Option 7', value: 'option7' },
    { label: 'Option 8', value: 'option8' },
    { label: 'Option 9', value: 'option9' },
    { label: 'Option 10', value: 'option10' },
  ];

  return (
    <>

      <div className='credit_table'>
        <div className='tabl '>
          <div className="table-responsive report2">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th colspan="12" className="fixed-text">
                    <p className="th-center mb-0">Fixed Text</p>
                    <p className="th-center mb-0">Fixed Text</p>
                    <p className="th-center mb-0">Fixed Text</p>
                  </th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">ID</th>
                  <th colspan="6" className="fixed-text">Variable Text Fetch Data (Auto Generate ID from Form A (EC))</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="12" className="fixed-text"></th>

                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>

                <tr>
                  <th colspan="12" className="fixed-text"></th>

                </tr>
                <tr>

                  <th colspan="6" className="fixed-text">1.Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">2.Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">3.Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">4.Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">5.Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="6" className="fixed-text">6.Fixed Text</th>
                  <th colspan="6" className="fixed-text1">Variable Text</th>
                </tr>
                <tr>
                  <th rowspan="2" colspan="6" className="fixed-text">7.Fixed Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>

                </tr>

                <tr>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  <th colspan="1" className="fixed-text1">Variable Text</th>
                  {/* <!--<th colspan="1.2" className="fixed-text">Variable Text</th>--> */}

                </tr>
                <tr>
                  <th colspan="12" className="fixed-brd">
                    <div className="on_flex">
                      <p>Variable Text</p>
                      <p>Variable Text</p>
                    </div>
                  </th>
                </tr>

              </thead>
              <tbody>

              </tbody>
            </table>

          </div>

          {/* <div className='under_filters'>
            <div className='under_head'>
              <p className='items1 mb-0'>
                Items per page
              </p>
              <CreditDropdown options={options} placeholder="Select an option" />
            </div>
            <div className='under_pagination'>
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link active" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
}

export default Component;
