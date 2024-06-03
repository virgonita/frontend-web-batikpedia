import React, { useState } from 'react';
import batikLanding from '../assets/batiktradisional.png';
import batikSmall1 from '../assets/batiktradisionalsmall1.png';
import batikSmall2 from '../assets/batiktradisionalsmall2.png';
import batikSmall3 from '../assets/batiktradisionalsmall3.png';
import batikSmall4 from '../assets/batiktradisionalsmall4.png';
import batikSmall5 from '../assets/batiktradisionalsmall5.png';
import batikSmall6 from '../assets/batiktradisionalsmall6.png';
import batikSmall7 from '../assets/batiktradisionalsmall7.png';
import batikSmall8 from '../assets/batiktradisionalsmall8.png';
import batik1 from '../assets/batiktradisional1.png';
import batik2 from '../assets/batiktradisional2.png';
import batik3 from '../assets/batiktradisional3.png';
import batik4 from '../assets/batiktradisional4.png';
import batik5 from '../assets/batiktradisional5.png';
import batik6 from '../assets/batiktradisional6.png';
import batik7 from '../assets/batiktradisional7.png';
import batik8 from '../assets/batiktradisional8.png';

const motifs = [
  {
    name: 'Batik Bojonegoro',
    image: batik1,
    smallImage: batikSmall1,
    description: 'Teknik Pembuatan: Batik Cap(Stempel)\nAsal: Jawa Timur',
  },
  {
    name: 'Batik Banyumas',
    image: batik2,
    smallImage: batikSmall2,
    description: 'Teknik Pembuatan: Batik Lukis\nAsal: Jawa Tengah',
  },
  {
    name: 'Batik Fractal',
    image: batik3,
    smallImage: batikSmall3,
    description: 'Teknik Pembuatan: Batik Print\nAsal: Jawa Barat',
  },
  {
    name: 'Batik Bebetakan Jogja',
    image: batik4,
    smallImage: batikSmall4,
    description: 'Teknik Pembuatan: Batik Lukis\nAsal: Jawa Tengah',
  },
  {
    name: 'Batik Rencur',
    image: batik5,
    smallImage: batikSmall5,
    description: 'Teknik Pembuatan: Batik Cap(Stempel)\nAsal: Jawa Barat',
  },
  {
    name: 'Batik Lingga',
    image: batik6,
    smallImage: batikSmall6,
    description: 'Teknik Pembuatan: Batik Print\nAsal: Jawa Barat',
  },
  {
    name: 'Batik Lainnya',
    image: batik7,
    smallImage: batikSmall7,
    description: 'Teknik Pembuatan: Batik Cap(Stempel)\nAsal: Jawa Timur',
  },
  {
    name: 'Batik Terakhir',
    image: batik8,
    smallImage: batikSmall8,
    description: 'Teknik Pembuatan: Batik Cap(Stempel)\nAsal: Jawa Timur',
  },
];

const KatalogBatikTradisional = () => {
  const [selectedMotif, setSelectedMotif] = useState(null);

  const handleDetailClick = (motif) => {
    setSelectedMotif(motif);
  };

  const handleClosePopup = () => {
    setSelectedMotif(null);
  };

  return (
    <>
      {/* Landing Page */}
      <section id="landing" className="flex justify-center items-center h-screen bg-gray-200">
        <div className="landing-container">
          <div className="flex justify-center items-center">
            <img src={batikLanding} alt="landing" className="max-w-full h-auto" />
          </div>
        </div>
      </section>
      {/* End of Landing Page */}

      {/* Batik Modern */}
      <section id="batik-modern" className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {motifs.map((motif, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-64 h-64">
                <img src={motif.image} alt={`katalog${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                <img src={motif.smallImage} alt={`small-image${index + 1}`} className="absolute top-1/2 left-1/2 w-28 h-28 object-cover rounded-lg border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="detail-card mt-4 md:mt-0 md:ml-4 text-center">
                <h2 className="text-2xl font-bold">{motif.name}</h2>
                <p className="mt-2 whitespace-pre-line">{motif.description}</p>
                <button
                  onClick={() => handleDetailClick(motif)}
                  className="mt-4 bg-[#314E52] text-white px-4 py-2 rounded hover:bg-[#273f43]"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* End of Batik Modern */}

      {selectedMotif && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-md w-full relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-red-500"
            >
              X
            </button>
            <img src={selectedMotif.smallImage} alt={selectedMotif.name} className="w-full h-56 object-cover mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedMotif.name}</h2>
            <p className="whitespace-pre-line">{selectedMotif.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default KatalogBatikTradisional;
