import * as React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const options = ['Create', 'Squash', 'Rebase'];

export default function DropdownButton() {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('Clicks');
  const dropdownRef = React.useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative inline-block max-w-min" ref={dropdownRef}>
        <button
          id='dropdown'
          style={{
            padding: "0 8px",
            borderWidth: "1px",
            fontSize: "12px",
            borderRadius: "4px",
            width:"100px"
          }}
          className='hover:bg-gray-100'
          onClick={toggleDropdown}
        >
          <span className="flex flex-row gap-4 justify-between items-center w-full">
            {selectedOption} <IoIosArrowDown />
          </span>
        </button>
        {isDropdownOpen && (
          <div
            className="absolute border w-full border-gray-300 backdrop-blur-md rounded-[4px]"
            style={{ marginTop:"2px", fontSize: "12px"
          }}
          >
            {options.map((option, index) => (
              <button
                key={index}
                className='block w-full text-left hover:bg-gray-100'
                onClick={() => {
                  console.log(`Selected: ${option}`);
                  handleOptionSelect(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
