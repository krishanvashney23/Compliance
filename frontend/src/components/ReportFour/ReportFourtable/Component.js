
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
            <table className="table table-bordered" border="2">
              <thead>
                <tr><td colspan="57">
                  <center>
                    <p>Fixed Text</p>
                    <p>Fixed Text</p>
                    <p>Fixed Text</p>
                  </center>
                </td></tr>
                <tr><td colspan="57">
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                  <p>Fixed Text</p>
                </td></tr>
              {/* </tr> */}
              <tr>
                <td colspan="4">Fixed Text</td>
                <td colspan="35">Variable Text</td>
                <td rowspan="2" colspan="10">Fixed Text</td>
                <td rowspan="2" colspan="8">Variable Text</td>
              </tr>
              <tr>
                <td colspan="4">Fixed Text</td>
                <td colspan="35">Variable Text</td>
              </tr>
              <tr>
                <td colspan="4">Fixed Text</td>
                <td colspan="35">Variable Text</td>
                <td colspan="10">Fixed Text</td>
                <td colspan="8">Variable Text</td>
              </tr>
              <tr>
                <td colspan="4">Fixed Text</td>
                <td colspan="35">Variable Text</td>
                <td colspan="10">Fixed Text</td>
                <td colspan="8">Variable Text</td>
              </tr>
            </thead>
            <tbody>
              <tr className="flat_text">
                <td className="vrt" rowspan="2">Fixed Text</td>
                <td className="vrt" rowspan="2">Fixed Text</td>
                <td className="vrt" rowspan="2">Fixed Text</td>
                <td className="vrt table4_color" rowspan="2">Fixed Text</td>
                <td className="vrt" rowspan="2">Fixed Text</td>
                <td className="vrt table4_color" rowspan="2 ">Fixed Text</td>
                <td className="vrt table4_color" rowspan="2">Fixed Text</td>
                <td colspan="31 ">Fixed Text</td>
                <td className="vrt" rowspan="2">Fixed Text</td>
                <td className="vrt table4_color" rowspan="2">Fixed Text</td>
                <td className="vrt table4_color" rowspan="2">Fixed Text</td>
                <td className="vrt" rowspan="2">Fixed Text</td>
                <td colspan="6">Fixed Text</td>
                <td colspan="6">Fixed Text</td>
                <td colspan="3"></td>
              </tr>
              <tr className="flat_text">

                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td className='table4_color2'>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td className='table4_color2'>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td className='table4_color2'>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td className='table4_color2'>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>

                <td className="vrt">Fixed Text</td>
                <td className="vrt table4_color">Fixed Text</td>
                <td className="vrt table4_color">Fixed Text</td>
                <td className="vrt">Fixed Text</td>
                <td className="vrt">Fixed Text</td>
                <td className="vrt table4_color1">Fixed Text</td>
                <td className="vrt table4_color">Fixed Text</td>
                <td className="vrt table4_color">Fixed Text</td>
                <td className="vrt table4_color">Fixed Text</td>
                <td className="vrt table4_color">Fixed Text</td>
                <td className="vrt table4_color">Fixed Text</td>
                <td className="vrt ">Fixed Text</td>
                <td className="vrt table4_color1">Fixed Text</td>
                <td className="vrt">Fixed Text</td>
                <td className="vrt">Fixed Text</td>
              </tr>
              <tr className="flat_th">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>

                <td colspan="31">8</td>

                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
              </tr>
              <tr className="flat_text">
                <td>1</td>
                <td>1</td>
                <td><p className="variable_text">Variable Text<br />Fetch Data ( Auto Generate ID from Form A (EC))</p></td>
                <td>Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td className="mid_small">Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
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
              <tr className="flat_text">
                <td>2</td>
                <td>2</td>
                <td><p className="variable_text">Variable Text<br />Fetch Data ( Auto Generate ID from Form A (EC))</p></td>
                <td>Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
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
              <tr className="flat_text">
                <td>3</td>
                <td>3</td>
                <td><p className="variable_text">Variable Text<br />Fetch Data ( Auto Generate ID from Form A (EC))</p></td>
                <td>Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td className="vrt">Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
                <td>Variable Text</td>
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
            <tfoot>
              <tr className="flat_text">
                <th colspan="7">Total</th>
                <th colspan="31"></th>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
                <td className="vrt_min">Variable</td>
              </tr>
            </tfoot>
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
    </div >
    </>
  );
}

export default Component;
