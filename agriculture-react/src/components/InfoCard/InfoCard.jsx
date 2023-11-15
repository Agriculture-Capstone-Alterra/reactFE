import React, { useState } from 'react';

function InfoCard(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="card p-2">
      <div className="d-flex justify-content-around font-style" onClick={handleCollapse}>
        <h6>Informasi Penanganan Hama</h6>
        <h6>{isCollapsed ? '+' : '-'}</h6>
      </div>
      {!isCollapsed && (
        <div className="mx-auto info-card-content">
<<<<<<< Updated upstream
          Cara terbaik untuk mengendalikan hama dan penyakit ialah selalu pencegahan daripada intervensi. Penanam bayam harus mempertimbangkan langkah-langkah berikut:
            <li> Disarankan menggunakan benih bersertifikat. Dalam kebanyakan kasus, petani harus memilih hibrida yang memiliki ketahanan terhadap bolting dan Bulai.</li>
            <li> Perkecambahan benih yang rendah atau laju pembibitan yang tidak tepat akan mempercepat efek negatif hama dan penyakit.</li>
            <li> Pemupukan dan/atau Irigasi yang tidak memadai akan mempercepat efek negatif.</li>
            <li> Langkah-langkah pengendalian bahan kimia diizinkan hanya setelah berkonsultasi dengan ahli agronomi berlisensi setempat.</li>
            <li> Rotasi tanaman dapat diterapkan untuk mengendalikan beberapa penyakit.</li>
=======
          {content}
>>>>>>> Stashed changes
        </div>
      )}
    </div>
  );
}

export default InfoCard;
