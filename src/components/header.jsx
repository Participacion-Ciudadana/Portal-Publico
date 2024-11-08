import React, { useState, useEffect } from "react";
import "./../Header.css";

export const Header = (props) => {
  const slides = props.data?.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <header id="header-slider">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            {/* <div className="slide-caption">
              <h1>{slide.title}</h1>
              <p>{slide.paragraph}</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide} className="slider-btn">‹</button>
        <button onClick={nextSlide} className="slider-btn">›</button>
      </div>
    </header>
  );
};
