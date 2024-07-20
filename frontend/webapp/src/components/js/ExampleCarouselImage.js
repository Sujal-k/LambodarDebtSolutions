// src/components/ExampleCarouselImage.js
import React from 'react';
import sbi from '../../assets/sbi.png'
function ExampleCarouselImage({ text }) {
    const ImageStyle = {
        height:"50vh",
        width:"100%"
    }
  return (
    <div className="carousel-image">
      <img src={sbi} alt={text} style={ImageStyle} draggable="false" />
    </div>
  );
}

export default ExampleCarouselImage;
