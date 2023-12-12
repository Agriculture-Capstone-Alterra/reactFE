import Layout from "../../../layout/Layout";
import Select from "../../../components/Select";
import "./tambahPengingat.css";
import styles from "../../../components/Modal/styles.module.css";
import Input from "../../../components/Input";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import ModalTrigger from "../../../components/Modal/ModalTrigger";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import axiosWithAuth from "../../../api/axios";
import axios from "axios";

const tambahPengingat = () => {
  const [radio, setRadio] = useState("");
  const [modalRadio, setModalRadio] = useState("");
  const [selectedTanaman, setSelectedTanaman] = useState("");
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState(null);
  const [selectedDay, setSelectedDay] = useState([]);
  const [dateValue, setDateValue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dateModal, setDateModal] = useState(0);
  const [tanamanOptions, setTanamanOptions] = useState([]);
  const navigate = useNavigate();
  const minggu = "minggu";
  console.log(typeof dateModal);

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

  const handleSelectChange = (e) => {
    setSelectedTanaman(e.target.value);
  };

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  const handleRadioModal = (e) => {
    setModalRadio(e.target.value);
  };

  const handleDateModal = (e) => {
    setDateModal(e.target.value);
  };

  const increment = (e) => {
    e.preventDefault();
    setNumber(number + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  const tambah = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  const kurang = (e) => {
    e.preventDefault();

    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const handleKostumPengulangan = (e) => {
    e.preventDefault();
  };
  // Validasi form

  // checkbox hari
  const handleCheckboxChangeDay = (value) => {
    if (selectedDay.includes(value)) {
      setSelectedDay(selectedDay.filter((item) => item !== value));
    } else {
      if (selectedDay.length < 3) {
        setSelectedDay([...selectedDay, value]);
      }
    }
  };

  //getAPI
  useEffect(() => {
    const fetchNamaTanaman = async () => {
      try {
        const response = await axios.get(
          "https://6575b5f4b2fbb8f6509d68ad.mockapi.io/namatanaman"
        );
        setTanamanOptions(response.data);
      } catch (error) {
        console.error("Error fetching tanaman data:", error);
      }
    };

    fetchNamaTanaman();
  }, []);

  // post API
  const handleSimpan = async (e) => {
    e.preventDefault();

    try {
      let postData;
      {
      }
      if (counter) {
        postData = {
          plant_id: selectedTanaman,
          schedule_type: radio,
          repeat_date: `${dateValue}/${startTime}-${endTime}`,
          repeat_in: `${formData.ulangiSetiap}`,
          repeat_in_unit: minggu,
          repeat_days: `${formData.ulangiHari?.join(", ")}`,
          expiration_date: `${modalRadio}`,
          expiration_occurence: `${counter} Kali`,
        };
      } else if (dateModal) {
        postData = {
          plant_id: selectedTanaman,
          schedule_type: radio,
          repeat_date: `${dateValue}/${startTime}-${endTime}`,
          repeat_in: `${formData.ulangiSetiap}`,
          repeat_in_unit: minggu,
          repeat_days: `${formData.ulangiHari?.join(", ")}`,
          expiration_date: `${modalRadio} `,
          expiration_occurence: `${dateModal}`,
        };
      } else {
        postData = {
          plant_id: selectedTanaman,
          schedule_type: radio,
          repeat_date: `${dateValue}/${startTime}-${endTime}`,
          repeat_in: `${formData.ulangiSetiap}`,
          repeat_in_unit: minggu,
          repeat_days: `${formData.ulangiHari?.join(", ")}`,
          expiration_date: `${modalRadio}`,
          expiration_occurence: "",
        };
      }

      const response = await axios.post(
        "https://6575b5f4b2fbb8f6509d68ad.mockapi.io/pengingatanaman",
        postData
      );

      navigate("/pengingat-tanaman");
      console.log("Response:", response.data, dateModal);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDone = () => {
    setFormData({
      ulangiSetiap: number,
      ulangiHari: selectedDay,
    });
  };

  return (
    <>
      <Layout
        pagetitle={"Pengingat Tanaman"}
        breadcrumbs={breadcrumbsobjectexample}>
        <form className="container ms-3 mt-4" onSubmit={handleSimpan}>
          <div className="mb-4">
            <label
              htmlFor="validationDefault04"
              className="tambahPengingat-label d-flex mb-2">
              Jenis Tanaman
            </label>
            <Select
              id={"validationDefault04"}
              value={selectedTanaman}
              className={"form-select tambahPengingat-select"}
              options={tanamanOptions}
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
              className={"tambahPengingat-Input form-control"}
              required
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
            <input
              type={"date"}
              className={"tambahPengingat-date form-control"}
              onChange={(e) => setDateValue(e.target.value)}
              required
            />
            <input
              type={"time"}
              className={"tambahPengingat-time form-control"}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
            <input
              type={"time"}
              className={"tambahPengingat-time form-control"}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          {formData !== null && modalRadio === "Tidak Pernah" && (
            <p className="d-flex tambahPengingat-stateKostumPengingat">
              {formData.ulangiSetiap} Minggu tiap hari{" "}
              {formData.ulangiHari?.join(", ")} Berakhir sampai {modalRadio}
            </p>
          )}
          {formData !== null && modalRadio === "Berlaku Sampai" && (
            <p className="d-flex tambahPengingat-stateKostumPengingat">
              {formData.ulangiSetiap} Minggu tiap hari{" "}
              {formData.ulangiHari?.join(", ")} {modalRadio} {dateModal}
            </p>
          )}
          {formData !== null && modalRadio === "Setelah" && (
            <p className="d-flex tambahPengingat-stateKostumPengingat">
              {formData.ulangiSetiap} Minggu tiap hari{" "}
              {formData.ulangiHari?.join(", ")} {modalRadio} {counter} Kali
            </p>
          )}
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
            <button
              type="submit"
              className="btn btn-success tambahPengingat-btnPrimary ambahPengingat-btnOutline">
              Simpan
            </button>
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
        {/* modal kostum*/}
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
                        onChange={(e) => setNumber(e.target.value)}
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
                      <span className="mt-2">Minggu</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      for="message-text"
                      className="col-form-label editPengingat-modalFormLabel">
                      Ulangi Setiap Hari
                    </label>
                    <div className="weekDays-selector">
                      <input
                        type="checkbox"
                        id="weekday-senin"
                        value="senin"
                        className="weekday"
                        checked={selectedDay.includes("senin")}
                        onChange={() => handleCheckboxChangeDay("senin")}
                      />
                      <label htmlFor="weekday-senin">S</label>
                      <input
                        type="checkbox"
                        id="weekday-selasa"
                        value="senin"
                        className="weekday"
                        checked={selectedDay.includes("selasa")}
                        onChange={() => handleCheckboxChangeDay("selasa")}
                      />
                      <label htmlFor="weekday-selasa">S</label>
                      <input
                        type="checkbox"
                        id="weekday-rabu"
                        value="rabu"
                        className="weekday"
                        checked={selectedDay.includes("rabu")}
                        onChange={() => handleCheckboxChangeDay("rabu")}
                      />
                      <label htmlFor="weekday-rabu">R</label>
                      <input
                        type="checkbox"
                        id="weekday-kamis"
                        value="kamis"
                        className="weekday"
                        checked={selectedDay.includes("kamis")}
                        onChange={() => handleCheckboxChangeDay("kamis")}
                      />
                      <label htmlFor="weekday-kamis">K</label>
                      <input
                        type="checkbox"
                        id="weekday-jumat"
                        value="jumat"
                        className="weekday"
                        checked={selectedDay.includes("jumat")}
                        onChange={() => handleCheckboxChangeDay("jumat")}
                      />
                      <label htmlFor="weekday-jumat">J</label>
                      <input
                        type="checkbox"
                        id="weekday-sabtu"
                        value="sabtu"
                        className="weekday"
                        checked={selectedDay.includes("sabtu")}
                        onChange={() => handleCheckboxChangeDay("sabtu")}
                      />
                      <label htmlFor="weekday-sabtu">S</label>
                      <input
                        type="checkbox"
                        id="weekday-minggu"
                        className="weekday"
                        checked={selectedDay.includes("minggu")}
                        onChange={() => handleCheckboxChangeDay("minggu")}
                      />
                      <label htmlFor="weekday-minggu">M</label>
                    </div>
                  </div>
                  {/* Berakhir */}
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
                          id={"tidakPernah"}
                          type="radio"
                          name="flexRadioDefault"
                          value="Tidak Pernah"
                          onChange={handleRadioModal}
                        />
                        <label
                          htmlFor="tidakPernah"
                          className="form-check-label">
                          Tidak Pernah
                        </label>
                      </div>
                      <div className="d-flex gap-3">
                        <div className="form-check  mt-2">
                          <Input
                            className="form-check-input"
                            id={"berlakuSampai"}
                            type="radio"
                            name="flexRadioDefault"
                            value="Berlaku Sampai"
                            onChange={handleRadioModal}
                          />
                          <label
                            htmlFor="berlakuSampai"
                            className="form-check-label">
                            Berlaku Sampai
                          </label>
                        </div>
                        <div>
                          <Input type={"date"} onChange={handleDateModal} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex tambahpPengingat-modalGap mt-2">
                        <div className="form-check  mt-2">
                          <Input
                            className="form-check-input"
                            id={"setelah"}
                            type="radio"
                            name="flexRadioDefault"
                            value="Setelah"
                            onChange={handleRadioModal}
                          />
                          <label htmlFor="setelah" className="form-check-label">
                            Setelah
                          </label>
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
                  onClick={handleDone}
                  data-bs-dismiss="modal"
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
