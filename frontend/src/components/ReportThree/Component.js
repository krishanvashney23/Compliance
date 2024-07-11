
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import CreditCard from './CreditCard/Component';
import ReportThreetable from './ReportThreetable/Component';
import CreditFilter from './CreditFilter/Component';
// import "../../styles/component.css";

const Reportone = ({ options, placeholder }) => {


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
        
        <CreditFilter />
        <ReportThreetable />
      </div>

    </>
  );
}

export default Reportone;
