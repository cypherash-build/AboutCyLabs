"use client";

import React, { useEffect, useState } from 'react';

const Hyperspeed = ({ children }: { children: React.ReactNode }) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        const style: React.CSSProperties = {
          '--star-angle': `${Math.random() * 360}deg`,
          '--star-speed': `${Math.random() * 0.5 + 0.5}s`,
          '--star-delay': `${Math.random() * 1}s`,
        } as React.CSSProperties;
        newStars.push(<div key={i} className="star" style={style}></div>);
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="hyperspeed-background">
      <div className="stars-container">{stars}</div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Hyperspeed;
