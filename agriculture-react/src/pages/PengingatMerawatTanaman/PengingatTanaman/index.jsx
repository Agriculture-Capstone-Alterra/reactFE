import Table from "../../../components/Table/Table";
import Layout from "../../../layout/Layout";
import { TbDots } from "react-icons/tb";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import styles from "./style.module.css";
import EditIcon from "../../../assets/icons/edit.svg";
import TrashIcon from "../../../assets/icons/trash.svg";

const PengingatTanaman = () => {

    // begin : dummy data untuk breadcrumb
    const breadcrumbsobjectexample = [
        {
            crumblink : "/pengingat-tanaman",
            crumbname : "Pengingat Tanaman",
        },
    ]
    //end : dummy data untuk breadcrumbs
    const headers = [
        "No",
        "Nama Tanaman",
        "Penyiraman",
        "Waktu Penyiraman",
        "Pemberian Pupuk",
        "Waktu Pemberian Pupuk",
        <TbDots className={`fs-4 ms-3`}/>
    ]
    const dataList = [
        {
            id: "T01",
            namaTanaman: "Bayam",
            penyiraman: "2 Hari Sekali",
            waktuPenyiraman: "17.00",
            pemberianPupuk: "10 Hari Sekali",
            waktuPemberianPupuk: "17.00",
        },
        {
            id: "T02",
            namaTanaman: "Cabe",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "22 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T03",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T04",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T05",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T06",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T07",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T08",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T09",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T10",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T11",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T12",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
        {
            id: "T13",
            namaTanaman: "Kol",
            penyiraman: "3 Hari 2 Kali",
            waktuPenyiraman: "05.00/06.00",
            pemberianPupuk: "25 Hari Sekali",
            waktuPemberianPupuk: "05.00",
        },
    ]
    return ( 
        <>
            <Layout pagetitle={"Pengingat Tanaman"} breadcrumbs={breadcrumbsobjectexample}>
                <div className="ps-3 pe-3">
                    <div className="card">
                        <div className="card-body">
                            <Table headers={headers}>
                                {
                                    dataList.length > 0 ? 
                                    dataList.map((item, key) => (
                                        <tr key={key}>
                                            <td>{key+1}</td>
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
                                    : 
                                    <p>data tidak ada</p>
                                }
                            </Table>
                            <div className="d-flex justify-content-center mt-3 gap-2">
                                <button className={`btn d-flex align-items-center justify-content-around ${styles.btnPagination}`}>
                                    <FaChevronLeft className="me-2 pt-1" />
                                    <span className={`${styles.paginationButtonText}`}>Prev</span>
                                </button>
                                <button className={`btn d-flex align-items-center justify-content-around ${styles.btnPagination}`}>
                                    <span className={`${styles.paginationButtonText}`}>Next</span>
                                    <FaChevronRight className="ms-2 pt-1" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
     );
}
 
export default PengingatTanaman;