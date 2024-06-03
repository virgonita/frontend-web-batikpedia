import React from 'react';

function Popup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md w-3/4 md:w-1/2 p-4">
        <div className="popup-header flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold"><i className="fas fa-filter"></i> Filter</h2>
          <button id="closePopup" onClick={onClose}><i className="fas fa-times"></i></button>
        </div>
        <hr />
        <div className="popup-body">
          <div className="filter-section mb-4">
            <h3 className="text-xl font-semibold">Hapus Semua</h3>
            <button className="bg-gray-700 text-white rounded-md p-2" onClick={() => console.log('clearFilters')}>Hapus</button>
          </div>
          <div className="filter-section mb-4">
            <h3 className="text-xl font-semibold">Kategori</h3>
            
            <div className="filter-option dropdown mb-2">
              <button className="dropdown-btn bg-gray-200 rounded-md p-2 w-full text-left">Teknik Pembuatan <i className="fas fa-caret-down"></i></button>
              <div className="dropdown-content hidden">
                <label className="block">
                  <input type="checkbox" className="filter-checkbox" value="Batik Cap (Stempel)" />
                  <span className="ml-2">Batik Cap (Stempel)</span>
                </label>

              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="popup-footer mt-4">
          <button id="applyFilters" className="bg-gray-700 text-white rounded-md p-2" onClick={() => console.log('applyFilters')}>Terapkan</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
