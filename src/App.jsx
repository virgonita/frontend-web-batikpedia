import React from "react";
import { useEffect} from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Beranda from './pages/beranda';
import SejarahBatik from './pages/sejarahBatik';
import PelestarianBatik from './pages/pelestarianBatik';
import Katalog from './pages/katalog';
import KatalogBatikTradisional from './pages/katalogBatikTradisional';
import KatalogBatikModern from './pages/katalogBatikModern';
import Wisata from './pages/wisata';
import WisataJatim from './pages/wisataJatim';
import WisataJateng from './pages/wisataJateng';
import WisataJabar from './pages/wisataJabar';
import Edukasi from './pages/edukasi';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    script.async = true;
    script.onload = () => {
      window.watsonAssistantChatOptions = {
        integrationID: "26de6106-c010-45d5-ac2b-14c1e552c5b9", 
        region: "us-south", 
        serviceInstanceID: "7d27b156-731a-42b0-8962-f560ffbf9d6f", 
        onLoad: async (instance) => { await instance.render(); }
      };
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda/>}></Route>
          <Route path="/SejarahBatik" element={<SejarahBatik/>}></Route>
          <Route path="/PelestarianBatik" element={<PelestarianBatik/>}></Route>
          <Route path="/Katalog" element={<Katalog/>}></Route>
          <Route path="/katalogBatikTradisional" element={<KatalogBatikTradisional />} />
          <Route path="/katalogBatikModern" element={<KatalogBatikModern/>} />
          <Route path="/Wisata" element={<Wisata/>}></Route>
          <Route path="/WisataJatim" element={<WisataJatim/>}></Route>
          <Route path="/WisataJateng" element={<WisataJateng/>}></Route>
          <Route path="/WisataJabar" element={<WisataJabar/>}></Route>
          <Route path="/Edukasi" element={<Edukasi/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}
  

export default App;
