import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BottomPart } from './BottomPart';
export default function Product(){
   const [data, setData]=useState([])
   useEffect(() => {
    const apiCall = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    apiCall(); // Call the function here
}, []);
const [selectedOption, setSelectedOption] = useState('lth'); // Default option

const handleOptionChange = (e) => {
  setSelectedOption(e.target.value);
  console.log(selectedOption)
  if(selectedOption=='lth'){
    data.sort((a,b)=>{
return b.price-a.price;
    })
  }
 if (selectedOption=='htl'){
      data.sort((a,b)=>{
        return a.price-b.price;
      })
    
    console.log(data)
  }
};

   return (
    <>
  <div className='filter'>
      <h4>Filter Product Based On Price</h4>
      <select
        name="Select"
        id="select"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="lth" label='Low to High'></option>
        <option value="htl" label='High to Low'></option>
      </select>
    </div>
    <div className="items">
    {data.map((item) => (
      
      <div key={item.id} className="offer-md">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p">
          <h2 className="text-gray-600 mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-2">Price: {item.price}</p>
          <div className="flex justify-between">
          <button  className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
            Buy Now
          </button>
    
          <button className="bg-red-500 hover:bg-green-600 text-white rounded px-4 py-2">
            Favorite
          </button>
          </div>
        </div>
       
      </div>
    ))} 
  </div>
  <BottomPart/>
  </>
   )
}