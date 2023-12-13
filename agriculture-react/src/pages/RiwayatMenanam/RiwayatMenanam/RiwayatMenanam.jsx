import { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import Table from "../../../components/Table/Table";
import styles from "./riwayatMenanam.module.css";
import { MdArrowBackIos, MdArrowForwardIos, MdSearch } from "react-icons/md";
import { FaUsersSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../../../api/axios";

const RiwayatMenanam = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Pagination table
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;

  // Filter data dari search input
  const filteredData = usersData.filter((item) =>
    item.user_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // TODO : GET Users Data from API
  const fetchUsersData = async () => {
    try {
      const res = await axiosWithAuth.get("/admin/user-plants/user-list");
      const usersData = res.data.data;
      setUsersData(usersData);
      console.log("users data => ", usersData);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

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

  // Set search table
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Set row click
  const handleRowClick = (user_id, user_name) => {
    // set selected user id to local storage
    localStorage.setItem("selectedUserName", user_name);

    navigate(`/riwayat-menanam/list-tanaman/${user_id}`);
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
                  <tr />
                  <tr>
                    <td colSpan={4}>
                      <div className={styles.noDataContainer}>
                        <FaUsersSlash className={styles.noDataIcon} />
                        <p>Data Pengguna Belum Tersedia</p>
                      </div>
                    </td>
                  </tr>
                </Table>
              ) : (
                <Table headers={tableHeaders}>
                  {currentItems.map((item, index) => (
                    <tr
                      key={index + indexOfFirstItem}
                      onClick={() =>
                        handleRowClick(item.user_id, item.user_name)
                      }
                      className={styles.rowClickable}
                    >
                      <td>{index + indexOfFirstItem + 1}</td>
                      <td>{item.user_name}</td>
                      <td>{item.total_plant}</td>
                      <td>{item.last_update}</td>
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
