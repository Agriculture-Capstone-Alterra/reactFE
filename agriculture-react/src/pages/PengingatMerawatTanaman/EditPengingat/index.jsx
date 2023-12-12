import Layout from "../../../layout/Layout";
import Select from "../../../components/Select";
import Input from "../../../components/Input";
import "./editPengingat.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import axios from "axios";

const editPengingat = () => {
  const [radio, setRadio] = useState("");
  const [selectedTanaman, setSelectedTanaman] = useState("");
  const [hitung, setHitung] = useState(0);
  const [menambah, setMenambah] = useState(0);
  const [selectedTanamanError, setSelectedTanamanError] = useState("");
  const [formData, setFormData] = useState(null);
  const [selectedDay, setSelectedDay] = useState([]);
  const [dateModal, setDateModal] = useState(0);
  const [modalRadio, setModalRadio] = useState("");
  const [tanamanOptions, setTanamanOptions] = useState([]);

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
      crumblink: "/pengingat-tanaman",
    },
    {
      crumbname: "Edit Pengingat Tanaman",
      crumblink: "/pengingat-tanaman/edit-pengingat",
    },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedTanaman(selectedOption.value);
  };

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  const handleModalRadio = (e) => {
    setModalRadio(e.target.value);
  };

  const plus = (e) => {
    e.preventDefault();
    setHitung(hitung + 1);
  };

  const minus = (e) => {
    e.preventDefault();
    if (hitung > 0) {
      setHitung((prev) => prev - 1);
    }
  };

  const atas = (e) => {
    e.preventDefault();
    setMenambah((prev) => prev + 1);
  };

  const bawah = (e) => {
    e.preventDefault();
    if (menambah > 0) {
      setMenambah((prev) => prev - 1);
    }
  };

  const handleCostumPengulangan = (e) => {
    e.preventDefault();
  };

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

  const handleDateModal = (e) => {
    setDateModal(e.target.value);
  };

  const handleSimpan = (e) => {
    e.preventDefault();
  };
  // handleDone
  const handleDone = () => {
    setFormData({
      ulangiSetiap: menambah,
      ulangiHari: selectedDay,
    });
  };
  // Get API
  useEffect(() => {
    const fetchNamaTanaman = async () => {
      try {
        const response = await axios.get(
          "https://6575b5f4b2fbb8f6509d68ad.mockapi.io/namatanaman"
        );
        const mappedData = response.data.map((value) => ({
          label: value.name,
          value: value.id,
        }));

        setTanamanOptions(mappedData);
      } catch (error) {
        console.error("Error fetching tanaman data:", error);
      }
    };

    fetchNamaTanaman();
  }, []);
  return (
    <>
      <Layout
        pagetitle={"Pengingat Tanaman"}
        breadcrumbs={breadcrumbsobjectexample}>
        <form className="container ms-3 mt-4" onSubmit={handleSimpan}>
          <div className="mb-4">
            <label className="editPengingat-label d-flex mb-2">
              Jenis Tanaman
            </label>
            <Select
              value={selectedTanaman}
              className={"form-select editPengingat-select"}
              options={tanamanOptions}
              title={"Pilih nama tanaman"}
              onChange={handleSelectChange}
            />
          </div>
          <div className="mb-4">
            <label className="editPengingat-label d-flex mb-2">
              Nama Pengingat Tanaman
            </label>
            <input
              value={radio}
              className={"editPengingat-Input form-control"}
              required
            />
            <div className="d-flex gap-5 mt-3">
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  id={"penyiramanRadioEdit"}
                  name="flexRadioDefault"
                  value="Penyiraman"
                  onChange={handleRadioChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="penyiramanRadioEdit">
                  Penyiraman
                </label>
              </div>
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  id={"pemupukanRadioEdit"}
                  name="flexRadioDefault"
                  value="Pemupukan"
                  onChange={handleRadioChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="pemupukanRadioEdit">
                  Pemupukan
                </label>
              </div>
            </div>
          </div>
          <label className="editPengingat-label d-flex mb-2">Waktu</label>
          <div className="d-flex gap-3 mb-1">
            <input
              type={"date"}
              className={"editPengingat-date form-control"}
              required
            />
            <input
              type={"time"}
              className={"editPengingat-time form-control"}
              required
            />
            <input
              type={"time"}
              className={"editPengingat-time form-control"}
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
              {formData.ulangiHari?.join(", ")} {modalRadio} {hitung} Kali
            </p>
          )}
          <button
            className="btn btn-outline-primary editPengingat-kustom"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap"
            onClick={handleCostumPengulangan}>
            Kustom Pengulangan
          </button>
          <div className="d-flex justify-content-center mt-5">
            <Link
              to="/pengingat-tanaman"
              className={"btn me-3 editPengingat-btnOutline"}>
              Batal
            </Link>
            <button
              type="submit"
              className="btn btn-success editPengingat-btnPrimary">
              Simpan
            </button>
          </div>
        </form>
        {/* Modal Form */}
        <div className="modal fade " id="exampleModal" tabindex="-1">
          <div className="modal-dialog editPengingat-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title text-center editPengingat-modalTitle "
                  id="exampleModalLabel">
                  Kostum Pengulangan
                </h1>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label
                      for="recipient-name"
                      className="col-form-label editPengingat-modalFormLabel">
                      Ulangi Setiap
                    </label>
                    <div className="d-flex gap-1">
                      <input
                        value={menambah}
                        onChange={(e) => setMenambah(e.target.value)}
                        className="form-control editPengingat-modalInputnumber text-center"
                      />
                      <div className="d-flex flex-column gap-2 editPengingat-modalInputnumberControl">
                        <button
                          className="editPengingat-modalControl"
                          onClick={atas}>
                          <SlArrowUp size={8} />
                        </button>
                        <button
                          className="editPengingat-modalControl"
                          onClick={bawah}>
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
                        onChange={(e) => handleCheckboxChangeDay("minggu")}
                      />
                      <label htmlFor="weekday-minggu">M</label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      for="message-text"
                      className="col-form-label editPengingat-modalFormLabel">
                      Berakhir
                    </label>
                    <div className="mt-3">
                      <div className="form-check">
                        <Input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="Tidak Pernah"
                          id={"tidakPernah"}
                          onChange={handleModalRadio}
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
                            type="radio"
                            id={"berlakuSampai"}
                            name="flexRadioDefault"
                            value="Berlaku Sampai"
                            onChange={handleModalRadio}
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
                      <div className="d-flex editpPengingat-modalGap mt-2">
                        <div className="form-check  mt-2">
                          <Input
                            className="form-check-input"
                            type="radio"
                            id={"setelah"}
                            name="flexRadioDefault"
                            value="Setelah"
                            onChange={handleModalRadio}
                          />
                          <label htmlFor="setelah" className="form-check-label">
                            Setelah
                          </label>
                        </div>
                        <div className="d-flex gap-1">
                          <input
                            value={hitung}
                            className="form-control editPengingat-modalInputnumber text-center"
                          />
                          <div className="d-flex flex-column gap-2 editPengingat-modalInputnumberControl">
                            <button
                              className="editPengingat-modalControl"
                              onClick={plus}>
                              <SlArrowUp size={8} />
                            </button>
                            <button
                              className="editPengingat-modalControl"
                              onClick={minus}>
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
                  className="btn btn-outline-primary editPengingat-modalFormBtnCancel"
                  data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDone}
                  data-bs-dismiss="modal"
                  className="btn btn-primary editPengingat-modalFormBtnDone">
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

export default editPengingat;
