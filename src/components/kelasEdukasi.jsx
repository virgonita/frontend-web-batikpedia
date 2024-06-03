import React, { useState } from 'react';

import kelas1 from '../assets/kelas1.png';
import kelas2 from '../assets/kelas2.png';
import kelas3 from '../assets/kelas3.png';

function PopupKelas({ classInfo, onClose }) {
  const { title, location, session, time, link, imageSrc } = classInfo;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-lg shadow-lg z-50 p-6 max-w-80vw max-h-80vh overflow-auto">
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-6">
          <h2>Kategori</h2>
          <p><strong>Nama Kelas:</strong> {title}</p>
          <p><strong>Lokasi:</strong> {location}</p>
          <p><strong>Sesi Program:</strong> {session}</p>
          <p><strong>Waktu:</strong> {time}</p>
          <p><strong>Link Pendaftaran:</strong> <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
        </div>
        <div className="flex-1 text-center">
          <button onClick={onClose} className="absolute top-3 right-3 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            <i className="fas fa-times"></i>
          </button>
          <img src={imageSrc} alt="Class Image" className="w-4/5 h-4/5 rounded-md" />
        </div>
      </div>
    </div>
  );
}

function KelasEdukasi() {
  const [popupInfo, setPopupInfo] = useState(null);

  const openPopup = (info) => {
    setPopupInfo(info);
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  const classes = [
    {
      title: "Tour Membatik Surabaya",
      location: "Gunung Anyar Harapan, ZD 26 Rungkut, Surabaya",
      session: "Offline",
      time: "Minggu, 16 Juni 2024. 09.00-13.00 WIB",
      link: "https://www.klook.com/activity/tour-membatik-surabaya/",
      imageSrc: kelas1
    },
    {
      title: "Kelas Membatik Yogyakarta",
      location: "Batik Making Course, JL. Tirtodipuran, Yogyakarta",
      session: "Offline",
      time: "Selasa, 14 Mei 2024. 15.00-17.00 WIB",
      link: "https://www.klook.com/activity/batik-making-class-yogyakarta/",
      imageSrc: kelas2
    },
    {
      title: "Membatik Itu Asik By Eat4Nation",
      location: "Eat4Nation Garden cafe & art galery, Caruban, Madiun",
      session: "Offline",
      time: "Sabtu, 26 September 2024. 14.00-16.30 WIB",
      link: "https://www.klook.com/activity/Eat4Nation-madiun/",
      imageSrc: kelas3
    }
  ];

  return (
    <section id="motif" className="mt-0 px-4 py-20 bg-white shadow-md relative">
    <div className="motif-container">
    <section className="main">
      <div className="header-motif mb-6">
        <h1 className="text-xl md:text-3xl font-bold">Kelas Edukasi</h1>
      </div>
      <div className="gallery grid grid-cols-1 md:grid-cols-3 gap-10 pl-10 px-10 flex">
        {classes.map((classInfo, index) => (
          <div key={index} className="image relative">
            <img src={classInfo.imageSrc} alt={`Kelas ${index + 1}`} className="gallery-image" />
            <div className="description absolute bottom-0 bg-white bg-opacity-90 p-4 pl-10 px-12 left-0">
              <h3 className="text-lg font-semibold mb-1">{classInfo.title}</h3>
              <p className="text-sm mb-2">{classInfo.location}</p>
              <button onClick={() => openPopup(classInfo)} className="detail-button w-full bg-[#314E52] text-white rounded-md py-1 focus:outline-none hover:bg-opacity-90">Detail</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>

  {popupInfo && <PopupKelas classInfo={popupInfo} onClose={closePopup} />}
</section>

  );
}

export default KelasEdukasi;
