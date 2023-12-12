import Layout from "../../../layout/Layout";
import Select from "../../../components/Select";
import "./tambahPengingat.css";
import styles from "../../../components/Modal/styles.module.css";
import Input from "../../../components/Input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import ModalTrigger from "../../../components/Modal/ModalTrigger";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import axiosWithAuth from "../../../api/axios";

const tambahPengingat = () => {
  const [radio, setRadio] = useState("");
  const [modalRadio, setModalRadio] = useState("");
  // const [selectedTanaman, setSelectedTanaman] = useState("");
  const [selectedHari, setSelectedHari] = useState("");
  const [tipeTanaman, setTipeTanaman] = useState([]);
  const [expirationActive, setExpirationActive] = useState("none");
  const [formData, setFormData] = useState({
    expiration_date: "",
    expiration_occurence: 0,
    name: "",
    plant_id: null,
    repeat_date: "",
    repeat_days: [],
    repeat_in: 0,
    repeat_in_unit: "daily",
    schedule_type: "",
    begin_date: "",
    daily_occurence:[],
  });
  const [formError, setFormError] = useState({
    expiration_date: "",
    expiration_occurence: "",
    name: "",
    plant_id: "",
    repeat_date: "",
    repeat_days: "",
    repeat_in: "",
    repeat_in_unit: "",
    schedule_type: "",
    begin_date: "",
    daily_occurence: "",
  });

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

  useEffect(() => {
    axiosWithAuth("https://service.api-agriplant.xyz/plants")
      .then((res) => {
        const plantTypeDataRes = res.data.data;
        let plantTypeData = plantTypeDataRes.map((value) => ({
          label: value.name,
          value: value.id,
        }));
        setTipeTanaman(plantTypeData);
      })
      .catch((err) => {
        alert('got some error, check at console');
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const namaHari = [
    {
      label: "Hari",
      value: "daily",
    },
    {
      value: "Minggu",
      label: "weekly",
    },
    {
      label: "Bulan",
      value: "monthly",
    },
    {
      label: "Tahun",
      value: "year",
    },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({...formData, [name]: value});
  }
  const handleCheckboxChange = (e) => {
    const day = e.target.getAttribute("data-day");
    const isChecked = e.target.checked;
    setFormData((prevFormData) => {
      if (isChecked) {
        return { ...prevFormData, repeat_days: [...prevFormData.repeat_days, day] };
      } else {
        return { ...prevFormData, repeat_days: prevFormData.repeat_days.filter(item => item !== day) };
      }
    });
  };

  const handleExpirationType = (e) => {
    const value = e.target.value;
    switch(value){
      case "none": {
        setExpirationActive("none");
        break;
      };
      case "date": {
        setExpirationActive("date");
        break;
      };
      case "occurence": {
        setExpirationActive("occurence");
        break;
      };
    }
    setFormData({
      ...formData,
      expiration_date:"",
      expiration_occurence: 0,
    });
  }

  const handleSelectHari = (selectedOption) => {
    setSelectedHari(selectedOption.value);
  };
  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };
  const handleRadioModal = (e) => {
    setModalRadio(e.target.value);
  };

  const increment = (e, field) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [field]: parseInt(formData[field], 10) + 1
    });
  };
  
  const decrement = (e, field) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [field]: parseInt(formData[field], 10) > 0 ? parseInt(formData[field], 10) - 1 : 0
    });
  };

  const formValidate = () => {
    const errors = {};
  
    if (!formData.begin_date) {
      errors.begin_date = "Tanggal Mulai Tidak Boleh Kosong";
    }
  
    if (!formData.name) {
      errors.name = "Nama pengingat tidak boleh kosong";
    }
  
    if (!formData.plant_id) {
      errors.plant_id = "Pilih tanaman";
    }
  
    if (!formData.schedule_type) {
      errors.schedule_type = "Pilih jenis pengingat";
    }

    if (formData.repeat_in_unit === "Hari" && formData.repeat_in > 0) {
      if (formData.repeat_days.length !== formData.repeat_in) {
        errors.repeat_days = "Jumlah hari dalam satu minggu tidak sesuai";
      }
    }
    setFormError(errors);
    const isFormValid = Object.keys(errors).every((key) => !errors[key]);
    return isFormValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValidate()){
      axiosWithAuth({
        baseURL:"https://service.api-agriplant.xyz/recommended-schedule",
        method:"POST",
        data:{
          ...formData,
          plant_id: parseInt(formData.plant_id, 10),
          repeat_date: formData.begin_date,
        },
        headers:"Content-Type: application/json",
      }).then((res) => {
        console.log(res);
      }).catch((err) => console.log(err));
    } else {
      console.log(formError);
    }
  }

  const handleKostumPengulangan = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Layout
        pagetitle={"Pengingat Tanaman"}
        breadcrumbs={breadcrumbsobjectexample}>
        <form className="container ms-3 mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="tambahPengingat-label d-flex mb-2">
              Jenis Tanaman
            </label>
            <Select
              value={formData.plant_id}
              className={"form-select tambahPengingat-select"}
              options={tipeTanaman}
              onChange={handleChange}
              name={"plant_id"}
              title={"Pilih nama tanaman"}
            />
            <p className="text-danger">{formError.plant_id}</p>
          </div>
          <div className="mb-4">
            <label className="tambahPengingat-label d-flex mb-2">
              Nama Pengingat Tanaman
            </label>
            <Input
              value={formData.name}
              className={"tambahPengingat-Input form-control"}
              name={"name"}
              onChange={handleChange}
            />
            <p className="text-danger">{formError.name}</p>
            <div className="d-flex gap-5 mt-3">
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  id={"penyiramanRadio"}
                  name="schedule_type"
                  value="siram"
                  onChange={handleChange}
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
                  name="schedule_type"
                  value="pupuk"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="pemupukanRadio">
                  Pemupukan
                </label>
              </div>
            </div>
            <p className="text-danger">{formError.schedule_type}</p>
          </div>
          <label className="tambahPengingat-label d-flex mb-2">Waktu</label>
          <div className="d-flex gap-3 mb-1">
            <Input
              type={"date"}
              className={"tambahPengingat-date form-control"}
              name={"begin_date"}
              value={formData.begin_date}
              onChange={handleChange}
            />
            <Input
              type={"time"}
              className={"tambahPengingat-time form-control"}
              name={"daily_occurence"}
              value={formData.daily_occurence}
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
                        value={formData.repeat_in}
                        className="form-control tambahPengingat-modalInputnumber text-center"
                        name="repeat_in"
                        onChange={handleChange}
                      />
                      <div className="d-flex flex-column gap-2 tambahPengingat-modalInputnumberControl">
                        <button
                          className="tambahPengingat-modalControl"
                          onClick={(e) => increment(e,"repeat_in")}>
                          <SlArrowUp size={8} />
                        </button>
                        <button
                          className="tambahPengingat-modalControl"
                          onClick={(e) => decrement(e,"repeat_in")}>
                          <SlArrowDown size={8} />
                        </button>
                      </div>
                      <Select
                        value={formData.repeat_in_unit}
                        className={"form-select tambahPengingat-modalHari"}
                        options={namaHari}
                        onChange={handleChange}
                        title={"Hari"}
                        name={"repeat_in_unit"}
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
                        data-day="Senin"
                        onChange={handleCheckboxChange}
                        checked={formData.repeat_days.includes("Senin")}
                      />
                      <label htmlFor="weekday-mon">S</label>

                      <input
                        type="checkbox"
                        id="weekday-tue"
                        className="weekday"
                        data-day="Selasa"
                        onChange={handleCheckboxChange}
                        checked={formData.repeat_days.includes("Selasa")}
                      />
                      <label htmlFor="weekday-tue">S</label>

                      <input
                        type="checkbox"
                        id="weekday-wed"
                        className="weekday"
                        data-day="Rabu"
                        onChange={handleCheckboxChange}
                        checked={formData.repeat_days.includes("Rabu")}
                      />
                      <label htmlFor="weekday-wed">R</label>

                      <input
                        type="checkbox"
                        id="weekday-thu"
                        className="weekday"
                        data-day="Kamis"
                        onChange={handleCheckboxChange}
                        checked={formData.repeat_days.includes("Kamis")}
                      />
                      <label htmlFor="weekday-thu">K</label>

                      <input
                        type="checkbox"
                        id="weekday-fri"
                        className="weekday"
                        data-day="Jumat"
                        onChange={handleCheckboxChange}
                        checked={formData.repeat_days.includes("Jumat")}
                      />
                      <label htmlFor="weekday-fri">J</label>

                      <input
                        type="checkbox"
                        id="weekday-sat"
                        className="weekday"
                        data-day="Sabtu"
                        onChange={handleCheckboxChange}
                        checked={formData.repeat_days.includes("Sabtu")}
                      />
                      <label htmlFor="weekday-sat">S</label>

                      <input
                        type="checkbox"
                        id="weekday-sun"
                        className="weekday"
                        data-day="Minggu"
                        onChange={handleCheckboxChange}
                        checked={formData.repeat_days.includes("Minggu")}
                      />
                      <label htmlFor="weekday-sun">M</label>
                    </div>
                    <p className="text-danger">{formError.repeat_days}</p>
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
                          id={"radioTidakPernah"}
                          name="flexRadioDefault"
                          value="none"
                          onChange={handleExpirationType}
                          checked={expirationActive == "none" ? true : false}
                        />
                        <label className="form-check-label" htmlFor="radioTidakPernah">Tidak Pernah</label>
                      </div>
                      <div className="d-flex gap-3">
                        <div className="form-check  mt-2">
                          <Input
                            className="form-check-input"
                            type="radio"
                            id={"radioBerlakuSampai"}
                            name="flexRadioDefault"
                            value="date"
                            onChange={handleExpirationType}
                            checked={expirationActive == "date" ? true : false}
                          />
                          <label className="form-check-label" htmlFor="radioBerlakuSampai">
                            Berlaku Sampai
                          </label>
                        </div>
                        <div>
                          <Input 
                            type={"date"}
                            disabled={expirationActive == "date" ? false : true}
                            value={formData.expiration_date}
                            onChange={handleChange}
                            name={"expiration_date"}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex tambahpPengingat-modalGap mt-2">
                        <div className="form-check  mt-2">
                          <Input
                            className="form-check-input"
                            type="radio"
                            id={"radioSetelah"}
                            name="flexRadioDefault"
                            value="occurence"
                            onChange={handleExpirationType}
                            checked={expirationActive == "occurence" ? true : false}
                          />
                          <label className="form-check-label" htmlFor="radioSetelah">Setelah</label>
                        </div>
                        <div className="d-flex gap-1">
                          <input
                            value={formData.expiration_occurence}
                            className="form-control tambahPengingat-modalInputnumber text-center"
                            name="expiration_occurence"
                            onChange={handleChange}
                            disabled={expirationActive == "occurence" ? false : true}
                          />
                          <div className="d-flex flex-column gap-2 tambahPengingat-modalInputnumberControl">
                            <button
                              className="tambahPengingat-modalControl"
                              onClick={(e) => increment(e,"expiration_occurence")}
                              disabled={expirationActive == "occurence" ? false : true}
                              >
                              <SlArrowUp size={8} />
                            </button>
                            <button
                              className="tambahPengingat-modalControl"
                              onClick={(e) => decrement(e,"expiration_occurence")}
                              disabled={expirationActive == "occurence" ? false : true}>
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
                  className="btn btn-primary tambahPengingat-modalFormBtnDone"
                  data-bs-dismiss="modal">
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
