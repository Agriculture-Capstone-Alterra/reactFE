import Layout from "../../../layout/Layout";
import Select from "../../../components/Select";
import Input from "../../../components/Input";
import "./editPengingat.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const editPengingat = () => {
  const [radio, setRadio] = useState("");
  const [selectedTanaman, setSelectedTanaman] = useState("");
  const [pilihHari, setPilihHari] = useState("");
  const [hitung, setHitung] = useState(0);
  const [menambah, setMenambah] = useState(0);

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
      crumblink: "/edit-tanaman",
    },
    {
      crumbname: "Edit Pengingat Tanaman",
      crumblink: "/edit-tanaman",
    },
  ];

  const pilihanHari = [
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

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  const handleModalRadio = (e) => {
    setPilihHari(e.target.value);
  };

  const handlePilihHari = (selectedOption) => {
    setPilihHari(selectedOption.value);
  };

  const plus = (e) => {
    e.preventDefault();
    setHitung(hitung + 1);
  };

  const minus = (e) => {
    e.preventDefault();
    setHitung(hitung > 0 ? hitung - 1 : 0);
  };

  const atas = (e) => {
    e.preventDefault();
    setMenambah(menambah + 1);
  };

  const bawah = (e) => {
    e.preventDefault();
    setMenambah(menambah > 0 ? menambah - 1 : 0);
  };

  return (
    <>
      <Layout
        pagetitle={"Pengingat Tanaman"}
        breadcrumbs={breadcrumbsobjectexample}>
        <form className="container ms-3 mt-4">
          <div className="mb-4">
            <label className="editPengingat-label d-flex mb-2">
              Jenis Tanaman
            </label>
            <Select
              value={selectedTanaman}
              className={"form-select editPengingat-select"}
              options={namaTanaman}
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
              disabled={true}
              className={"editPengingat-Input form-control"}
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
          <label className="editPengingat-label d-flex mb-2">Waktu</label>
          <div className="d-flex gap-3 mb-1">
            <Input
              type={"date"}
              className={"editPengingat-date form-control"}
            />
            <Input
              type={"time"}
              className={"editPengingat-time form-control"}
            />
          </div>
          <button
            className="btn btn-outline-primary editPengingat-kustom"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap">
            Kustom Pengulangan
          </button>
          <div className="d-flex justify-content-center mt-5">
            <Link
              to="/pengingat-tanaman"
              className={"btn me-3 editPengingat-btnOutline"}>
              Batal
            </Link>
            <Link to="" className="btn btn-success editPengingat-btnPrimary">
              Simpan
            </Link>
          </div>
        </form>
        {/* modal */}
        <div
          className="modal fade editPengingat-modal"
          id="exampleModal"
          tabindex="-1">
          <div className="modal-dialog">
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
                      <Select
                        value={pilihHari}
                        className={"form-select editPengingat-modalHari"}
                        options={pilihanHari}
                        onChange={handlePilihHari}
                        title={"Hari"}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      for="message-text"
                      className="col-form-label editPengingat-modalFormLabel">
                      Ulangi Setiap Hari
                    </label>
                    <input className="form-control" id="message-text" />
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
                          onChange={handleModalRadio}
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
                            onChange={handleModalRadio}
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
                      <div className="d-flex editpPengingat-modalGap mt-2">
                        <div className="form-check  mt-2">
                          <Input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            value="Setelah"
                            onChange={handleModalRadio}
                          />
                          <label className="form-check-label">Setelah</label>
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
