
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
        <div className='tabl p-10'>
          <div className="d-flex justify-content-between">
            <p className="fixed-text">Fixed Text</p>
            <p className="fixed-text">Fixed Text : Variable Text</p>
          </div>
          <div className="second-text">
            <p className="fixed-text">Fixed Text</p>
            <p className="fixed-text">Fixed Text</p>
            <p className="fixed-text">Fixed Text</p>
          </div>
          <p className="fixed-text">Fixed Text: Fixed Text</p>
          <p className="fixed-text">Fixed Text. - <span className="variable-text">Variable Text</span></p>
          <p className="fixed-text">Fixed Text,</p>
          <p className="variable-text">
            FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF VVVVVV<br />
            FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF<br />
            VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV<br />
            VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV<br />
            VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV<br />
            VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV<br />
            VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV<br />
          </p>
          <ol>
            <li>FFFFFFFFFFF</li>
          </ol>
          <p className="variable-text">FFFFFFFFFFFFFFFFFFFFFFF</p>
          <p className="variable-text">FFFFFFF</p>
          <p className="variable-text">FFFFFFFFFFFFFF</p>
          <p className="variable-text">FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</p>
        </div >
      </div >
    </>
  );
}

export default Component;
