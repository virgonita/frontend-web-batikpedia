import React, { useState, useEffect } from 'react';
import { fetchData } from '../api'; 

function KontenMembatik() {
  const [kontenMembatik, setKontenMembatik] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchKontenMembatik = async () => {
      try {
        const data = await fetchData('http://localhost:5000/api/kontenmembatik'); 
        setKontenMembatik(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchKontenMembatik();
  }, []);

  const playVideo = (id) => {
    if (currentVideo) {
      currentVideo.pause(); 
    }
    const video = document.getElementById(`video-${id}`);
    setCurrentVideo(video);
    video.play();
  };

  useEffect(() => {
    const handleVideoEnd = () => {
      setCurrentVideo(null); 
    };

    if (currentVideo) {
      currentVideo.addEventListener('ended', handleVideoEnd);
      return () => {
        currentVideo.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentVideo]);

  return (
    <section id="konten" className="mt-0 px-4 py-20 bg-white shadow-md relative">
      <div className="konten-container">
        <div className="header-konten mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Konten Membatik</h1>
        </div>
        <div className="konten-cards grid grid-cols-1 md:grid-cols-3 gap-6">
          {kontenMembatik.map((konten, index) => (
            <div key={index} className="konten-card bg-[#314E52] rounded-lg p-6 text-white flex flex-col justify-between">
              <div className="konten-info">
                <h2 className="konten-name text-3xl mb-4">{konten.title}</h2>
                <p className="konten-description">{konten.description}</p>
              </div>
              <div className="video-container mt-4">
                <video id={`video-${konten.id}`} controls className="w-full">
                  <source src={`http://localhost:5000${konten.src}`} type="video/mp4" />
                  Browser Anda tidak mendukung tag video atau format file video ini.
                </video>
              </div>
              <p className="text-xs mt-2">Sumber: <a href={konten.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{konten.sourceUrl}</a></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KontenMembatik;
