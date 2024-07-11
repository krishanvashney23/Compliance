
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

          <div className="text-center">
            <p className="fixed-text">Fixed Text</p>
            <p className="fixed-text">Fixed Text</p>
          </div>
          <div className="text-center">
            <div className="txt-flex">
              <p className="fixed-text">Fixed Text</p>
              <p className="d-inline-block mx-3">Variable Text</p>
              <p className="d-inline-block fixed-text">Fixed Text</p>
            </div>
          </div>
          <div className=" row text-left">
            <div className="col-sm-4 col-6">

              <p>Fixed Text:</p>
            </div>
            <div className="col-sm-4 col-6">

              <p className="fixed-text">Variable Text</p>
              <p className="fixed-text1">Variable Text</p>
              <p className="fixed-text1">Variable Text</p>
              <p className="fixed-text1">Variable Text</p>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">(1)</th>
                  <th className="text-center">(2)</th>
                  <th className="text-center">(3)</th>
                  <th className="text-center">(4)</th>
                  <th className="text-center">(5)</th>
                </tr>
                <tr>
                  <th className="fixed-text">Fixed Text</th>
                  <th className="fixed-text">Fixed Text</th>
                  <th className="fixed-text">Fixed Text</th>
                  <th className="fixed-text">Fixed Text</th>
                  <th className="fixed-text">Fixed Text</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fixed-text">1.</td>
                  <td>Variable</td>
                  <td>Variable</td>
                  <td>Variable</td>
                  <td>Variable</td>
                </tr>
                {/* <!-- Add more rows as needed --> */}
              </tbody>
            </table>
          </div>
          <div className="text-left">
            <p>Fixed Text  Variable Text</p>
            <p>Fixed Text  Variable Text</p>
          </div>
        </div >
      </div >

    </>
  );
}

export default Component;
