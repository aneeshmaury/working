"use client"
import { Input } from "postcss";
import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
   const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return <>
    <div className="flex items-center mt-5 gap-3">
    <div className="arr text-zinc-400 ml-2 text-3xl"><FaUserCircle /></div>
    <div className="midle flex text-sm items-center w-[250px] bg-slate-200 rounded-md p-2"> Please elaborate your issue for faster resolution</div>
 </div>
 <div className="midl ">
  <div>
  
<p className="bg-green-400 rounded-md float-right	mr-4 mt-6 text-sm" style={{ width: '250px', wordWrap: 'break-word', padding:"3px" }}>{inputValue}</p>
</div>

 <input
        type="text"
        value={inputValue}  
        onChange={handleInputChange} 
      />

  <div className="lastr flex gap-4">
<div className="arr text-zinc-400 ml-2 text-3xl"><FaUserCircle /></div>
    <div className="midle flex text-sm items-center w-[250px] bg-slate-200 rounded-md p-2"> Thank you for providing the details. We will assign you to the agent and our agent will connect with you soon</div>

  </div>


 </div>
  
   </>
  
}
