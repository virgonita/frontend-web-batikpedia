import React from 'react';
import pelestarianImage from '../assets/pelestarian1.png'; // Adjust the path according to your assets folder

const Pelestarian = () => {
  return (
    <section id="pelestarian" className="mt-32 p-2 bg-white shadow-md relative">
      <div className="flex justify-center items-center gap-12">
        <div className="max-w-lg z-10">
          <h2 className="text-3xl text-center text-black">Pelestarian Batik</h2>
          <p className="text-lg text-black mt-4">
            Dengan melestarikan batik, kita dapat memastikan bahwa keindahan dan makna
            dalam setiap motif dan pola tetap terjaga untuk dinikmati oleh generasi mendatang.
            <br />
          </p>
          <button className="bg-[#314E52] mt-4 py-2 px-4 text-white rounded hover:bg-gray-800">
            Selengkapnya <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>

        <div className="relative bg-[#31A0B0]  rounded-lg p-4 z-0 top-12">
          <img
            src={pelestarianImage}
            alt="pelestarian1"
            className="w-64 h-72 mb-24 mr-12 relative top-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Pelestarian;