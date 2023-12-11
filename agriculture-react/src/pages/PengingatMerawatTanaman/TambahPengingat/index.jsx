import Layout from "../../../layout/Layout";
import Select from "../../../components/Select";
import "./tambahPengingat.css";
import styles from "../../../components/Modal/styles.module.css";
import Input from "../../../components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import ModalTrigger from "../../../components/Modal/ModalTrigger";
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
      crumblink: "/pengingat-tanaman",
    },
    {
      crumbname: "Tambah Pengingat Tanaman",
      crumblink: "/pengingat-tanaman/tambah-pengingat",
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
      label: "Hari",
      value: "Hari",
    },
    {
      value: "Minggu",
      label: "Minggu",
    },
    {
      label: "Bulan",
      value: "Bulan",
    },
    {
      label: "Tahun",
      value: "Tahun",
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

  const handleKostumPengulangan = (e) => {
    e.preventDefault();
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
            <Input
              value={radio}
              disabled={true}
              className={"tambahPengingat-Input form-control"}
            />
            <div className="d-flex gap-5 mt-3">
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  id={"penyiramanRadio"}
                  name="flexRadioDefault"
                  value="Penyiraman"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="penyiramanRadio">
                  Penyiraman
                </label>
              </div>
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  id={"pemupukanRadio"}
                  name="flexRadioDefault"
                  value="Pemupukan"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="pemupukanRadio">
                  Pemupukan
                </label>
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
            data-bs-whatever="@getbootstrap"
            onClick={handleKostumPengulangan}>
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
        {/* modal k*/}
        <div className="modal fade" id="exampleModal" tabindex="-1">
          <div className="modal-dialog tambahPengingat-modal">
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
                    <div className="weekDays-selector">
                      <input
                        type="checkbox"
                        id="weekday-mon"
                        className="weekday"
                      />
                      <label for="weekday-mon">S</label>
                      <input
                        type="checkbox"
                        id="weekday-tue"
                        className="weekday"
                      />
                      <label for="weekday-tue">S</label>
                      <input
                        type="checkbox"
                        id="weekday-wed"
                        className="weekday"
                      />
                      <label for="weekday-wed">R</label>
                      <input
                        type="checkbox"
                        id="weekday-thu"
                        className="weekday"
                      />
                      <label for="weekday-thu">K</label>
                      <input
                        type="checkbox"
                        id="weekday-fri"
                        className="weekday"
                      />
                      <label for="weekday-fri">J</label>
                      <input
                        type="checkbox"
                        id="weekday-sat"
                        className="weekday"
                      />
                      <label for="weekday-sat">S</label>
                      <input
                        type="checkbox"
                        id="weekday-sun"
                        className="weekday"
                      />
                      <label for="weekday-sun">M</label>
                    </div>
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
