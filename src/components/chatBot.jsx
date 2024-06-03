import React from 'react';
import ChatbotLogo from '../assets/chatbot.png';

const Chatbot = () => {
  return (
    <div className="flex h-screen mt-28">
      <div className="w-20 bg-[#314E52] flex flex-col items-center py-4">
        <button className="text-white mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col flex-grow items-center justify-center bg-gray-100 pt-16">
        <div className="flex flex-col items-center justify-center mb-8">
          <img
            src={ChatbotLogo}
            alt="Logo"
            className="w-20 h-20 mb-4"
          />
          <p className="text-gray-600 text-lg text-center">
            Apakah ada yang perlu saya bantu hari ini?
          </p>
        </div>

        <div className="w-full fixed bottom-0 left-0 px-8 py-4 bg-white flex items-center shadow-md">
          <input
            type="text"
            placeholder="Tolong carikan saya batik yang berasal dari Jawa Timur"
            className="flex-grow border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-[#314E52]"
          />
          <button className="p-2 rounded-full bg-[#314E52] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
