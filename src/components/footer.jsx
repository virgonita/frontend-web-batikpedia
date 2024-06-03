import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-32 flex justify-between items-start bg-[#314E52] p-10 text-white">
      <div className="footer-left w-1/3">
        <h4 className="mb-5">Informasi</h4>
        <ul>
          <li className="mb-3"><a href="#" className="text-white">Kebijakan Privasi</a></li>
          <li className="mb-3"><a href="#" className="text-white">Syarat & Ketentuan</a></li>
          <li className="mb-3"><a href="#" className="text-white">Bantuan</a></li>
          <li><a href="#" className="text-white">FAQ</a></li>
        </ul>
      </div>
      
      <div className="footer-middle w-1/3">
        <h4 className="mb-3">Kontak</h4>
        <p className="mb-3">BatikPedia@gmail.com</p>
        <p className="mb-3">+62 8123-4567-890</p>
        <p>Dapatkan Petunjuk</p>
      </div>
      
      <div className="footer-right w-1/3">
        <h4 className="mb-3">© Copyright 2024. Batik Pedia. All Rights Reserved</h4>
        <ul className="social-icons">
          <li className="inline-block mr-3"><a href="#"><i className="fab fa-instagram text-white"></i></a></li>
          <li className="inline-block mr-3"><a href="#"><i className="fab fa-twitter text-white"></i></a></li>
          <li className="inline-block mr-3"><a href="#"><i className="fab fa-facebook text-white"></i></a></li>
          <li className="inline-block"><a href="#"><i className="fab fa-tiktok text-white"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
