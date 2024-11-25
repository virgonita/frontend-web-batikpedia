import React, { useState, useEffect } from 'react';
import AxiosInterceptor from "../utils/AxiosInterceptor";

const MotifBatik = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [motifs, setMotifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData=async ()=>{
    try {
      const data = await AxiosInterceptor("/motifs")
      setMotifs(data)
      setLoading(false)
    }catch (e){
      console.log('Error: ',e)
      setLoading(false)
      setError(e.message)
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMotifs = motifs.filter((motif) =>
    motif.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-0 px-4 py-20 bg-white shadow-md relative">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Motif Batik</h1>
      <div className="relative mb-10 flex items-center justify-center md:justify-start">
        <input
          type="text"
          className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Cari ..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {filteredMotifs.map((motif, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-72">
              <img src={`${process.env.REACT_APP_APIURL}${motif.image}`} alt={motif.name} className="w-full h-48 md:h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">{motif.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotifBatik;
