import React from "react";
import MawarPutih from "../../assets/img/mawarputih.jpg";
import Teknologi from "../../assets/Teknologi.svg";
import jenisTanaman from "../../assets/jenisTanaman.svg";
import "./Card.css";

const Card = () => {
  return (
    <div className="card" style={{ width: "274px" }}>
      <img src={MawarPutih} style={{ height:"184px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-start fw-bold" >Mawar Putih</h5>
        <div className="content d-flex justify-content-between">
          <div className="text-center">
            <div className="">
              <img src={jenisTanaman} style={{ width: "50px", height: "50px" }} alt="teknologi" />
              <div className="fw-bold">Jenis Tanaman</div>
              <p>Bunga</p>
            </div>
          </div>
          <div className="text-center">
            <div className="div-3">
              <img src={Teknologi} style={{ width: "50px", height: "50px" }} alt="teknologi" />
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
