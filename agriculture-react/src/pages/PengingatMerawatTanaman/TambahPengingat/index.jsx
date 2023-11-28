import Layout from "../../../layout/Layout";
import Select from "../../../components/Select";
import "./tambahPengingat.css";
import styles from "../../components/Modal/styles.module.css";
import { useState } from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import ModalTrigger from "../../components/Modal/ModalTrigger";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const tambahPengingat = () => {
  const [radio, setRadio] = useState("");
  const [modalRadio, setModalRadio] = useState("");
  const [selectedTanaman, setSelectedTanaman] = useState("");
  const [selectedHari, setSelectedHari] = useState("");
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const breadcrumbsobjectexample = [
    {
      crumbname: "Pengingat Menanam Tanaman",
      crumblink: "/tambah-pengingat",
    },
    {
      crumbname: "Tambah Pengingat Tanaman",
      crumblink: "/tambah-pengingat",
    },
  ];

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

  const namaHari = [
    {
      label: "Minggu",
      value: "Minggu",
    },
    {
      label: "Senin",
      value: "Senin",
    },
    {
      label: "Selasa",
      value: "Selasa",
    },
    {
      label: "Rabu",
      value: "Rabu",
    },
    {
      label: "Kamis",
      value: "Kamis",
    },
    {
      label: "Jumat",
      value: "Jumat",
    },
    {
      label: "Sabtu",
      value: "Sabtu",
    },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedTanaman(selectedOption.value);
  };

  const handleSelectHari = (selectedOption) => {
    setSelectedHari(selectedOption.value);
  };

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  const handleRadioModal = (e) => {
    setModalRadio(e.target.value);
  };

  const increment = (e) => {
    e.preventDefault();
    setNumber(number + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    setNumber(number > 0 ? number - 1 : 0);
  };

  const tambah = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  const kurang = (e) => {
    e.preventDefault();
    setCounter(number > 0 ? number - 1 : 0);
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
              className={"form-select tambahPengingat-select"}
              options={namaTanaman}
              onChange={handleSelectChange}
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
          {/* modalTrigger */}
          <button
            className="btn btn-outline-primary tambahPengingat-kustom"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap">
            Kustom Pengulangan
          </button>
          <div className="text-center mt-5 d-flex justify-content-center">
            <ModalTrigger
              modalTarget={"tambahData"}
              className={`btn me-3 tambahPengingat-btnOutline ${styles.btnAction}`}
              style={{ display: "flex", alignItems: "center" }}>
              Simpan dan Bagikan
            </ModalTrigger>
            <Link
              to=""
              className="btn btn-success tambahPengingat-btnPrimary ambahPengingat-btnOutline">
              Simpan
            </Link>
          </div>
        </form>
        <Modal
          id="tambahData"
          title="Bagikan Ke Seluruh User"
          content={
            <p className="text-center">
              Apakah anda yakin ingin membagikan ke seluruh user?
            </p>
          }
          submitButtonText={"Ya"}
          cancelButtonText={"Tidak"}
          onCancel={() => {}}
          onSubmit={() => {}}
          type="edit"
        />
        {/* modal */}
        <div
          className="modal fade tambahPengingat-modal"
          id="exampleModal"
          tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title text-center tambahPengingat-modalTitle "
                  id="exampleModalLabel">
                  Kostum Pengulangan
                </h1>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label
                      for="recipient-name"
                      className="col-form-label tambahPengingat-modalFormLabel">
                      Ulangi Setiap
                    </label>
                    <div className="d-flex gap-1">
                      <input
                        value={number}
                        className="form-control tambahPengingat-modalInputnumber text-center"
                      />
                      <div className="d-flex flex-column gap-2 tambahPengingat-modalInputnumberControl">
                        <button
                          className="tambahPengingat-modalControl"
                          onClick={increment}>
                          <SlArrowUp size={8} />
                        </button>
                        <button
                          className="tambahPengingat-modalControl"
                          onClick={decrement}>
                          <SlArrowDown size={8} />
                        </button>
                      </div>
                      <Select
                        value={selectedHari}
                        className={"form-select tambahPengingat-modalHari"}
                        options={namaHari}
                        onChange={handleSelectHari}
                        title={"Hari"}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      for="message-text"
                      className="col-form-label tambahPengingat-modalFormLabel">
                      Ulangi Setiap Hari
                    </label>
                    <input className="form-control" id="message-text" />
                  </div>
                  <div className="mb-3">
                    <label
                      for="message-text"
                      className="col-form-label tambahPengingat-modalFormLabel">
                      Berakhir
                    </label>
                    <div className="mt-3">
                      <div className="form-check">
                        <Input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="Tidak Pernah"
                          onChange={handleRadioModal}
                        />
                        <label className="form-check-label">Tidak Pernah</label>
                      </div>
                      <div className="d-flex gap-3">
                        <div className="form-check  mt-2">
                          <Input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            value="Berlaku sampai"
                            onChange={handleRadioModal}
                          />
                          <label className="form-check-label">
                            Berlaku Sampai
                          </label>
                        </div>
                        <div>
                          <Input type={"date"} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex tambahpPengingat-modalGap mt-2">
                        <div className="form-check  mt-2">
                          <Input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            value="Setelah"
                            onChange={handleRadioModal}
                          />
                          <label className="form-check-label">Setelah</label>
                        </div>
                        <div className="d-flex gap-1">
                          <input
                            value={counter}
                            className="form-control tambahPengingat-modalInputnumber text-center"
                          />
                          <div className="d-flex flex-column gap-2 tambahPengingat-modalInputnumberControl">
                            <button
                              className="tambahPengingat-modalControl"
                              onClick={tambah}>
                              <SlArrowUp size={8} />
                            </button>
                            <button
                              className="tambahPengingat-modalControl"
                              onClick={kurang}>
                              <SlArrowDown size={8} />
                            </button>
                          </div>
                          <span className="mt-2">Kali</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-primary tambahPengingat-modalFormBtnCancel"
                  data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary tambahPengingat-modalFormBtnDone">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default tambahPengingat;
