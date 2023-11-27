import { useState } from "react";
import Card from "../../../components/Card/Card";
import Layout from "../../../layout/Layout";
import styles from "./ListTanaman.module.css";
import Filter from "../../../components/Filter";
import { useNavigate } from "react-router-dom";
import { PiGrainsSlashFill } from "react-icons/pi";

const ListTanaman = () => {
  const navigate = useNavigate();

  const cardExample = [
    // {
    //   name: "Mawar Putih",
    //   index: 1,
    // },
    // {
    //   name: "Mawar Merah",
    //   index: 2,
    // },
    // {
    //   name: "Anggrek Ungu",
    //   index: 3,
    // },
  ];

  const [cards, setCards] = useState(cardExample);

  const breadcrumbsobjectexample = [
    {
      crumbname: "Riwayat Menanam",
      crumblink: "/riwayat-menanam",
    },
    {
      crumbname: "List Tanaman",
      crumblink: "/riwayat-menanam/list-tanaman",
    },
  ];

  const handleCardClick = (index) => {
    console.log("Card clicked:", index);

    navigate(`/riwayat-menanam/list-tanaman/info-detail-riwayat-tanaman`);
  };

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
              <option value="oldest">Paling lama</option>
              <option value="newest">Paling baru</option>
              <option value="ascending">A-Z</option>
              <option value="descending">Z-A</option>
            </select>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                {cards.length === 0 ? (
                  <div className={styles.noDataContainer}>
                    <PiGrainsSlashFill size={182} />
                    <p>Data Tanaman Tidak Tersedia</p>
                  </div>
                ) : (
                  cards.map((card, index) => (
                    <Card
                      key={index}
                      className={styles.cardItem}
                      index={card.index}
                      name={card.name}
                      onClick={() => handleCardClick(card.index)}
                    />
                  ))
                )}
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
