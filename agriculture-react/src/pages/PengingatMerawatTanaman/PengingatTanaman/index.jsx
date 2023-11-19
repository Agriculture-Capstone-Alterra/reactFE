import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import Table from "../../../components/Table/Table";
import Layout from "../../../layout/Layout";
import { TbDots, TbRuler } from "react-icons/tb";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import styles from "./style.module.css";
import EditIcon from "../../../assets/icons/edit.svg";
import TrashIcon from "../../../assets/icons/trash.svg";
import data from "./data.js";
import { useLocation } from 'react-router-dom';



// start dokumentasi penggunaan 
{/* 
    <Link
        to={`/pengingat-tanaman`}
        state={{savedData:true}}
    >
        test link
    </Link> 
    agar dapat menampilkan notif toast ketika selesai menambahkan data, gunakan referensi diatas untuk meng trigger
    toast agar ditampilkan ketika sudah menambah data
*/}
// end dokumentasi penggunaan

const PengingatTanaman = () => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [dataList, setDataList] = useState(data);
    const location = useLocation();

    const totalItems = dataList.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = dataList.slice(startIndex, endIndex);

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-left",
        showCloseButton: true,
        showConfirmButton: false,
        icon: null,
        timer: 3000,
        background: "#A7F3D0",
        width: 400,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
    });
      
    useEffect(() => {
        const urlState = location.state;
        console.log(location);
        if (urlState && urlState.savedData) {
            Toast.fire({
                title: "Data tanaman berhasil ditambahkan"
            }).then(() => {
                window.history.replaceState(null, null, window.location.pathname);
            });
        }
    }, []);
    

      const headers = [
          "No",
        "Nama Tanaman",
        "Penyiraman",
        "Waktu Penyiraman",
        "Pemberian Pupuk",
        "Waktu Pemberian Pupuk",
        <TbDots className={`fs-4 ms-3`} />
    ];

    const crumbs = [
        { crumblink: "/pengingat-tanaman", crumbname: "Pengingat Tanaman", }
    ];

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handleEllipsisClick = (direction) => {
        if (direction === 'left' && currentPage > 2) {
            setCurrentPage((prevPage) => prevPage - 2);
        } else if (direction === 'right' && currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 2);
        }
    };

    const generatePageNumbers = () => {
        const pageNumbers = [];
        const totalPagesToShow = Math.min(totalPages, 4);

        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else if (currentPage <= 3) {
            for (let i = 1; i <= Math.min(totalPagesToShow, totalPages); i++) {
                pageNumbers.push(i);
            }
            if (totalPages > totalPagesToShow) {
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        } else if (currentPage > 3 && currentPage <= totalPages - 2) {
            pageNumbers.push(1);
            pageNumbers.push('...');
            for (let i = currentPage - 1; i <= Math.min(currentPage + 1, totalPages); i++) {
                pageNumbers.push(i);
            }
            if (totalPages > currentPage + 1) {
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        } else {
            pageNumbers.push(1);
            pageNumbers.push('...');
            for (let i = Math.max(totalPages - totalPagesToShow + 2, 2); i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    return (
        <>
            <Layout pagetitle={"Pengingat Tanaman"} breadcrumbs={crumbs} >
                <div className="container-fluid">
                    <div className="ps-3 pe-3">
                        <div className={`card ps-4 pe-4 ${styles.customCard}`}>
                            <div className="card-body">
                                <div className={`d-flex justify-content-between align-items-center pb-4 pt-4`}>
                                    <p className={`fs-4 fw-bold mb-0`}>Pengingat Tanaman</p>
                                    <button className={`btn btn-success btn-sm fs-5 fw-light d-flex align-items-center ${styles.btnPrimary}`}>
                                        <BsPlus fontSize={26} className="mr-2 mt-1" /> Tambah Data
                                    </button>
                                </div>
                                <Table headers={headers}>
                                    {currentData.length > 0 ? (
                                        currentData.map((item, index) => (
                                            <tr key={startIndex + index}>
                                                <td>{startIndex + index + 1}</td>
                                                <td>{item.namaTanaman}</td>
                                                <td>{item.penyiraman}</td>
                                                <td>{item.waktuPenyiraman}</td>
                                                <td>{item.pemberianPupuk}</td>
                                                <td>{item.waktuPemberianPupuk}</td>
                                                <td>
                                                    <div className="p-2 dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <TbDots className="fw-bold fs-4 ms-1" />
                                                    </div>
                                                    <ul className="dropdown-menu">
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
                                <div className="d-flex justify-content-center mt-4 gap-2">
                                    <button
                                        className={`btn d-flex align-items-center justify-content-around ${styles.btnPagination}`}
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                    >
                                        <FaChevronLeft className="me-2 pt-1" />
                                        <span className={`${styles.paginationButtonText}`}>Prev</span>
                                    </button>
                                    <div className="pagination d-flex">
                                        {generatePageNumbers().map((pageNumber, index) => (
                                            <div
                                                key={index}
                                                className={`btn ${styles.paginationButtonText} ${currentPage === pageNumber && 'active'}`}
                                                onClick={() => (pageNumber === '...' ? null : setCurrentPage(pageNumber))}
                                            >
                                                {pageNumber === '...' ? (
                                                    <div
                                                        className={styles.ellipsis}
                                                        onClick={() => handleEllipsisClick(index === 1 ? 'left' : 'right')}
                                                    >
                                                        ...
                                                    </div>
                                                ) : (
                                                    pageNumber
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className={`btn d-flex align-items-center justify-content-around ${styles.btnPagination}`}
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                    >
                                        <span className={`${styles.paginationButtonText}`}>Next</span>
                                        <FaChevronRight className="ms-2 pt-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default PengingatTanaman;
