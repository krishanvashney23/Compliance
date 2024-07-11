
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
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th colspan="13" className="fixed-text">Fixed Text</th>
                </tr>
                <tr>
                  <th colspan="13" className="fixed-text">Fixed Text</th>
                </tr>
                <tr>
                  <th colspan="13" className="fixed-text1">Fixed Text</th>
                </tr>
                <tr>
                  <th colspan="13" className="fixed-text1">Fixed Text</th>
                </tr>
                <tr>
                  <th colspan="13" className="fixed-text"></th>
                </tr>
                <tr>
                  <th colspan="4" className="fixed-text">Fixed Text</th>
                  <th colspan="9" className="fixed-text">Variable Text</th>
                </tr>
                <tr>
                  <th colspan="4" className="fixed-text">Fixed Text</th>
                  <th colspan="9" className="variable-text">Variable Text</th>
                </tr>

                <tr>
                  <th colspan="2" className="fixed-text"></th>
                  <th colspan="11" className="fixed-text"></th>

                </tr>

                <tr>
                  <th rowspan="2" colspan="1" className="fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="fixed-text">Fixed Text</th>
                  <th rowspan="2" colspan="1" className="fixed-text">Fixed Text</th>
                  <th rowspan="1" colspan="5" className="fixed-text">Fixed Text</th>

                </tr>
                <tr>
                  <th colspan="1" className="fixed-text">Fixed Text</th>
                  <th colspan="1" className="fixed-text">Fixed Text</th>
                  <th colspan="1" className="fixed-text">Fixed Text</th>
                  <th colspan="1" className="fixed-text">Fixed Text</th>
                  <th colspan="1" className="fixed-text">Fixed Text</th>
                </tr>

                <tr>
                  <th className=" fixed-text">1</th>
                  <th className=" fixed-text">2</th>
                  <th className=" fixed-text">3</th>
                  <th className=" fixed-text">4</th>
                  <th className=" fixed-text">5</th>
                  <th className=" fixed-text">6</th>
                  <th className=" fixed-text">7</th>
                  <th className=" fixed-text">8</th>
                  <th className=" fixed-text">9</th>
                  <th className=" fixed-text">10</th>
                  <th className=" fixed-text">11</th>
                  <th className=" fixed-text">12</th>
                  <th className=" fixed-text">13</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>
                  <td className="variable-text">Variable</td>

                </tr>
                <tr>
                  <th colspan="13" className="fixed-text"></th>

                </tr>
                <tr>
                  <th colspan="2" className="fixed-text">Fixed Text</th>
                  <th colspan="2" className="fixed-text">Fixed Text</th>
                  <th colspan="3" className="fixed-text">Fixed Text</th>
                  <th colspan="3" className="fixed-text">Fixed Text</th>
                  <th colspan="3" className="fixed-text">Fixed Text</th>

                </tr>
                <tr>
                  <th colspan="2" className="fixed-text">14</th>
                  <th colspan="2" className="fixed-text">15</th>
                  <th colspan="3" className="fixed-text">16</th>
                  <th colspan="3" className="fixed-text">17</th>
                  <th colspan="3" className="fixed-text">18</th>

                </tr>
                <tr>
                  <th colspan="2" className="fixed-text">Variable Text</th>
                  <th colspan="2" className="fixed-text">Variable Text</th>
                  <th colspan="3" className="fixed-text">Variable Text</th>
                  <th colspan="3" className="fixed-text">Variable Text</th>
                  <th colspan="3" className="fixed-text">Variable Text</th>

                </tr>
                <tr>
                  <th colspan="13" className="fixed-text">Variable Text</th>

                </tr>

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  );
}

export default Component;
