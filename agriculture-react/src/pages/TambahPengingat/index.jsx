import Layout from "../../layout/Layout";
import Select from "../../components/Select";
import "./tambahPengingat.css";
import { useState } from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const tambahPengingat = () => {
  const [radio, setRadio] = useState("");
  const [selectedTanaman, setSelectedTanaman] = useState("");
  const [isModalOpen, setIsModalOpen] = useState("false");

  const namaTanaman = [
    {
      label: "Bayam",
      value: "Bayam",
    },
    {
      label: "Sawi",
      value: "Sawi",
    },
  ];
  const breadcrumbsobjectexample = [
    {
      crumbname: "Pengingat Menanam Tanaman",
      crumblink: "/tambahPengingat",
    },
    {
      crumbname: "Tambah Pengingat Tanaman",
      crumblink: "/tambahPengingat",
    },
  ];

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  return (
    <>
      <Layout
        pagetitle={"Pengingat Tanaman"}
        breadcrumbs={breadcrumbsobjectexample}>
        <form className="container ms-3 mt-4">
          <div className="mb-4">
            <label className="tambahPengingat-label d-flex mb-2">
              Jenis Tanaman
            </label>
            <Select
              value={selectedTanaman}
              className={"form-select editPengingat-select"}
              options={namaTanaman}
              title={"Pilih nama tanaman"}
            />
          </div>
          <div className="mb-4">
            <label className="tambahPengingat-label d-flex mb-2">
              Nama Pengingat Tanaman
            </label>
            <input
              value={radio}
              disabled={true}
              className={"tambahPengingat-Input form-control"}
            />
            <div className="d-flex gap-5 mt-3">
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Penyiraman"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label">Penyiraman</label>
              </div>
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Pemupukan"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label">Pemupukan</label>
              </div>
            </div>
          </div>
          <label className="tambahPengingat-label d-flex mb-2">Waktu</label>
          <div className="d-flex gap-3 mb-1">
            <Input
              type={"date"}
              className={"tambahPengingat-date form-control"}
            />
            <Input
              type={"time"}
              className={"tambahPengingat-time form-control"}
            />
          </div>
          <p className="btn btn-outline-primary tambahPengingat-kustom">
            Kustom Pengulangan
          </p>
          <div className="text-center mt-5">
            <Link
              to=""
              className="edit btn btn-outline-success me-3 editPengingat-btnOutline">
              Simpan dan Bagikan
            </Link>
            <Link to="" className="btn btn-success tambahPengingat-btnPrimary">
              Simpan
            </Link>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default tambahPengingat;
