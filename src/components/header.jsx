import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import tulisanLogo from '../assets/tulisanlogo.png';
import chatbotLogo from '../assets/chatbot.png';

const Navbar = () => {
  return (
    <header id="navbar" className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="main-container">
        <div className="nav flex justify-between items-center px-8 py-4">
          <div className="logo flex items-center">
            <img src={logo} alt="logo" className="h-8 mr-2" />
            <img src={tulisanLogo} alt="logo" />
          </div>
          <nav>
            <ul className="flex gap-8">
              <li><Link to="/" className="text-black hover:bg-[#314E52] hover:text-white px-4 py-2 rounded">Beranda</Link></li>
              <li><Link to="/katalog" className="text-black hover:bg-[#314E52] hover:text-white px-4 py-2 rounded">Katalog Batik</Link></li>
              <li><Link to="/wisata" className="text-black hover:bg-[#314E52] hover:text-white px-4 py-2 rounded">Wisata Batik</Link></li>
              <li><Link to="/edukasi" className="text-black hover:bg-[#314E52] hover:text-white px-4 py-2 rounded">Konten Edukasi</Link></li>
              <li className="logo-chatbot">
                <Link to="/chatbot" className="flex items-center hover:bg-transparent">
                  <img src={chatbotLogo} alt="logo" className="h-8 mr-2 transition-transform duration-300 transform hover:scale-110" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
