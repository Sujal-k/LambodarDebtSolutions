import React from 'react';
import '../css/reactCard.css'
const ReactCardSlider = ({ slides }) => {
  return (
    <div className="react-card-slider">
      {slides.map((slide, index) => (
        <div className="slide" key={index}>
          <img src={slide.image} alt={slide.title} style={slide.style} draggable="false" />
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReactCardSlider;
