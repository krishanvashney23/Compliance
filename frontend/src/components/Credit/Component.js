
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import CreditCard from './CreditCard/Component';
// import "../../styles/component.css";

const Credit = ({ options, placeholder }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [selectedItem, setSelectedItem] = useState('Select an option');

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };


  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // Handle file upload here
    }
  };

  return (
    <>
      <div className='container'>
        <Link href="/dashboard">
          <div className='myback_bot'>
            <button className='back'>
              <i className="ri-arrow-left-s-line lefticon"></i>  Go Back
            </button>
          </div>
        </Link>
        <CreditCard />
        <div className='creditFilter'>
          <div className='filterData'>
            <p class="credit_head2">Credit Summary</p>
          </div>
          <div className='filtersearch'>
            <form action="#">
              <center><div className="fsearch-container">
                <input type="text" className="fsearch-input" placeholder="Search..." />
                <span className="fsearch-icon">
                  <button type="submit" className='srch'><i className="ri-search-line fsrch_icn"></i></button>
                  {/* <i className="glyphicon glyphicon-search" height="24px" width="24px" viewBox="0 0 24 24" fill="#ccc"></i> */}
                </span>
              </div></center>
            </form>
          </div>
        </div>
        <div className='credit_table'>
          <div className='tabl '>
            <div className='table-responsive '>
              <table class="table table-striped table-hover">
                <thead>
                  <tr className='m_ain'>
                    <th>Sr. no.</th>
                    <th>Credit</th>
                    <th>Name</th>
                    <th>Credit Id</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Value</th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Lorem is</td>
                    <td>Mr. Shyam</td>
                    <td>98999G</td>
                    <td>Description</td>
                    <td>27-05-2024</td>
                    <td>It is a long established </td>
                    <td>Aprove</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Lorem is</td>
                    <td>Mr. Shyam</td>
                    <td>98999G</td>
                    <td>Description</td>
                    <td>27-05-2024</td>
                    <td>It is a long established </td>
                    <td>Aprove</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Lorem is</td>
                    <td>Mr. Shyam</td>
                    <td>98999G</td>
                    <td>Description</td>
                    <td>27-05-2024</td>
                    <td>It is a long established </td>
                    <td>Aprove</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Lorem is</td>
                    <td>Mr. Shyam</td>
                    <td>98999G</td>
                    <td>Description</td>
                    <td>27-05-2024</td>
                    <td>It is a long established </td>
                    <td>Aprove</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Lorem is</td>
                    <td>Mr. Shyam</td>
                    <td>98999G</td>
                    <td>Description</td>
                    <td>27-05-2024</td>
                    <td>It is a long established </td>
                    <td>Aprove</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Lorem is</td>
                    <td>Mr. Shyam</td>
                    <td>98999G</td>
                    <td>Description</td>
                    <td>27-05-2024</td>
                    <td>It is a long established </td>
                    <td>Aprove</td>
                    <td>download</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Lorem is</td>
                    <td>Mr. Shyam</td>
                    <td>98999G</td>
                    <td>Description</td>
                    <td>27-05-2024</td>
                    <td>It is a long established </td>
                    <td>Aprove</td>
                    <td>download</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='under_filters'>
              <div className='under_head'>
                <p className='items1'>
                  Items per page
                </p>
                <div className="dropdown">
                  <div className="dropdown-header" onClick={toggleDropdown}>
                    {selectedOption ? selectedOption.label : placeholder}
                    <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}></span>
                  </div>
                  {isOpen && (
                    <div className="dropdown-list">
                      {options.map((option) => (
                        <div
                          key={option.value}
                          className="dropdown-option"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className='under_pagination'></div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default Credit;
