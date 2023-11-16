import React from "react";
import Card from "../../../components/Card/Card";
import Layout from "../../../layout/Layout";
import styles from "./ListTanaman.module.css";

const ListTanaman = () => {
  const breadcrumbsobjectexample = [
    {
      crumbname: "List Tanaman",
      crumblink: "/riwayat-menanam",
    },
  ];

  return (
    <div className={styles.container}>
      <Layout pagetitle={"List Tanaman"} breadcrumbs={breadcrumbsobjectexample}>
        <div>
          <div className={styles.header}>
            <h4 className={styles.title}>List Tanaman </h4>
          </div>
          <div className={styles.content}>
            <div className={styles.selectBox}>
              <select
                className="form-select form-select-sm"
                aria-label="Default select example"
              >
                <option selected="">Urutkan dalam</option>
                <option value={1}>Paling lama</option>
                <option value={2}>Paling baru</option>
                <option value={3}>A-Z</option>
                <option value={3}> Z-A</option>
              </select>
            </div>
            <div className={styles.card}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ListTanaman;
