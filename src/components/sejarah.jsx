import React from 'react';
import sejarahImage from '../assets/sejarah1.png'; 

const Sejarah = () => {
  return (
    <section id="pelestarian" className="mt-32 p-2 bg-white shadow-md relative">
      <div className="flex justify-center items-center gap-12">
      <div className="relative bg-[#F2A154] rounded-lg p-4 z-0 top-12">
          <img
            src={sejarahImage}
            alt="sejarah"
            className="w-64 h-72 mb-24 mr-12 relative top-20"
          />
        </div>
        <div className="max-w-lg z-10">
          <h2 className="text-3xl text-center text-black">Sejarah Batik</h2>
          <p className="text-lg text-black mt-4">
          Batik telah menjadi bagian hidup masyarakat Indonesia sejak 1.500 tahun yang lalu. 
          Selama berabad-abad, Batik telah menjadi simbol dalam momen-momen besar kehidupan manusia.
            <br />
          </p>
          <button className="bg-[#314E52] mt-4 py-2 px-4 text-white rounded hover:bg-gray-800">
            Selengkapnya <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;