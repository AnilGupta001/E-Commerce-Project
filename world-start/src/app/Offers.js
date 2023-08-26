"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";
export const Offers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    apiCall();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 p-3">
    {data.map((item) => (
      <div key={item.id} className="bg-grey rounded-xl overflow-hidden shadow-md">
        <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-100">New</span>
  <span class="relative inline-flex rounded-full h-4 w-4 bg-sky-500">New</span>
</span>
  <img cla src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-gray-600 mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-2">Price: {item.price}</p>
          <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
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
  
  );
};

Offers.client = true; // Mark the component as a client component

export default Offers;
