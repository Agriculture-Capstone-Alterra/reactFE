import React, { useState, useEffect } from 'react';
import Table from '../../../components/Table/Table';
import Layout from '../../../layout/Layout';
import { TbDots } from 'react-icons/tb';
import { BsPlus } from 'react-icons/bs';
import styles from './style.module.css';
import EditIcon from '../../../assets/icons/edit.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import { Link, useLocation } from 'react-router-dom';
import ToastNotification from '../../../components/ToastNotification/ToastNotification.jsx';
import Pagination from '../../../components/Pagination/Pagination.jsx';
import Modal from '../../../components/Modal/Modal.jsx';
import ModalTrigger from '../../../components/Modal/ModalTrigger.jsx';
import axios from "axios";
import axiosWithAuth from '../../../api/axios.jsx';
import Swal from 'sweetalert2';


// start dokumentasi komponen
// untuk memanggil komponen ini, ketika ingin menampilkan toast notif setelah menyimpan data, lihat contoh berikut :
// <Link
// to={`/pengingat-tanaman`} state={{savedData:true}}> test link </Link> 
// link diatas digunakan untuk contoh navigasi ke halaman komponen ini sambil menampilkan toast notif
// end dokumentasi komponen

// mockapi link (temporary)
const mockApiUrl = "https://656c4778e1e03bfd572e2309.mockapi.io/";
const PengingatTanaman = () => {
  const itemsPerPage = 5;
  const [dataPenyiramanList, setDataPenyiramanList] = useState([]);
  const [currentDataPenyiraman, setCurrentDataPenyiraman] = useState([]);
  const [dataPemupukanList, setDataPemupukanList] = useState([]);
  const [currentDataPemupukan, setCurrentDataPemupukan] = useState([]);
  const [modalData, setModalData] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [mockData, setMockData] = useState([]);
  const location = useLocation();
  const modalName = "deleteData";

  useEffect(() => {
    const urlState = location.state;
    if (urlState && urlState.savedData) {
      setToastMessage("Data tanaman berhasil ditambahkan");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [location.state]);

  useEffect(() => {
    Swal.fire({
      toast: true,
      position: 'bottom-left',
      showConfirmButton: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      text:"Sedang mendapatkan data tanaman...",
    });
    axiosWithAuth("https://service.api-agriplant.xyz/recommended-schedule")
    .then((res1) => {
      const endpointData = res1.data.data;
      // console.log("Endpoint data : ", endpointData);
      axios("https://6575b5f4b2fbb8f6509d68ad.mockapi.io/pengingatanaman")
        .then((res2) => {
          const rawData = res2.data;
          setMockData(rawData);
          // console.log("mock data : ", rawData);
          // Combine data based on a common identifier, assuming it's "id"
          const combinedData = endpointData?.map((item1) => {
            const correspondingItem = rawData.find((item2) => item2.schedule_id === item1.id);
            // console.log(correspondingItem);
            return { 
              ...item1,
              ...correspondingItem,
              id: item1.id,
            };
          });

          console.log("combined data: ", combinedData);

          const penyiramanList = combinedData?.filter((item) => item.schedule_type === 'siram');
          const pemupukanList = combinedData?.filter((item) => item.schedule_type === 'pupuk');

          setDataPenyiramanList(penyiramanList||[]);
          setDataPemupukanList(pemupukanList||[]);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          Swal.close();
        });
    })
    .catch((err) => console.log(err));
    
  }, []);

  const headers = [
    'No',
    'Jenis Tanaman',
    'Nama Pengingat',
    'Waktu',
    'pengulangan',
    '',
  ];

  const crumbs = [
    { crumblink: '/pengingat-tanaman', crumbname: 'Pengingat Tanaman' }
  ];

  const handleDeleteClick = (data) => {
    setModalData({ ...data });
  }

  const executeDelete = (item) => {
    
    // const mockItem = mockData.find((mock) => mock.schedule_id === item.id);
    // console.log('endpoint item : ', item);
    // console.log('mockitem: ', mockItem);
    axiosWithAuth({
      baseURL: `https://service.api-agriplant.xyz/recommended-schedule/${item.id}`,
      method: "delete",
    })
      .then((response) => {
        console.log("deleted from endpoint : ", response);
  
        // Find the corresponding item in mockData based on schedule_id
        const mockItem = mockData.find((mock) => mock.schedule_id === item.id);
  
        axios({
          baseURL: `https://6575b5f4b2fbb8f6509d68ad.mockapi.io/pengingatanaman/${mockItem.id}`,
          method: "delete",
        })
          .then((response) => {
            if(item.schedule_type == "siram"){
              const updatedData = dataPenyiramanList.filter((dataItem) => dataItem.id !== item.id);
              setDataPenyiramanList(updatedData);
            } else {
              const updatedData = dataPemupukanList.filter((dataItem) => dataItem.id !== item.id);
              setDataPemupukanList(updatedData);
            }
            setModalData({});
            setToastMessage('Data Berhasil dihapus');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
          })
          .catch((err) => {
            alert('got error, check console');
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };
  const getPengulangan = (days, until, repeat_in) => {
    let finalString;
    if(days == "" && repeat_in == 0){
      finalString = "Ulangi setiap hari";
    } else {
      const untilDate = until === "" ? "" : ", sampai " + until;
      const mingguCount = repeat_in > 0 ? repeat_in + " minggu sekali " : " minggu ";
      const hariCount = days ? ", pada hari " + days : "";
      finalString = "Setiap " +  mingguCount + hariCount + untilDate;
      const maxLength = 100;
      if (finalString.length > maxLength) {
        finalString = finalString.substring(0, maxLength - 3) + "...";
      }
    }
    return finalString;
  }
  return (
    <>
      <Layout pagetitle={'Pengingat Tanaman'} breadcrumbs={crumbs}>
          {/* table penyiraman */}
          <div className="ps-3 pe-3">
            <div className={`ps-4 pe-4 pb-4 ${styles.customCard}`}>
              <div className="card-body">
                <div className={`d-flex justify-content-between align-items-center pb-4 pt-4`}>
                  <p className={`fonts24 fontw600 mb-0`}>Data Penyiraman Tanaman</p>
                  <Link to='/pengingat-tanaman/tambah-pengingat'
                    className={`fonts16 btn btn-success btn-sm fw-light d-flex align-items-center ${styles.btnPrimary}`}
                  >
                    <BsPlus fontSize={20} className="mr-2 mt-0" /> Tambah Data
                  </Link>
                </div>
                <Table headers={headers}>
                  {currentDataPenyiraman.length > 0 ? (
                    currentDataPenyiraman.map((item, index) => (
                      <tr key={index}>
                        <td>{item.number}</td>
                        <td>{item.plant.name}</td>
                        <td>{item.name}</td>
                        <td>{item.repeat_date}</td>
                        <td width={"50%"}>
                            {getPengulangan(item.repeat_days, item.expiration_date, item.repeat_in)}
                        </td>
                        <td>
                          <div
                            className="p-2 dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <TbDots className="fw-bold fs-4" />
                          </div>
                          <ul className="dropdown-menu">
                            <li className="d-grid mb-2 ps-3 pe-3">
                              <Link
                                to={`/pengingat-tanaman/edit-pengingat/${item.id}`}
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                              >
                                <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Edit</span>
                              </Link>
                            </li>
                            <li className="d-grid mb-2 ps-3 pe-3">
                              <ModalTrigger
                                modalTarget={modalName}
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                                onClick={() => handleDeleteClick(item)}
                              >
                                <img src={TrashIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Hapus</span>
                              </ModalTrigger>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={headers.length} className="text-center">
                        No data available
                      </td>
                    </tr>
                  )}
                </Table>
              </div>
            </div>
            {/* Pagination component Penyiraman */}
            <Pagination
              dataList={dataPenyiramanList}
              itemsPerPage={itemsPerPage}
              setCurrentData={setCurrentDataPenyiraman}
              numberingData={true}
            />
          </div>
          {/* end table penyiraman */}
          {/* start table pemupukan */}
          <div className="ps-3 pe-3">
            <div className={`ps-4 pe-4 pb-4 ${styles.customCard}`}>
              <div className="card-body">
                <div className={`d-flex justify-content-between align-items-center pb-4 pt-4`}>
                  <p className={`fonts24 fontw600 mb-0`}>Data Pemupukan Tanaman</p>
                  <Link to='/pengingat-tanaman/tambah-pengingat'
                    className={`fonts16 btn btn-success btn-sm fw-light d-flex align-items-center ${styles.btnPrimary}`}
                  >
                    <BsPlus fontSize={20} className="mr-2 mt-0" /> Tambah Data
                  </Link>
                </div>
                <Table headers={headers}>
                  {currentDataPemupukan.length > 0 ? (
                    currentDataPemupukan.map((item, index) => (
                      <tr key={index}>
                        <td>{item.number}</td>
                        <td>{item.plant.name}</td>
                        <td>{item.name}</td>
                        <td>{item.repeat_date}</td>
                        <td>
                            {getPengulangan(item.repeat_days, item.expiration_date, item.repeat_in)}
                        </td>
                        <td>
                          <div
                            className="p-2 dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <TbDots className="fw-bold fs-4 ms-1" />
                          </div>
                          <ul className="dropdown-menu">
                            <li className="d-grid mb-2 ps-3 pe-3">
                              <Link
                                to={`/pengingat-tanaman/edit-pengingat/${item.id}`}
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                              >
                                <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Edit</span>
                              </Link>
                            </li>
                            <li className="d-grid mb-2 ps-3 pe-3">
                              <ModalTrigger
                                modalTarget={modalName}
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                                onClick={() => handleDeleteClick(item)}
                              >
                                <img src={TrashIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Hapus</span>
                              </ModalTrigger>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={headers.length} className="text-center">
                        No data available
                      </td>
                    </tr>
                  )}
                </Table>
              </div>
            </div>
          {/* Pagination component pemupukan */}
          <Pagination
            dataList={dataPemupukanList}
            itemsPerPage={itemsPerPage}
            setCurrentData={setCurrentDataPemupukan}
            numberingData={true}
          />
          </div>
          {/* end table pemupukan */}
      </Layout>
      {/* call ToastNotification component */}
      {showToast && (
        <ToastNotification
          position="bottom-left"
          text={toastMessage}
          onClose={() => {
            setShowToast(false);
            window.history.replaceState(null, null, window.location.pathname);
          }}
        />
      )}
      <Modal
        id={modalName}
        title="Hapus Data Tanaman"
        content={<p className='text-center'>Apakah anda yakin akan mengapus data pengingat?</p>}
        onCancel= {() => {}}
        onSubmit= {() => executeDelete(modalData)}
        type="delete"
      />
    </>
  );
};

export default PengingatTanaman;
