import React, { useState } from 'react';
import Header from '../components/header';
import LandingPage from '../components/landingPage';
import MotifBatik from '../components/motifBatik';
import Popup from '../components/popup';
import Berita from '../components/berita';
import Sejarah from '../components/sejarah';
import Pelestarian from '../components/pelestarian';
import Footer from '../components/footer';

function Beranda() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Header />
      <LandingPage />
      <MotifBatik openPopup={openPopup} />
      {isPopupOpen && <Popup onClose={closePopup} />}
      <Berita />
      <Sejarah />
      <Pelestarian />
      <Footer />
    </div>
  );
}

export default Beranda;
