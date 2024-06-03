import React from 'react';
import { Link } from 'react-router-dom';
import Katalog from '../assets/katalog.png';
import Katalog1 from '../assets/katalog1.png';
import Katalog2 from '../assets/katalog2.png'

function KatalogBatik() {
  return (
    <div>
      <section id="landing" className="relative">
        <div className="landing-container">
          <div className="landing-center relative">
            <img src={Katalog} alt="landing" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-6xl font-bold">KATALOG BATIK</h2>
              <h3 className="text-2xl font-bold mt-4 text-center">
                Batik (atau kata Batik) berasal dari bahasa Jawa “amba” artinya menulis & titik. 
                Kata batik merujuk pada kain dengan corak yang dihasilkan oleh bahan malam (hot wax) 
                yang diaplikasikan ke atas kain, sehingga menahan masuknya bahan pewarna (dye).</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="katalog-tradisional" className="bg-white py-24">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2 mr-8">
            <img src={Katalog1} alt="katalog1" className="w-full rounded-lg" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Batik Tradisional</h2>
            <p>Batik tradisional adalah seni tekstil dengan motif-motif simbolis, 
              dibuat dengan teknik khas seperti canting dan malam serta menggunakan pewarna alami.
            </p>
            <Link to="/katalogBatikTradisional" className="bg-[#314E52] inline-block py-2 px-4 text-white rounded-lg mt-4">
              Selengkapnya <i className="fas fa-arrow-right"></i></Link>
            
          </div>
        </div>
      </section>
   
      <section id="katalog-modern" className="bg-white py-24">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Batik Modern</h2>
            <p>Batik modern adalah variasi kontemporer dengan desain dan teknik yang lebih eksperimental, 
              mungkin menggunakan teknologi modern dan bahan kain yang beragam.
            </p>
            <Link to="/katalogBatikModern" className="bg-[#314E52] inline-block py-2 px-4 text-white rounded-lg mt-4">
              Selengkapnya <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="w-1/2 ml-8">
            <img src={Katalog2} alt="katalog2" className="w-full rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default KatalogBatik;
