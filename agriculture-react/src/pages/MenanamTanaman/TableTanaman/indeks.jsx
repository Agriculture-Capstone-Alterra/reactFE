import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from '../../../components/Table/Table';
import Layout from '../../../layout/Layout';
import Button from '../../../components/Button/Button';
import EditIcon from '../../../assets/icons/edit.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import { TbDots } from 'react-icons/tb';
import Pagination from '../../../components/Pagination/Pagination';
import Filter from '../../../components/Filter';
import styles from './style.css';
import './style.css';

const TableTanaman = () => {
  const itemsPerPage = 10;
  const [bookData, setBookData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://653f52299e8bd3be29e0431e.mockapi.io/book');
        setBookData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit button clicked for ID ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://653f52299e8bd3be29e0431e.mockapi.io/book/${id}`);
      // After successful delete, update the state to reflect the changes
      setBookData((prevData) => prevData.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
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
    dataList: bookData,
    itemsPerPage,
    setCurrentData,
    numberingData: true,
    currentPage,
    setCurrentPage,
  };

  return (
    <>
      <Layout pagetitle={'Pengingat Tanaman'} breadcrumbs={crumbs}>
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
                {currentData.length > 0 ? (
                  currentData.map((book, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{book.namatanaman}</td>
                      <td>{book.jenistanaman}</td>
                      <td>{book.varietas}</td>
                      <td>{book.teknologi}</td>
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
                              onClick={() => handleEdit(book.id)}
                            >
                              <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                              <span>Edit</span>
                            </button>
                          </li>
                          <li className="d-grid mb-2 ps-3 pe-3">
                            <button
                              className={`btn ${styles.btnAction}`}
                              style={{ display: 'flex', alignItems: 'center' }}
                              onClick={() => handleDelete(book.id)}
                            >
                              <img src={TrashIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                              <span>Hapus</span>
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))
                ) : null}
              </Table>
            </div>
            <Pagination {...paginationProps} />
          </div>
          <Filter />
        </div>
      </Layout>
    </>
  );
};

export default TableTanaman;
