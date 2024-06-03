import React from 'react';

import videoKonten1 from '../assets/videokonten1.mp4';

function KontenMembatik() {
  return (
    <section id="konten" className="mt-0 px-4 py-20 bg-white shadow-md relative">
      <div className="konten-container flex flex-col items-start">
        <div className="header-konten mb-6">
          <h1 className="text-3xl font-bold">Konten Membatik</h1>
        </div>
        <div className="konten-card flex flex-col md:flex-row justify-between w-full bg-[#314E52] rounded-lg">
          <div className="konten-left p-6 md:w-1/2">
            <h2 className="konten-name text-white text-3xl mb-4">Menghabiskan waktu luang belajar membatik</h2>
            <p className="text-white text-sm">Mengenal batik dari awal pembuatan, melalui serangkaian tahapan yang meliputi proses pewarnaan dan motif yang khas, hingga menjadi karya yang indah dan bernilai seni tinggi.</p>
          </div>
          <div className="konten-right md:w-1/2 p-6">
            <video width="640" height="360" controls>
              <source src={videoKonten1} type="video/mp4" />
            </video>
            <p className="text-white text-xs text-right">Sumber: <a href="https://www.youtube.com/@TRANSTVofficial" target="_blank" rel="noopener noreferrer" className="underline">https://www.youtube.com/@TRANSTVofficial</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KontenMembatik;
