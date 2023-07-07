import { useState } from 'react';

export default function ContactUs() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption) {
      // Valid selection, do something with it
      console.log('Selected Option:', selectedOption);
    } else {
      // Invalid selection, show an error message
      console.log('Please select an option');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form className="bg-white p-8 rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Select an option:</h2>
        </div>
        <div className="flex items-center justify-center flex-wrap">
          <label
            htmlFor="option1"
            className={`flex items-center justify-center p-1 m-2 ${
              selectedOption === 'option1' ? 'bg-blue-200' : 'bg-gray-300'
            } border-2 border-gray-400 rounded-lg cursor-pointer transition-colors duration-300`}
          >
            <input
              type="radio"
              id="option1"
              name="options"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
              className="hidden"
            />
            <img src="/images/button.png" alt="Option 1" className="w-16 h-16" />
          </label>
          <label
            htmlFor="option2"
            className={`flex items-center justify-center p-1 m-2 ${
              selectedOption === 'option2' ? 'bg-blue-200' : 'bg-gray-300'
            } border-2 border-gray-400 rounded-lg cursor-pointer transition-colors duration-300`}
          >
            <input
              type="radio"
              id="option2"
              name="options"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
              className="hidden"
            />
            <img src="/images/button.png" alt="Option 2" className="w-16 h-16" />
          </label>
          <label
            htmlFor="option3"
            className={`flex items-center justify-center p-1 m-2 ${
              selectedOption === 'option3' ? 'bg-blue-200' : 'bg-gray-300'
            } border-2 border-gray-400 rounded-lg cursor-pointer transition-colors duration-300`}
          >
            <input
              type="radio"
              id="option3"
              name="options"
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
              className="hidden"
            />
            <img src="/images/button.png" alt="Option 3" className="w-16 h-16" />
          </label>
          <label
            htmlFor="option4"
            className={`flex items-center justify-center p-1 m-2 ${
              selectedOption === 'option4' ? 'bg-blue-200' : 'bg-gray-300'
            } border-2 border-gray-400 rounded-lg cursor-pointer transition-colors duration-300`}
          >
            <input
              type="radio"
              id="option4"
              name="options"
              value="option4"
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}
              className="hidden"
            />
            <img src="/images/button.png" alt="Option 4" className="w-16 h-16" />
          </label>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
