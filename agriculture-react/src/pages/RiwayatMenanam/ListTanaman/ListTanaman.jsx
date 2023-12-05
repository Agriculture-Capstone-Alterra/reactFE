import { useState } from "react";
import Card from "../../../components/Card/Card";
import Layout from "../../../layout/Layout";
import styles from "./ListTanaman.module.css";
import Filter from "../../../components/Filter";
import { useNavigate } from "react-router-dom";
import { PiGrainsSlashFill } from "react-icons/pi";
import MawarPutih from "../../../assets/img/mawarputih.jpg";
import Bayam from "../../../assets/img/bayam.png";
import Bonsai from "../../../assets/img/bonsai.png";

const ListTanaman = () => {
  // Dummy Data Card
  const cardData = [
    {
      index: 1,
      image: MawarPutih,
      title: "Mawar Putih",
      type: "Bunga",
      technology: "Hidroponik",
    },
    {
      index: 2,
      image: Bayam,
      title: "Bayam",
      type: "Sayuran",
      technology: "Hidroponik",
    },
    {
      index: 3,
      image: Bonsai,
      title: "Bonsai",
      type: "Tanaman Hias",
      technology: "Hidroponik",
    },
  ];

  const navigate = useNavigate();
  const [cards, setCards] = useState(cardData);
  const [selectedSortOption, setSelectedSortOption] = useState("");

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

  // handle card click
  const handleCardClick = (index) => {
    console.log(`Card ${index} clicked`);

    navigate(`/riwayat-menanam/list-tanaman/info-detail-riwayat-tanaman`);
  };

  // handle sort change
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedSortOption(selectedOption);

    // sorting card logic
    let sortedCards = [...cards];
    switch (selectedOption) {
      case "oldest":
        sortedCards.sort((a, b) => a.index - b.index);
        break;
      case "newest":
        sortedCards.sort((a, b) => b.index - a.index);
        break;
      case "ascending":
        sortedCards.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "descending":
        sortedCards.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setCards(sortedCards);
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
              onChange={handleSortChange}
              value={selectedSortOption}
            >
              <option disabled value="">
                Urutkan dalam
              </option>
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
                  cards.map((card) => (
                    <Card
                      key={card.index}
                      cardHover={styles.cardItem}
                      image={card.image}
                      title={card.title}
                      type={card.type}
                      technology={card.technology}
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
