import { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import Table from "../../../components/Table/Table";
import styles from "./riwayatMenanam.module.css";
import { MdArrowBackIos, MdArrowForwardIos, MdSearch } from "react-icons/md";
import { FaUsersSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RiwayatMenanam = () => {
  const [dataPengguna, setDataPengguna] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Pagination table
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;

  // Filter data dari search input
  const filteredData = dataPengguna.filter((item) =>
    item.namaPengguna.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Get Dummy data dari mockapi
  useEffect(() => {
    fetchDataPengguna();
  }, []);

  const fetchDataPengguna = async () => {
    try {
      const response = await axios.get(
        "https://6554779c63cafc694fe680e6.mockapi.io/tableListPengguna"
      );
      const dataPengguna = response.data;
      setDataPengguna(dataPengguna);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const breadcrumbsobjectexample = [
    {
      crumbname: "Riwayat Menanam",
      crumblink: "/riwayat-menanam",
    },
  ];

  const tableHeaders = [
    "No",
    "Nama Pengguna",
    "Jumlah Tanaman",
    "Terakhir Update",
  ];

  // Set pagination table
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleRowClick = (namaPengguna) => {
    console.log("Row clicked:", namaPengguna);

    //Link ke halaman List Tanaman dari Nama Pengguna
    navigate(`/riwayat-menanam/list-tanaman/`);
  };

  return (
    <div className={styles.riwayatMenanam}>
      <Layout
        pagetitle={"Riwayat Menanam"}
        breadcrumbs={breadcrumbsobjectexample}
      >
        <div>
          <div className="mt-2" style={{ width: "100%" }}>
            <div className={styles.riwayatTable}>
              <div className={styles.riwayatTableHeader}>
                <h4>List Nama Pengguna</h4>
                <div className={styles.riwayatSearchBox}>
                  <MdSearch className={styles.riwayatSearchIcon} />
                  <input
                    className={styles.riwayatSearchInput}
                    type="search"
                    placeholder="Cari Nama Pengguna"
                    aria-label="Search"
                    onChange={handleSearch}
                    value={searchTerm}
                  />
                </div>
              </div>
              {filteredData.length === 0 ? (
                <Table headers={tableHeaders}>
                  <div className={styles.noDataContainer}>
                    <FaUsersSlash className={styles.noDataIcon} />
                    <p>Data Pengguna Belum Tersedia</p>
                  </div>
                </Table>
              ) : (
                <Table headers={tableHeaders}>
                  {currentItems.map((item, index) => (
                    <tr
                      key={index + indexOfFirstItem}
                      onClick={() => handleRowClick(item.namaPengguna)}
                      className={styles.rowClickable}
                    >
                      <td>{index + indexOfFirstItem + 1}</td>
                      <td>{item.namaPengguna}</td>
                      <td>{item.jumlahTanaman}</td>
                      <td>{item.terakhirUpdate}</td>
                    </tr>
                  ))}
                </Table>
              )}
            </div>
          </div>
          <div className={styles.riwayatPagination}>
            <button
              className={styles.riwayatPaginationButton}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdArrowBackIos />
              Prev
            </button>
            {/* <span>{currentPage}</span> */}
            <button
              className={styles.riwayatPaginationButton}
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= filteredData.length}
            >
              Next
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RiwayatMenanam;
