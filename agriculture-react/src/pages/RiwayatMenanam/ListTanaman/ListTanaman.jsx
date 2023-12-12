import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import Layout from "../../../layout/Layout";
import styles from "./ListTanaman.module.css";
import Filter from "../../../components/Filter";
import { useNavigate } from "react-router-dom";
import { PiGrainsSlashFill } from "react-icons/pi";
import axiosWithAuth from "../../../api/axios";

const ListTanaman = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const fetchPlantsData = async () => {
    try {
      const res = await axiosWithAuth.get("/plants");
      const cards = res.data.data;
      setCards(cards);
      console.log("cards data => ", cards);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // untuk debbugging

  useEffect(() => {
    fetchPlantsData();
  }, []);

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
  const handleCardClick = (id) => {
    console.log(`Card ${id} clicked`);

    //Link ke halaman List Tanaman dari Nama Pengguna
    navigate(`/riwayat-menanam/list-tanaman/info-detail-riwayat-tanaman/${id})`);
  };

  // handle sort change
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedSortOption(selectedOption);

    // sorting card logic
    let sortedCards = [...cards];
    switch (selectedOption) {
      case "oldest":
        sortedCards.sort((a, b) => a.id - b.id);
        break;
      case "newest":
        sortedCards.sort((a, b) => b.id - a.id);
        break;
      case "ascending":
        sortedCards.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        break;
      case "descending":
        sortedCards.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
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
                      key={card.id}
                      cardHover={styles.cardItem}
                      image={card.plant_image_thumbnail}
                      alt={`Image of ${card.name}`}
                      title={card.name}
                      type={card.plant_type.name}
                      technology={card.technology.name}
                      onClick={() => handleCardClick(card.id)}
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
