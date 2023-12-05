  import React, { useState, useEffect } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import axiosWithAuth from '../../../api/axios';
  import Table from '../../../components/Table/Table';
  import Layout from '../../../layout/Layout';
  import EditIcon from '../../../assets/icons/edit.svg';
  import TrashIcon from '../../../assets/icons/trash.svg';
  import { TbDots } from 'react-icons/tb';
  import Pagination from '../../../components/Pagination/Pagination';
  import Filter from '../../../components/Filter';
  import Modal from '../../../components/Modal/Modal';
  import ModalTrigger from '../../../components/Modal/ModalTrigger'; 
  import ToastNotification from '../../../components/ToastNotification/ToastNotification';
  import './style.css';

  const TableTanaman = () => {
    const navigate = useNavigate();
    const itemsPerPage = 10;
    const [plantData, setPlantData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [modalData, setModalData] = useState({});
    const deleteModalName = "deleteDataTanaman";
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosWithAuth.get('/plants');
          console.log('Response Data:', response.data);
          setPlantData(response.data.data);
          setCurrentData(response.data.data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);
    

    const handleEdit = ({id}) => {
      console.log('Edit button clicked for ID ${id}');
      navigate('/menanam-tanaman/edit-tanaman');
    };

    const handleDeleteClick = (data) => {
      setModalData({ ...data });
      setSelectedItemId(data.id);
    };  

    const handleDeleteConfirm = async () => {
      try {
        await axiosWithAuth.delete(`/plants/${selectedItemId}`);
        setPlantData((prevData) => prevData.filter((plant) => plant.id !== selectedItemId));
        setModalData({});
        setShowToast(true);
        setToastMessage("Data tanaman berhasil dihapus");
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    };

    const handleRowClick = () => {
      navigate('/menanam-tanaman/detail-menanam-tanaman');
    };

    const crumbs = [
      {
        crumblink: '/menanam-tanaman',
        crumbname: 'Menanam Tanaman',
      },
      {
        crumblink: '/menanam-tanaman/tambah-tanaman',
        crumbname: 'Tambah Tanaman',
      },
    ];

    const tableHeaders = ['No', 'Nama tanaman', 'Jenis Tanaman', 'Varietas', 'Teknologi', ' '];

    const paginationProps = {
      dataList: currentData,
      itemsPerPage,
      setCurrentData: setPlantData,   
      numberingData: true,
      currentPage,
      setCurrentPage,
    };

    return (
      <>
        <Layout pagetitle={'Menanam Tanaman'} breadcrumbs={crumbs}>
          <div className="page-table">
            <div className="page-table-pagination">
              <div className="table">
                <div className="table-list">
                  <span className="table-text-title">List Tanaman</span>
                  <Link to="/menanam-tanaman/tambah-tanaman" className="tambah-tanaman">
                    + Tambah Tanaman
                  </Link>
                </div>
                <Table headers={tableHeaders}>
                  {plantData.map((plant, index) => (
                      <tr key={index}>
                      <td onClick={() => handleRowClick()}>{plant.id}</td>
                      <td onClick={() => handleRowClick()}>{plant.name}</td>
                      <td onClick={() => handleRowClick()}>{plant.plant_type.name}</td>
                      <td onClick={() => handleRowClick()}>{plant.variety}</td>
                      <td onClick={() => handleRowClick()}>{plant.technology.name}</td>
                      <td>
                          <div className="p-2 dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <TbDots className="fw-bold fs-4 ms-1" />
                          </div>
                          <ul className="dropdown-menu">
                            <li className="d-grid mb-2 ps-3 pe-3">
                              <button
                                className="btn"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                                onClick={() => handleEdit(plant.id)}
                              >
                                <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                                <span>Edit</span>
                              </button>
                            </li>
                            <li className="d-grid mb-2 ps-3 pe-3">
                              <ModalTrigger
                                modalTarget={deleteModalName}
                                className="btn"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                                onClick={(e) => handleDeleteClick(plant, e)}
                              >
                                <img src={TrashIcon} alt="Delete Icon" className="me-2" width="20" height="20" />
                                <span>Hapus</span>
                              </ModalTrigger>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))
                  }
                </Table>
              </div>
              <Pagination {...paginationProps} />
            </div>
            <Filter /> 
          </div>
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
            id={deleteModalName}
            title="Hapus Data Tanaman"
            content={<p className='text-center'>Apakah anda yakin akan menghapus data tanaman?</p>}
            onCancel={() => {}}
            onSubmit={handleDeleteConfirm}
            type="delete"
          />
        </Layout>
      </>
    );
  };

  export default TableTanaman;