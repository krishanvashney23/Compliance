// Dropdown.js
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropUp, setIsDropUp] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - dropdownRect.bottom;
      const spaceAbove = dropdownRect.top;

      setIsDropUp(spaceBelow < 200 && spaceAbove > spaceBelow);
    }
  }, [isOpen]);


  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}><i className="ri-arrow-down-s-line"></i> </span>
      </div>
      {isOpen && (
        <div className={`dropdown-list ${isDropUp ? 'drop-up' : ''}`}>
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
  );
};

export default Dropdown;
