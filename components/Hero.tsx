
import React from 'react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://res.cloudinary.com/dzac4g9vp/image/upload/v1763000506/498586816_2934536186727606_1967625702962164975_n_fhitoy.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-tight tracking-wide drop-shadow-2xl">
          Your Gateway to Paradise
        </h1>
        <p className="text-lg md:text-2xl font-sans mb-8 max-w-3xl mx-auto drop-shadow-xl">
          Experience the untouched beauty of Milne Bay from the comfort of Napatana Lodge.
        </p>
        <button
          onClick={onBookNow}
          className="bg-accent hover:bg-accent-hover text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Reserve Your Stay
        </button>
      </div>
    </section>
  );
};

export default Hero;