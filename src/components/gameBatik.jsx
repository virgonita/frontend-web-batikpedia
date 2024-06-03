import React, { useState } from 'react';
import Game1 from '../assets/Game1.png';
import BatikParang from '../assets/batik1.png'; 
import BatikKawung from '../assets/batik2.png'; 
import BatikMegaMendung from '../assets/batik3.png'; 

const batikData = [
  { name: 'Batik Parang', description: 'Motif parang adalah salah satu motif batik yang sangat terkenal.', image: BatikParang },
  { name: 'Batik Kawung', description: 'Motif kawung memiliki bentuk geometris yang khas.', image: BatikKawung },
  { name: 'Batik Mega Mendung', description: 'Motif mega mendung berasal dari Cirebon dengan bentuk awan yang khas.', image: BatikMegaMendung },
];

const Game = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedBatik, setSelectedBatik] = useState(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showImage, setShowImage] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const selectBatik = (batik) => {
    setSelectedBatik(batik);
    closePopup();
  };

  const checkAnswer = () => {
    if (selectedBatik && answer.toLowerCase() === selectedBatik.name.toLowerCase()) {
      setFeedback(`Selamat! Jawaban kamu benar. ${selectedBatik.description}`);
      setShowImage(true);
    } else {
      setFeedback(`Maaf, jawaban kamu salah. ${selectedBatik.description}`);
      setShowImage(false);
    }
  };

  const nextGame = () => {
    setSelectedBatik(null);
    setAnswer('');
    setFeedback('');
    setShowImage(false);
    openPopup();
  };

  return (
    <section id="game" className="mt-32 p-5 bg-white shadow-lg relative">
      <div className="flex flex-col items-start">
        <div className="mb-5">
          <h1 className="text-2xl font-bold">Konten Membatik</h1>
        </div>
        <div className="flex justify-between w-full mt-5 bg-[#314E52] rounded-lg">
          <div className="p-5">
            <img src={Game1} alt="Game Membatik" className="w-full max-w-full h-auto block rounded-lg" />
          </div>
          <div className="p-5 rounded-lg">
            <h2 className="text-2xl text-white mt-20">Game edukasi tebak motif batik</h2>
            <p className="text-white text-base leading-7 mt-3">
              Ayo jelajahi warisan budaya Indonesia melalui game interaktif kami.
              Klik gambar motif batik dan tunjukkan sejauh mana pengetahuanmu!
              Saksikanlah keindahan tradisi yang tersembunyi di setiap pola,
              dan jadilah bagian dari perjalanan ini untuk memperkaya pemahaman
              akan kekayaan budaya kita.
            </p>
            <button
              className="mt-5 px-5 py-2 bg-white text-[#314E52] rounded"
              onClick={openPopup}
            >
              Mulai Bermain
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Pilih Batik</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {batikData.map((batik, index) => (
                <li key={index} className="mb-2 cursor-pointer" onClick={() => selectBatik(batik)}>
                  <img src={batik.image} alt={`Batik ${index + 1}`} className="w-full h-auto rounded-lg" />
                </li>
              ))}
            </ul>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4" onClick={closePopup}>
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Jawaban */}
      {selectedBatik && (
        <div className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Masukkan jawaban kamu..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border p-2 rounded mr-2"
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={checkAnswer}
          >
            Periksa Jawaban
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={nextGame}
          >
            Tebak Game Selanjutnya
          </button>
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div className="mt-4 flex items-center">
          {showImage && selectedBatik && (
            <img src={selectedBatik.image} alt={selectedBatik.name} className="w-16 h-16 rounded-lg mr-4" />
          )}
          <p>{feedback}</p>
        </div>
      )}
    </section>
  );
};

export default Game;
