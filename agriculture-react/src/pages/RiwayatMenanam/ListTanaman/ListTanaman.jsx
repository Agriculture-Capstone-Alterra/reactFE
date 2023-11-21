import { useState } from "react";
import Card from "../../../components/Card/Card";
import Layout from "../../../layout/Layout";
import styles from "./ListTanaman.module.css";
import Filter from "../../../components/Filter";

const ListTanaman = () => {
  const cardExample = [
    {
      name: "Tanaman 1",
      date: "12-12-2023",
    },
    {
      name: "Tanaman 2",
      date: "12-12-2024",
    },
    {
      name: "Tanaman 3",
      date: "12-12-2025",
    },
  ];

  const [cards, setCards] = useState(cardExample);

  const breadcrumbsobjectexample = [
    {
      crumbname: "Riwayat Menanam",
      crumblink: "/riwayat-menanam",
    },
    {
      crumbname: "List Tanaman",
      crumblink: "/list-tanaman",
    },
  ];

  return (
    <div className={styles.container}>
      <Layout pagetitle={"List Tanaman"} breadcrumbs={breadcrumbsobjectexample}>
        <div>
          <div className={styles.header}>
            <h4 className={styles.title}>List Tanaman </h4>
          </div>
          <div className={styles.contentContainer}>
            <select
              className={styles.selectBox}
              // onChange={}
              // value={}
            >
              <option value="">Urutkan dalam</option>
              <option value="1">Paling lama</option>
              <option value="2">Paling baru</option>
              <option value="3">A-Z</option>
              <option value="4">Z-A</option>
            </select>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                {cards.map((card, index) => (
                  <Card key={index} name={card.name} />
                ))}
              </div>
              <div className={styles.filter}>
                <Filter />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ListTanaman;
