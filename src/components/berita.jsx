import React from 'react';
import berita1 from '../assets/berita1.png';
import berita2 from '../assets/berita2.png';
import berita3 from '../assets/berita3.png';

function BeritaSection() {
  return (
    <section id="berita" className="mt-32 px-10 bg-white shadow-md">
      <h1 className="berita-title text-5xl font-bold mb-10 ml-10">Berita Terkini</h1>
      <div className="flex justify-center gap-20">
        <div className="berita-left flex-1 max-w-500">
        <div className="image-berita-left text-center mb-3 p-0 bg-[#314E52] rounded-lg shadow-md">
          <img src={berita1} alt="berita1" className="w-full h-auto rounded-lg" />
          <div className="description-berita-left p-3">
            <h3 className="text-white text-lg font-semibold mb-2">
              Tony Midiyanto sosok dibalik desain Batik Banyuwangi di jaket Valentino Rossi
            </h3>
            <div className="date flex justify-between items-center text-white">
              <span><i className="fas fa-calendar-alt mr-1"></i> Jumat, 02 Feb 2024 19:17 WIB</span>
              <span><i className="fas fa-arrow-right"></i></span>
            </div>
          </div>
        </div>
        </div>
        <div className="berita-right flex-1">
          <div className="berita-card mb-10">
            <div className="image-berita-right text-center p-0 bg-[#314E52] rounded-lg shadow-md">
              <img src={berita2} alt="berita2" className="w-full rounded-lg" />
              <div className="description-berita-right p-5">
                <h3 className="text-white text-lg font-semibold mb-3">Pernah Lihat Kopi dan Teh Jadi Pewarna Batik?</h3>
                <div className="date flex justify-between items-center text-white">
                  <span><i className="fas fa-calendar-alt mr-1"></i> Selasa, 30 Apr 2024 23:00 WIB</span>
                  <span><i className="fas fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="berita-card">
            <div className="image-berita-right text-center p-0 bg-[#314E52] rounded-lg shadow-md">
              <img src={berita3} alt="berita3" className="w-full rounded-lg" />
              <div className="description-berita-right p-5">
                <h3 className="text-white text-lg font-semibold mb-3">Pemkab Serang Ajak Puluhan Warga Latihan Membatik di Bandung</h3>
                <div className="date flex justify-between items-center text-white">
                  <span><i className="fas fa-calendar-alt mr-1"></i> Selasa, 30 Apr 2024 15:50 WIB</span>
                  <span><i className="fas fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeritaSection;
