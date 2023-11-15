import React, { useState } from 'react';
import './info-card.module.css';

function InfoCard({ title, content, initialCollapsed = true }) {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="card p-2">
      <div className="d-flex justify-content-around font-style" onClick={handleCollapse}>
        <h6>{title}</h6>
        <h6>{isCollapsed ? '+' : '-'}</h6>
      </div>
      {!isCollapsed && (
        <div className="mx-auto info-card-content">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default InfoCard;

// Penggunaan di komponen lain
// const myInfoCardContent = [
//   "Disarankan menggunakan benih bersertifikat...",
//   "Perkecambahan benih yang rendah atau laju pembibitan...",
//   "Pemupukan dan/atau Irigasi yang tidak memadai...",
//   "Langkah-langkah pengendalian bahan kimia diizinkan hanya...",
//   "Rotasi tanaman dapat diterapkan untuk mengendalikan beberapa penyakit."
// ];

// <InfoCard
//   title="Informasi Penanganan Hama"
//   content={myInfoCardContent}
//   initialCollapsed={false} // Optional, defaults to true
// />
