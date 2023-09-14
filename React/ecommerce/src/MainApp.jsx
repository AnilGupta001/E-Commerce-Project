import React, { useState } from "react"
import { useEffect } from "react";
import './app.css';
import { BottomPart } from "./BottomPart";
import Product from "./Product";
export  default  function Main() {
  const arr = [
     "https://rukminim1.flixcart.com/fk-p-flap/1400/650/image/4b625ff9a92502d6.jpg?q=90",
    "https://rukminim1.flixcart.com/fk-p-flap/1400/650/image/5f293d6bc12f5732.jpg?q=90",
    "https://rukminim1.flixcart.com/fk-p-flap/1400/650/image/e2ef060b3cd2371a.jpg?q=90"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 1000); // Change interval duration as needed

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []); // Empty dependency array to run the effect once on mount
const ar=["https://rukminim1.flixcart.com/fk-p-flap/150/150/image/12b7bf76b18c16b7.jpg?q=90"
,"https://rukminim1.flixcart.com/fk-p-flap/150/150/image/7e3bdbdc97e45af2.jpg?q=90",
"https://rukminim1.flixcart.com/fk-p-flap/150/150/image/861a611609c71ba8.jpg?q=90",
"https://rukminim1.flixcart.com/fk-p-flap/150/150/image/0855ab4b7ff4c206.jpg?q=90",
"https://rukminim1.flixcart.com/fk-p-flap/150/150/image/4f5d1b91a12fcc88.jpg?q=90",
"	https://rukminim1.flixcart.com/fk-p-flap/150/150/image/9f25b3d58b65d805.jpg?q=90"
,"https://rukminim1.flixcart.com/fk-p-flap/150/150/image/54c6dde39139bc26.jpg?q=90",
"https://rukminim1.flixcart.com/fk-p-flap/150/150/image/ee4d7c92595b74e0.jpg?q=90",
"	https://rukminim1.flixcart.com/fk-p-flap/150/150/image/c28bb9948b4e0291.jpg?q=90",
"	https://rukminim1.flixcart.com/fk-p-flap/150/150/image/c28bb9948b4e0291.jpg?q=90",
]
const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
  // Set the input value to the state
  setInputValue(e.target.value);

 
};
  return (
   
    <div className="py-10">
    <input
      type="text"
      className="i-1"
      placeholder="Search Here"
      value={inputValue}
      onChange={handleInputChange}
    
    />
    {inputValue==''?"":<Product/>}
  <div className="flex justify-center items-center space-x-5 bg-gray-100 p-4 rounded-lg">
    <div className="flex items-center">
      <span className="bg-red-700 p-2 h-8 w-8 rounded-full cursor-pointer hover:bg-green-500 transition duration-300"></span>
      <img className="mx-8 rounded-lg" src={arr[currentIndex]} width={800} alt="" />
      <span className="bg-red-700 p-2 h-8 w-8 rounded-full cursor-pointer hover:bg-green-500 transition duration-300"></span>
    </div>
  </div>

  <div className="grid grid-cols-5 gap-4 mt-5">
    {ar.map((items, i) => (
      <div
        key={i}
        className="flex justify-center items-center cursor-pointer hover:border-red-500 rounded-xl p-4 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <img src={items} alt="" className="w-20 h-20 object-contain" />
      </div>
    ))}
  </div>
\

<hr />
<div className="rounded-xl flex justify-center items-center bg-white pt-55">
<img src="https://rukminim1.flixcart.com/fk-p-flap/600/70/image/a64d1351765fcc26.jpg?q=90" alt="" />
</div>
<div>
  <div className="close">
<div className="rounded-xl flex justify-center items-center bg-white pt-5" >
  <img  className="rounded-xl pt-10"  src="https://rukminim1.flixcart.com/fk-p-flap/600/150/image/619a7f2ea1915a1e.jpg?q=90" alt="" />
</div>

  <div className="rounded-xl justify-center items-center bg-white  flex flex-initial">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/700/500/image/e82d3508e6695060.jpg?q=90" alt="" />
     <img  src="https://rukminim1.flixcart.com/fk-p-flap/700/500/image/9fb2ef1bee40a63e.jpg?q=90" alt="" />
  </div>
</div></div>

<div className="rounded-xl justify-center items-center bg-white  flex flex-initial pt-10">
  <img  src="https://rukminim1.flixcart.com/fk-p-flap/600/200/image/1fc00d8f2d15c4f4.jpg?q=90" alt="" />
</div>
<div className="rounded-xl justify-center items-center bg-white  flex flex-initial pt-100">
  <img  src="https://rukminim1.flixcart.com/fk-p-flap/600/150/image/3b18228ab84ed5a1.jpg?q=90" alt="" />

</div>
<BottomPart></BottomPart>
  </div>

  );
}