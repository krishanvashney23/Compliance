
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
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th colspan="17" className="text-center fixed-text">Fixed Text</th>
                </tr>
                <tr>
                  <th colspan="17" className="text-center fixed-text">Fixed Text</th>
                </tr>
                <tr>
                  <th colspan="17" className="text-center fixed-text">Fixed Text</th>
                </tr>
                <tr>
                  <th colspan="3" className="text-center fixed-text">Fixed Text</th>
                  <th colspan="5" className="text-center fixed-text"></th>
                  <th colspan="5" className="text-center fixed-text">Fixed Text</th>
                  <th colspan="4" className="text-center fixed-text">Variable Text</th>
                </tr>
                <tr>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Variable Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Variable Text</th>
                  <th rowspan="1" colspan="5" className="text-center fixed-text">DEDUCTION</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Variable Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Variable Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Variable Text</th>
                  <th rowspan="2" colspan="1" className="text-center fixed-text">Variable Text</th>


                </tr>
                <tr>
                  <th colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th colspan="1" className="text-center fixed-text">Fixed Text</th>
                  <th colspan="1" className="text-center fixed-text">Fixed Text</th>
                </tr>

              </thead>
              <tbody>
                <tr>
                  <td className="fixed-text">1</td>
                  <td className="fixed-text">2</td>
                  <td className="fixed-text">3</td>
                  <td className="fixed-text">4</td>
                  <td className="fixed-text">5</td>
                  <td className="fixed-text">6</td>
                  <td className="fixed-text">7</td>
                  <td className="fixed-text">8</td>
                  <td className="fixed-text">9</td>
                  <td className="fixed-text">10</td>
                  <td className="fixed-text">10A</td>
                  <td className="fixed-text">11</td>
                  <td className="fixed-text">12</td>
                  <td className="fixed-text">13</td>
                  <td className="fixed-text">14</td>
                  <td className="fixed-text">15</td>
                  <td className="fixed-text">16</td>
                </tr>
                {/* <!-- Repeat as needed for rows --> */}
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* <!-- Add more rows as needed --> */}
                <tr>
                  <td colspan="5" className="fixed-text">Fixed Text</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td></td>
                  <td></td>

                </tr>
              </tbody>
            </table>
          </div>
        </div >
      </div >

    </>
  );
}

export default Component;
