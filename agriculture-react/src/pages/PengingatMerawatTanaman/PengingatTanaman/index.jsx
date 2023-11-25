import React, { useState, useEffect } from 'react';
import Table from '../../../components/Table/Table';
import Layout from '../../../layout/Layout';
import { TbDots } from 'react-icons/tb';
import { BsPlus } from 'react-icons/bs';
import styles from './style.module.css';
import EditIcon from '../../../assets/icons/edit.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import data from './data.js';
import { useLocation } from 'react-router-dom';
import ToastNotification from '../../../components/ToastNotification/ToastNotification.jsx';
import Pagination from '../../../components/Pagination/Pagination.jsx';
import Modal from '../../../components/Modal/Modal.jsx';
import ModalTrigger from '../../../components/Modal/ModalTrigger.jsx';


// start dokumentasi komponen
// untuk memanggil komponen ini, ketika ingin menampilkan toast notif setelah menyimpan data, lihat contoh berikut :
// <Link
// to={`/pengingat-tanaman`} state={{savedData:true}}> test link </Link> 
// link diatas digunakan untuk contoh navigasi ke halaman komponen ini sambil menampilkan toast notif
// end dokumentasi komponen

const PengingatTanaman = () => {
  const itemsPerPage = 5;
  const [dataPenyiramanList, setDataPenyiramanList] = useState(data);
  const [currentDataPenyiraman, setCurrentDataPenyiraman] = useState([]);
  const [dataPemupukanList, setDataPemupukanList] = useState(data);
  const [currentDataPemupukan, setCurrentDataPemupukan] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const urlState = location.state;
    if (urlState && urlState.savedData) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [location.state]);

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

  return (
    <>
      <Layout pagetitle={'Pengingat Tanaman'} breadcrumbs={crumbs}>
          {/* table penyiraman */}
          <div className="ps-3 pe-3">
            <div className={`ps-4 pe-4 pb-4 ${styles.customCard}`}>
              <div className="card-body">
                <div className={`d-flex justify-content-between align-items-center pb-4 pt-4`}>
                  <p className={`fonts24 fontw600 mb-0`}>Data Penyiraman Tanaman</p>
                  <button
                    className={`fonts16 btn btn-success btn-sm fw-light d-flex align-items-center ${styles.btnPrimary}`}
                  >
                    <BsPlus fontSize={20} className="mr-2 mt-0" /> Tambah Data
                  </button>
                </div>
                <Table headers={headers}>
                  {currentDataPenyiraman.length > 0 ? (
                    currentDataPenyiraman.map((item, index) => (
                      <tr key={index}>
                        <td>{item.number}</td>
                        <td>{item.jenisTanaman}</td>
                        <td>{item.namaPengingat}</td>
                        <td>{item.waktu}</td>
                        <td>{item.pengulangan}</td>
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
                              {/* <button
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                              >
                                <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Edit</span>
                              </button> */}
                              <ModalTrigger
                                modalTarget={'editData'}
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                              >
                                <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Edit</span>
                              </ModalTrigger>
                            </li>
                            <li className="d-grid mb-2 ps-3 pe-3">
                              {/* <button
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                              >
                                <img src={TrashIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Hapus</span>
                              </button> */}
                              <ModalTrigger
                                modalTarget={'deleteData'}
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
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
          </div>
          {/* Pagination component Penyiraman */}
          <Pagination
            dataList={dataPenyiramanList}
            itemsPerPage={itemsPerPage}
            setCurrentData={setCurrentDataPenyiraman}
            numberingData={true}
          />
          {/* end table penyiaman */}
          {/* start table pemupukan */}
          <div className="ps-3 pe-3">
            <div className={`ps-4 pe-4 pb-4 ${styles.customCard}`}>
              <div className="card-body">
                <div className={`d-flex justify-content-between align-items-center pb-4 pt-4`}>
                  <p className={`fonts24 fontw600 mb-0`}>Data Penyiraman Tanaman</p>
                  <button
                    className={`fonts16 btn btn-success btn-sm fw-light d-flex align-items-center ${styles.btnPrimary}`}
                  >
                    <BsPlus fontSize={20} className="mr-2 mt-0" /> Tambah Data
                  </button>
                </div>
                <Table headers={headers}>
                  {currentDataPemupukan.length > 0 ? (
                    currentDataPemupukan.map((item, index) => (
                      <tr key={index}>
                        <td>{item.number}</td>
                        <td>{item.jenisTanaman}</td>
                        <td>{item.namaPengingat}</td>
                        <td>{item.waktu}</td>
                        <td>{item.pengulangan}</td>
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
                              <button
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                              >
                                <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Edit</span>
                              </button>
                            </li>
                            <li className="d-grid mb-2 ps-3 pe-3">
                              <button
                                className={`btn ${styles.btnAction}`}
                                style={{ display: 'flex', alignItems: 'center' }}
                              >
                                <img src={TrashIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Hapus</span>
                              </button>
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
          </div>
          {/* Pagination component pemupukan */}
          <Pagination
            dataList={dataPemupukanList}
            itemsPerPage={itemsPerPage}
            setCurrentData={setCurrentDataPemupukan}
            numberingData={true}
          />
          {/* end table pemupukan */}
      </Layout>
      {/* call ToastNotification component */}
      {showToast && (
        <ToastNotification
          position="bottom-left"
          text="Data tanaman berhasil ditambahkan"
          onClose={() => {
            setShowToast(false);
            window.history.replaceState(null, null, window.location.pathname);
          }}
        />
      )}
      <Modal
        id="deleteData"
        title="Hapus Data Tanaman"
        content={<p className='text-center'>Apakah anda yakin akan mengapus data tanaman?</p>}
        onCancel= {() => {}}
        onSubmit= {() => {}}
        type="delete"
      />
      <Modal
        id="editData"
        title="Edit Data"
        content={<p className='text-center'>Apakah anda yakin akan mengedit data tanaman?</p>}
        onCancel= {() => {}}
        onSubmit= {() => {}}
        type="edit"
      />
    </>
  );
};

export default PengingatTanaman;
