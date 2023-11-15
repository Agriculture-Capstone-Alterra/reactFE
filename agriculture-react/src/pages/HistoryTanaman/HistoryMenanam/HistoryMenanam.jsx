import React from "react";
import Layout from "../../../layout/Layout";
import Table from "../../../components/Table/Table";
import styles from "./HistoryMenanam.module.css";

const HistoryMenanam = () => {
  const breadcrumbsobjectexample = [
    {
      crumbname: "History Tanaman",
      crumblink: "/history-tanaman",
    },
  ];

  // Define headers for the Table component
  const tableHeaders = [
    "No.",
    "Nama Pengguna",
    "Jumlah Tanaman",
    "Terakhir Update",
  ];

  return (
    <Layout
      pagetitle={"History Tanaman"}
      breadcrumbs={breadcrumbsobjectexample}
    >
      {/* begin main content */}
      <div>
        <div
          className="mt-2"
          style={{ width: "800px", height: "400px", marginLeft: "16px" }}
        >
          <div className={`table ${styles.tableListPengguna}`}>
            <h3>List Nama Pengguna</h3>
            <Table
              headers={tableHeaders}
              className="table-container-list-pengguna"
            >
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nabiilah</td>
                <td>7</td>
                <td>5 detik</td>
              </tr>
            </Table>
          </div>
        </div>
      </div>
      {/* end main content */}
    </Layout>
  );
};

export default HistoryMenanam;
