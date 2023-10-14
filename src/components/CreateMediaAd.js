import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const options = ["Apply Now", "Book Now", "Call Now", "Contact Us", "Download", "Get Directions", "Get Showtimes", "Learn More", "No Button"];

const CreateMediaAd = ({setFormData}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleOptionSelect = (option) => {
    handleInputChange("buttonLabel", option);
    toggleDropdown();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define a single state object to store the input values
  const [inputValues, setInputValues] = useState({
    heading01: '',
    description01: '',
    heading02: '',
    landscapeImage: '',
    portraitImage: '',
    squareImage: '',
    videoURL: '',
    businessLabel: '',
    buttonLabel: '',
    websiteURL: '',
  });

  // Function to update the state when an input changes
  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  return (
    <>
      {/* grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-6 w-full gap-6 p-4">
        <div className="lg:col-span-3">
          <div className="flex flex-col w-full gap-2">
            <h3>Heading 01</h3>
            <input
              className="focus:outline-none border rounded-[4px] p-2"
              placeholder="Add a heading that would make users interested"
              value={inputValues.heading01}
              onChange={(e) => handleInputChange('heading01', e.target.value)}
            />
          </div>
        </div>
        <div className="lg:col-span-3 lg:row-span-2">
          <div className="flex flex-col w-full h-full gap-2">
            <h3>Description 01</h3>
            <textarea
              className="focus:outline-none border rounded-[4px] p-2 h-full"
              placeholder="Add a heading that would make users interested"
              value={inputValues.description01}
              onChange={(e) =>
                handleInputChange('description01', e.target.value)
              }
            />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="flex flex-col w-full gap-2">
            <h3>Heading 02</h3>
            <input
              className="focus:outline-none border rounded-[4px] p-2"
              placeholder="Add a heading that would make users interested"
              value={inputValues.heading02}
              onChange={(e) => handleInputChange('heading02', e.target.value)}
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col w-full gap-2">
            <h3>Landscape Marketing Image</h3>
            <input
              className="focus:outline-none border rounded-[4px] p-2"
              placeholder="Add a heading that would make users interested"
              value={inputValues.landscapeImage}
              onChange={(e) => handleInputChange('landscapeImage', e.target.value)}
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col w-full gap-2">
            <h3>Portrait Marketing Image</h3>
            <input
              className="focus:outline-none border rounded-[4px] p-2"
              placeholder="Add a heading that would make users interested"
              value={inputValues.portraitImage}
              onChange={(e) => handleInputChange('portraitImage', e.target.value)}
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col w-full gap-2">
            <h3>Square Marketing Image</h3>
            <input
              className="focus:outline-none border rounded-[4px] p-2"
              placeholder="Add a heading that would make users interested"
              value={inputValues.squareImage}
              onChange={(e) => handleInputChange('squareImage', e.target.value)}
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="flex flex-col w-full gap-2">
            <h3>Video URL</h3>
            <input
              className="focus:outline-none border rounded-[4px] p-2"
              placeholder="Add a heading that would make users interested"
              value={inputValues.videoURL}
              onChange={(e) => handleInputChange('videoURL', e.target.value)}
            />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="flex flex-col w-full gap-2">
            <h3>Business Label</h3>
            <input
              className="focus:outline-none border rounded-[4px] p-2"
              placeholder="Add a heading that would make users interested"
              value={inputValues.businessLabel}
              onChange={(e) => handleInputChange('businessLabel', e.target.value)}
            />
          </div>
        </div>
        <div className="relative lg:col-span-3" ref={dropdownRef}>
          <div className="flex flex-col w-full gap-2">
            <h3>Button Label</h3>
            <button
              className={`flex flex-row justify-between items-center ${inputValues.buttonLabel == "" && "text-gray-400"} focus:outline-none border rounded-[4px] p-2 text-left`}
              onClick={toggleDropdown}
            >
              {inputValues.buttonLabel == "" ? "Select an option" : inputValues.buttonLabel}
              <IoIosArrowDown />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute border w-full border-gray-300 backdrop-blur-md rounded-[4px] top-20 max-h-64 overflow-y-auto"
              >
                {options.map((option, index) => (
                  <button
                    key={index}
                    className='block w-full text-left hover:bg-gray-100 p-2 border-b'
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
        </div>
        <div className="lg:col-span-6">
          <div className="flex flex-col w-full gap-2">
            <h3>Website URL</h3>
            <input
              className="focus:outline-none border rounded-[4px] p-2"
              placeholder="Add a heading that would make users interested"
              value={inputValues.websiteURL}
              onChange={(e) => handleInputChange('websiteURL', e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMediaAd;
