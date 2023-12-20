import React, { useState, useEffect } from 'react';
import Card from '../../../components/Card/Card';
import Layout from '../../../layout/Layout';
import styles from './ListTanaman.module.css';
import Filter from '../../../components/Filter';
import { useNavigate, useParams } from 'react-router-dom';
import { PiGrainsSlashFill } from 'react-icons/pi';
import axiosWithAuth from '../../../api/axios';

const ListTanaman = () => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const [cards, setCards] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const selectedUserName = localStorage.getItem('selectedUserName');
  const [selectedTeknologi, setSelectedTeknologi] = useState(null);
  const [selectedJenisTanaman, setSelectedJenisTanaman] = useState(null);

  const fetchPlantsData = async () => {
    try {
      const res = await axiosWithAuth.get(`/admin/user-plants/user/${user_id}`);
      let cards = res.data.data;
      console.log(res.data.data)

      if (selectedTeknologi) {
        cards = cards.filter((card) => card.plant.technology.name === selectedTeknologi);
      }
      if (selectedJenisTanaman) {
        cards = cards.filter((card) => card.plant.plant_type.name === selectedJenisTanaman);
      }

      setCards(cards);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchPlantsData();
  }, [user_id, selectedTeknologi, selectedJenisTanaman]);

  const breadcrumbsobjectexample = [
    {
      crumbname: 'Riwayat Menanam',
      crumblink: '/riwayat-menanam',
    },
    {
      crumbname: 'List Tanaman',
      crumblink: `/riwayat-menanam/list-tanaman/${user_id}`,
    },
  ];

  // handle card click
  const handleCardClick = (id) => {
    console.log(`Card ${id} clicked`);
    navigate(`/riwayat-menanam/list-tanaman/info-detail-riwayat-tanaman/${user_id}/${id}`);
  };

  // handle sort change
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedSortOption(selectedOption);
    // Implement sorting logic if needed
  };

  return (
    <div className={styles.container}>
      <Layout pagetitle={'List Tanaman'} breadcrumbs={breadcrumbsobjectexample}>
        <div>
          <div className={styles.header}>
            <h4 className={styles.title}>
              List Tanaman <span className={styles.userName}>{selectedUserName}</span>
            </h4>
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
            <div className={styles.filter}>
              
            </div>
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
                      title={card.plant.name}
                      image={card.plant.plant_images}
                      alt={`Image of ${card.plant.name}`}
                      type={card.plant.plant_type.name}
                      technology={card.plant.technology.name}
                      onClick={() => handleCardClick(card.id)}
                    />
                  ))
                )}
              </div>
              <Filter
                selectedTeknologi={selectedTeknologi}
                selectedJenisTanaman={selectedJenisTanaman}
                setSelectedTeknologi={setSelectedTeknologi}
                setSelectedJenisTanaman={setSelectedJenisTanaman}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ListTanaman;
