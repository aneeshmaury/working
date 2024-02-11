// components/Chat.js
import React from 'react';
import { useState } from 'react';

const Chatmain = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

  return (
    <div className="max-w-md mx-auto my-8 p-4 rounded-lg">
      <div className="mb-4">
        <div className="bg-blue-100 w-[270px] p-2 pr-4 rounded-lg inline-block">
          <p className="text-[14px]"> Please elaborate your issue for faster resolution</p>
        </div>
      </div>
      <div className="mb-4 text-right">
        <div className="bg-blue-50 p-3 rounded-lg inline-block">
          <p className="text-[14px] text-left"style={{ width: '250px', wordWrap: 'break-word', padding:"1px" }} >{inputValue} </p>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-blue-100 w-[270px] p-3 pr-5 rounded-lg inline-block">
          <p className="text-[14px]">I understand how upsetting it is to loose your money.We have raised a ticket for your issue.We are working on resolving your issue and once correct and complete details are received we do action on it.</p>
        </div>
      </div>
      {/* More messages can be added here */}
    <div className="bg-red-500np">
      <input className="mt-20 border-2 border-black px-3 py-2 text-black rounded-sm"
          type="text"
          placeholder="Write Your Message..."
          value={inputValue}  
          onChange={handleInputChange} 
        />
    </div>
      
    </div>
  );
};

export default Chatmain;
