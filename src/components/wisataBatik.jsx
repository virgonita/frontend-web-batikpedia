import React from 'react';
import Wisata1 from '../assets/WisataJatim 1.png';
import Wisata2 from '../assets/WisataJateng1.png';
import Wisata3 from '../assets/WisataJabar1.png'


function WisataBatik() {
  return (
    <div>
      <section id="wisata-batik" className="bg-white py-24">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2 mr-8">
            <img src={Wisata1} alt="wisata1" className="w-full rounded-lg" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Jawa Timur</h2>
            <p>Jawa Timur terkenal dengan keberagaman budayanya, termasuk warisan batiknya. 
            Batik dari daerah ini seringkali menggambarkan motif-motif yang kaya 
            akan tradisi lokal dan kearifan lokal. 
            </p>
            <a href="#" className="bg-[#314E52] inline-block py-2 px-4 text-white rounded-lg mt-4">
              Selengkapnya <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
   
      <section id="wisata-batik" className="bg-white py-24">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Jawa Tengah</h2>
            <p>Jawa Tengah memiliki sejarah panjang dalam produksi batik Indonesia. 
            Batik dari daerah ini seringkali dikenal dengan motif klasik 
            dan penggunaan warna yang kaya.
            </p>
            <a href="#" className=" bg-[#314E52] inline-block py-2 px-4 text-white rounded-lg mt-4">
              Selengkapnya <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="w-1/2 ml-8">
            <img src={Wisata2} alt="wisata2" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      <section id="wisata-batik" className="bg-white py-24">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2 mr-8">
            <img src={Wisata3} alt="wisata3" className="w-full rounded-lg" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Jawa Barat</h2>
            <p>Jawa Barat adalah salah satu pusat pengembangan batik di Indonesia. 
            Kaya akan tradisi budaya Sunda, batik dari daerah ini seringkali 
            memadukan unsur-unsur alam dan khas Sunda.
            </p>
            <a href="#" className="bg-[#314E52] inline-block py-2 px-4 text-white rounded-lg mt-4">
              Selengkapnya <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WisataBatik;
