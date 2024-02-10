// components/Chat.js
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useState } from 'react';

const Chat = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

  return (
    
    <div className="max-w-md mx-auto my-8  rounded-lg">
      <div className="mb-4 flex items-center gap-3">
      <div className="arr text-zinc-400 ml-1 text-3xl"><FaUserCircle /></div>
        <div className="bg-blue-100 p-2 rounded-lg inline-block">
          <p className="text-sm"> Please elaborate your issue for faster resolution</p>
        </div>
      </div>
      <div className="mb-4 text-right">
        <div className="bg-green-100 p-2 rounded-lg inline-block">
          <p className="text-sm" style={{ width: '250px', wordWrap: 'break-word', padding:"9px" }}> {inputValue}</p>
        </div>
      </div>
      {/* More messages can be added here */}
      <div className="flex">
        <input type="text" placeholder="Type your message..." className="flex-1 p-2 border rounded-l-lg" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Send</button>
      </div>
      <div className="mb-4 flex items-center gap-3">
      <div className="arr text-zinc-400 ml-1 text-3xl"><FaUserCircle /></div>
        <div className="bg-blue-100 w-54 p-2 rounded-lg inline-block">
          <p className="text-sm">I understand how upsetting it's to loose your money.We have raised a ticket for your issue.
We are working on resolving your issue and once correct and complete details are received we do action on it.</p>
        </div>
      </div>
      <input className="mt-14 border-2 border-black"
          type="text"
          value={inputValue}  
          onChange={handleInputChange} 
        />
    </div>
  );
};

export default Chat;
