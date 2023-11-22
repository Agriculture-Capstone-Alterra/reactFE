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


// start dokumentasi komponen
// untuk memanggil komponen ini, ketika ingin menampilkan toast notif setelah menyimpan data, lihat contoh berikut :
// <Link
// to={`/pengingat-tanaman`} state={{savedData:true}}> test link </Link> 
// link diatas digunakan untuk contoh navigasi ke halaman komponen ini sambil menampilkan toast notif
// end dokumentasi komponen
const PengingatTanaman = () => {
  const itemsPerPage = 10;
  const [dataList, setDataList] = useState(data);
  const [showToast, setShowToast] = useState(false);
  const location = useLocation();
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const urlState = location.state;
    if (urlState && urlState.savedData) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [location.state]);

  const headers = [
    'No',
    'Nama Tanaman',
    'Penyiraman',
    'Waktu Penyiraman',
    'Pemberian Pupuk',
    'Waktu Pemberian Pupuk',
    <TbDots className={`fs-4 ms-3`} />
  ];

  const crumbs = [
    { crumblink: '/pengingat-tanaman', crumbname: 'Pengingat Tanaman' }
  ];

  return (
    <>
      <Layout pagetitle={'Pengingat Tanaman'} breadcrumbs={crumbs}>
        <div className="container-fluid">
          <div className="ps-3 pe-3">
            <div className={`card ps-4 pe-4 ${styles.customCard}`}>
              <div className="card-body">
                <div className={`d-flex justify-content-between align-items-center pb-4 pt-4`}>
                  <p className={`fonts20 fontw600 mb-0`}>Pengingat Tanaman</p>
                  <button
                    className={`fonts16 btn btn-success btn-sm fw-light d-flex align-items-center ${styles.btnPrimary}`}
                  >
                    <BsPlus fontSize={16} className="mr-2 mt-1" /> Tambah Data
                  </button>
                </div>
                <Table headers={headers}>
                  {currentData.length > 0 ? (
                    currentData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.number}</td>
                        <td>{item.namaTanaman}</td>
                        <td>{item.penyiraman}</td>
                        <td>{item.waktuPenyiraman}</td>
                        <td>{item.pemberianPupuk}</td>
                        <td>{item.waktuPemberianPupuk}</td>
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
                {/* Pagination component */}
                <Pagination
                  dataList={dataList}
                  itemsPerPage={itemsPerPage}
                  setCurrentData={setCurrentData}
                  numberingData={true}
                />
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default PengingatTanaman;
