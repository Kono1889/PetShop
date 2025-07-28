import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
const Landing = () => {
  return (
    <section className="relative min-h-[70vh] bg-[#f8f3ef] flex items-center justify-center overflow-hidden">
      {/* Left Cat Image */}
      <div className="hidden md:block absolute left-0 bottom-0 h-full w-1/3 flex items-end z-10">
        <div className="bg-[#d6cfc7] rounded-tr-[80px] rounded-br-[80px] h-[80%] w-[90%] flex items-end justify-center overflow-hidden shadow-lg">
          <img
            src={photo2}
            alt="Cat"
            className="object-cover h-[90%] w-auto max-w-[90%] rounded-bl-3xl shadow-xl border-4 border-white"
            style={{ aspectRatio: '3/4' }}
          />
        </div>
      </div>
      {/* Right Dog Image */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/3 flex items-start z-10">
        <div className="bg-[#b7a99a] rounded-tl-[80px] rounded-bl-[80px] h-[80%] w-[90%] flex items-start justify-center overflow-hidden shadow-lg">
          <img
            src={photo1}
            alt="Dog"
            className="object-cover h-[90%] w-auto max-w-[90%] rounded-tr-3xl shadow-xl border-4 border-white"
            style={{ aspectRatio: '3/4' }}
          />
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Best Pals for <br className="hidden md:block" /> Your Paw Pals
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl">
          Your Trusted Partner in Pet Care, Offering Tailored Services to Ensure the Health, Happiness, and Well-Being of Your Beloved Furry Companions.
        </p>
        <button className="bg-[#7c6a5e] hover:bg-[#5a4c41] text-white font-semibold px-8 py-3 rounded-full shadow transition-colors duration-200 text-lg">Book Now</button>
      </div>
      {/* Paw Prints */}
      <PawPrint className="absolute left-1/4 top-1/2 w-8 h-8 text-[#d6cfc7] rotate-12" />
      <PawPrint className="absolute left-1/3 bottom-1/3 w-6 h-6 text-[#d6cfc7] -rotate-6" />
      <PawPrint className="absolute right-1/4 top-1/3 w-8 h-8 text-[#b7a99a] rotate-3" />
      <PawPrint className="absolute right-1/3 bottom-1/4 w-6 h-6 text-[#b7a99a] -rotate-12" />
    </section>
  );
};

function PawPrint({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <circle cx="8" cy="12" r="3" />
      <circle cx="24" cy="12" r="3" />
      <circle cx="16" cy="7" r="3" />
      <ellipse cx="16" cy="22" rx="7" ry="8" />
    </svg>
  );
}

export default Landing;