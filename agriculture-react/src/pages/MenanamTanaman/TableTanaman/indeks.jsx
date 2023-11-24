import React, { useState } from 'react';
import Table from '../../../components/Table/Table';
import Layout from "../../../layout/Layout";
import Button from '../../../components/Button/Button';
import EditIcon from "../../../assets/icons/EditIcon.svg";
import TrashIcon from "../../../assets/icons/trash.svg";
import { TbDots, TbRuler } from "react-icons/tb";
import './style.css';

const TableTanaman = () => {
  const [OpenForm, setOpenForm, setCloseForm] = useState(true);

  const handleEdit = (id) => {
    console.log(`Edit button clicked for ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete button clicked for ID ${id}`);
  };

  const crumbs = [
    { crumblink: "/menanam-tanaman", crumbname: "Menanam Tanaman", }
    ];

  const tableHeaders = ["No", "Nama Tanaman", "Jenis Tanaman", "Varietas", "Teknologi", ""];

  const tableChildren = (
    <>
    
      <tr>
        <td>1</td>
        <td>Tomat</td>
        <td>Buah</td>
        <td>Ratna</td>
        <td>Hidroponic</td>
        <td>
        <div className="p-2 dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <TbDots className="fw-bold fs-4 ms-1" />
        </div>
        <ul className="dropdown-menu">
            <div className='dropdown-menu-item'>
            
             <li className="d-grid mb-2 ps-3 pe-3">
                <button className={`btn ${styles.btnAction}`} style={{ display: 'flex', alignItems: 'center' }}>
                <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                    <span>Edit</span>
                </button>
            </li>
            <li className="d-grid mb-2 ps-3 pe-3">
                <button className={`btn ${styles.btnAction}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={TrashIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
                    <span>Hapus</span>
                </button>
            </li>
            </div>
        </ul>

        </td>
      </tr>
      
    </>
  );

  return (
    <>
    <Layout pagetitle={"Pengingat Tanaman"} breadcrumbs={crumbs} >
        <div>
                <div className='table'>
                    <div className='table-list'>
                    <span className="table-text-title">List Tanaman</span>
                    <Button
                        onClick={() => console.log('Tambah Tanaman clicked')} // You can handle "Tambah Tanaman" click here
                        type="button"
                        className="tambah-tanaman"
                    >
                        + Tambah Tanaman
                    </Button>
                    </div>
                    <Table headers={tableHeaders}>
                    {tableChildren}
                    </Table>
                </div>
        </div>
    </Layout>
    </>
  );
};

export default TableTanaman;
