import React from 'react';
import edukasi from '../assets/edukasi.png';

function EdukasiBatik() {
  return (
    <section id="landing" className="relative">
        <div className="landing-container">
          <div className="landing-center relative">
            <img src={edukasi} alt="landing" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-6xl font-bold">KONTEN EDUKASI</h2>
              <h3 className="text-2xl font-bold mt-4 text-center">
                Mari telusuri dunia menarik membatik melalui kelas-kelas dan konten edukasi. 
                Temukan rahasia teknik-teknik tradisional, kisah inspiratif, 
                dan informasi mendalam yang akan memperkaya pengetahuan Anda tentang seni yang indah ini.</h3>
            </div>
          </div>
        </div>
      </section>
  );
}

export default EdukasiBatik;
