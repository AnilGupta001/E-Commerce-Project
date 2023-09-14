'use client'
import React, { useEffect, useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="image-container">
      <ul className="image-list">
        {images.map((imageUrl, index) => (
         <img src={imageUrl} key={index} alt="" />
        ))}
      </ul>
      <ul className="image-list1">
        {images.map((imageUrl, index) => (
         <img src={imageUrl} key={index+1} alt="" />
        ))}
      </ul>
    </div>
  );
};

export default ImageSlider;
