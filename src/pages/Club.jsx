import React, { useState } from 'react';
import MDSS from '../assets/mdss.PNG';
import SHPE from '../assets/shpe.jpg';
import SWE from '../assets/swe.jpg';
import Track from '../assets/track.jpg';
import './Club.css';

const clubData = [
  {
    image: SWE,
    name: 'Society of Women Engineers',
    position: 'President',
    time: 'Feb 2024 - Present',
    description:'Planned and hosted a large-scale hackathon with faculty judges and prizes',
  },
  {
    image: MDSS,
     name: 'Math and Data Science Society',
    position: 'Secretary',
    time: 'May 2025 - Present',
    description: 'Organize club materials and run club social media accounts',
  },
  {
    image: Track,
     name: 'Cross Country/Track & Field',
    position: 'Team Member',
    time: 'August 2023 - Present',
    description: 'Participate in daily practice and compete at local and regional levels',
  },
  {
    image: SHPE,
     name: 'Society of Hispanic Professional Engineers',
    position: 'Secretary',
    time: 'January 2024 - April 2025',
    description: 'Communicated with general body about events and meetings',
  },
];
function Club(){

    const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clubData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clubData.length) % clubData.length);
  };

  const { image,name,position,time,other, description } = clubData[currentIndex];

    return(
        <>
         <div className="club-page">
      <h1 className="club-header">Club Involvement</h1>
      
      <div className="carousel-container">
        <button className="arrow" onClick={handlePrev}>⟨</button>
        
        <img src={image} loading="lazy" alt="Club Involvement" className="carousel-image" />
        
        <button className="arrow" onClick={handleNext}>⟩</button>
      </div>

      <div className="club-description">{name}</div>
      <div className="club-description">{position}</div>
      <div className="club-description">{time}</div>
      <div className="club-description">{description}</div>
    </div>
        </>

    );
}
export default Club