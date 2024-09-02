"use client"

import Image from "next/image";
import Cover1 from '../images/Cover1.jpeg'
import Cover2 from '../images/Cover2.jpeg'
import Cover3 from '../images/Cover3.jpeg'
import Cover4 from '../images/Cover4.png'
import { useState } from 'react';

const covers = [
  { src: Cover1, alt: 'Cover 1' },
  { src: Cover2, alt: 'Cover 2' },
  { src: Cover3, alt: 'Cover 3' },
  { src: Cover4, alt: 'Cover 4' },
];

export default function Home() {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);

  const handleNext = () => {
    setCurrentCoverIndex((prevIndex) =>
      prevIndex === covers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentCoverIndex((prevIndex) =>
      prevIndex === 0 ? covers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="cover-container mx-auto d-flex justify-content-center align-items-center pt-5" style={{ height: '500px', width: '1000px' }}>
        <Image
          src={covers[currentCoverIndex].src}
          alt={covers[currentCoverIndex].alt}
          objectFit="cover"
        />
      </div>
      <div className="slider-controls flex gap-24">
        <button onClick={handlePrevious}>&lt;</button>
        {covers.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${
              index === currentCoverIndex ? 'active' : ''
            }`}
            onClick={() => {
              setCurrentCoverIndex(index);
            }}
          ></span>
        ))}
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}