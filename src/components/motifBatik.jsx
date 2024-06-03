import React, { useState } from 'react';
import batik1 from '../assets/batik1.png';
import batik2 from '../assets/batik2.png';
import batik3 from '../assets/batik3.png';
import batik4 from '../assets/batik4.png';
import FilterIcon from './filterIcon';
import Popup from './popup';

const motifs = [
  {
    name: 'Batik Tujuh Rupa',
    image: batik1,
  },
  {
    name: 'Batik Mega Mendung',
    image: batik2,
  },
  {
    name: 'Batik Bojonegoro',
    image: batik3,
  },
  {
    name: 'Batik Banyumas',
    image: batik4,
  },
];

const MotifBatik = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-5xl font-bold mb-10 ml-10">MOTIF BATIK</h1>
      <div className="relative mb-10 flex items-center">
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Cari ..."
        />
        <button onClick={togglePopup} className="ml-4 p-2">
          <FilterIcon />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {motifs.map((motif, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={motif.image} alt={motif.name} className="w-full h-72 object-cover" />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">{motif.name}</h2>
              <button className="bg-[#314E52] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300">&lt;&lt;</button>
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300">1</button>
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300">2</button>
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300">3</button>
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300">4</button>
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300">&gt;&gt;</button>
      </div>
      {isPopupOpen && <Popup onClose={togglePopup} />}
    </div>
  );
};

export default MotifBatik;
