import React from "react";
import MawarPutih from "../../assets/img/mawarputih.jpg";
import Teknologi from "../../assets/Teknologi.svg";
import jenisTanaman from "../../assets/jenisTanaman.svg";
import "./Card.css";

const Card = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={MawarPutih} className="card-img-top img-style" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-start fw-bold">Mawar Putih</h5>
        <div className="content d-flex justify-content-between">
          <div className="text-center">
            <div className="">
              <div className="fw-bold">Jenis Tanaman</div>
              <img src={jenisTanaman} alt="teknologi" />
              <p>Bunga</p>
            </div>
          </div>
          <div className="text-center">
            <div className="div-3">
              <div className="fw-bold">Teknologi</div>
              <img src={Teknologi} alt="teknologi" />
              <p>Hidroponik</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
