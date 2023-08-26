"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";
export const Product = () => {
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
      
      <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-gray-600 mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-2">Price: {item.price}</p>
          <div className="flex justify-between">
          <button  className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
            Buy Now
          </button>
          <button  className="animate-ping absolute inline-flex h-10 w-10  opacity-100 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
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

Product.client = true; // Mark the component as a client component

export default Product;
