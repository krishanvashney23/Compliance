
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import CreditDropdown from '../CreditDropdown/Component';
// import "../../styles/component.css";

const Credit = () => {

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
                        <th colspan="2" className="left-text">Fixed Text</th>
                        <th colspan="7">Fixed Text</th>
                        <th rowspan="4" colspan="2"className="txt-centr1">Variable Text</th>
                        
                    </tr>
                    <tr>
            
                      <th colspan="2"  className="left-text">Fixed Text</th>
                        <th colspan="7">Fixed Text</th>
                        
                    </tr>
                    <tr>
                       <th colspan="2"  className="left-text1">Fixed Text</th>
                        <th colspan="7" className="txt-centr">Fixed Text</th>
                    </tr>
                    <tr>
                        <th colspan="2"  className="left-text">Fixed Text</th>
                        <th colspan="7">Fixed Text</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                    </tr>
                    <tr>
                        <th>S.n</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                        <th>Fixed Text</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                        <td>Variable Text</td>
                    <td>Variable Text</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Variable Text Fetch Data ( Auto Generate ID from Form A (EC) )</td>
                    <td>Variable Text</td>
                    <td>Variable Text</td>
                    <td>Variable Text</td>
                    <td>Variable Text</td>
                    <td>Variable Text</td>
                    <td>Variable Text</td>
                    <td>Variable Text</td>
                    <td>Variable Text</td>
                    <td>Variable Text</td>
                </tr>
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

export default Credit;
