import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-r from-blue-500 to-purple-600">
      <div
        ref={heroRef}
        className={`text-white transition-opacity duration-700 ${
          isVisible ? "animate-fade-slide" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          WELCOME TO MY PORTFOLIO
        </h1>
        <p className="text-xl md:text-2xl">Creative Developer & Designer</p>
      </div>
    </div>
  );
};

export default Hero;
