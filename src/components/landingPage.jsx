import React from 'react';
import landingImage from '../assets/landing.png';

function EdukasiBatik() {
  return (
    <section id="edukasi" className="relative">
      <div className="edukasi-container">
        <div className="edukasi-center relative">
          <img src={landingImage} alt="edukasi" className="w-full h-screen object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h2 className="text-6xl font-bold">BATIK PEDIA</h2>
            <h1 className="text-4xl font-bold mt-4">Karya Seni Warisan Bangsa Indonesia</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EdukasiBatik;
