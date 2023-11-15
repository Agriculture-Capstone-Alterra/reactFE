
import React from 'react';
import MawarPutih from '../../assets/img/mawarputih.jpg';
import './card.module.css';

const Card = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={MawarPutih} className="card-img-top img-style" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-start fw-bold">Mawar Putih</h5>
        <div className="content d-flex justify-content-between">
            <div className='text-center'>
            <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d57a20b-3aa0-4474-9930-00351f168b37?apiKey=40730d6fa7d54ebf8502a6e2d5d2de4d&"
        className="img"
      />
      <div className="">
          <div className="fw-bold">Jenis Tanaman</div>
          <p>Bunga</p>
        </div>
            </div>
            <div className='text-center'>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d57a20b-3aa0-4474-9930-00351f168b37?apiKey=40730d6fa7d54ebf8502a6e2d5d2de4d&"
            className="img"
          />
        <div className="div-3">
          <div className="fw-bold">Teknologi</div>
          <p>Hidroponik</p>
        </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;