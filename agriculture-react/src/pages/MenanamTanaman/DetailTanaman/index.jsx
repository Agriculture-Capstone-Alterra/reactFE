/* eslint-disable no-unused-vars */
import Layout from "../../../layout/Layout";
import bayam from "../../../assets/img/bayam.png";
import varietas from "../../../assets/img/varietas-detail.png";
import jenisTanaman from "../../../assets/img/jenis-tanaman-detail.png";
import technology from "../../../assets/img/technology-detail.png";
import calendar from "../../../assets/img/icon-calendar.png";
import image1 from "../../../assets/img/gambar1.png";
import langkah1 from "../../../assets/img/langkah1.png";
import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import Accordion from "../../../components/Accordion";
import { motion } from "framer-motion";
import Modal from "../../../components/Modal/Modal";
import ModalTrigger from "../../../components/Modal/ModalTrigger";
import { useNavigate } from "react-router-dom";

const DetailTanaman = () => {
  const [isShowNutrisi, setIsShowNutrisi] = useState(false);
  const [isShowDeskripsi, setIsShowDeskripsi] = useState(false);
  const [isShowPanduan, setIsShowPanduan] = useState(false);
  const [isShowSaran, setIsShowSaran] = useState(false);
  const [isShowLangkah, setIsShowLangkah] = useState(false);
  const [isShowMenanam, setIsShowMenanam] = useState(false);
  const [isShowPenanganan, setIsShowPenanganan] = useState(false);
  const navigate = useNavigate();
  const [widthScroll, setWithScroll] = useState(0);
  const scroll = useRef(null);
  const deleteModalName = "deletaDataTanaman";

  const alat = [
    {
      name: "Rockwool",
      description:
        "Rockwool/media tanaman yang bagus digunakan untuk tanaman hidroponik",
    },
    {
      name: "Rockwool",
      description:
        "Rockwool/media tanaman yang bagus digunakan untuk tanaman hidroponik",
    },
    {
      name: "Rockwool",
      description:
        "Rockwool/media tanaman yang bagus digunakan untuk tanaman hidroponik",
    },
  ];
  const langkah = [
    {
      name: "Tahap 1",
      description: "Potong rockwool bentuk dadu ukuran 2,5cm x 2,5cm x2,5cm",
    },
    {
      name: "Tahap 1",
      description: "Potong rockwool bentuk dadu ukuran 2,5cm x 2,5cm x2,5cm",
    },
    {
      name: "Tahap 1",
      description: "Potong rockwool bentuk dadu ukuran 2,5cm x 2,5cm x2,5cm",
    },
  ];

  useEffect(() => {
    setWithScroll(scroll.current.scrollWidth - scroll.current.offsetWidth);
  }, []);

  const breadcrumbsobjectexample = [
    {
      crumblink : "/menanam-tanaman",
      crumbname : "Menanam Tanaman",
    },
    {
      crumblink : "/menanam-tanaman/detail-menanam-tanaman",
      crumbname : "Detail Tanaman",
    }
  ];
  const handleOnClick = () => {
    navigate(`/menanam-tanaman/edit-tanaman`);
  };
  return (
    <>
      <Layout pagetitle={"Menanam Tanaman"} breadcrumbs={breadcrumbsobjectexample}>
        {/* begin main content */}
        <div>
          <div className="mt-2 mb-2">
            <div className="row m-0">
              <div
                className="col-md-7"
                style={{
                  backgroundColor: "#F3F4F6",
                  padding: 0,
                }}
              >
                <figure>
                  <img src={bayam} width={"100%"} alt="" />
                </figure>
                <h2 className="text-center fw-bolder mt-5 mb-5">Bayam</h2>
                <div
                  className="d-flex justify-content-center"
                  style={{ gap: "50px" }}
                >
                  <div className="text-center">
                    <figure>
                      <img src={varietas} alt="" />
                    </figure>
                    <div>
                      <p
                        style={{
                          color: "#111827",
                          fontWeight: 600,
                          fontSize: "20px",
                        }}
                      >
                        Varietas
                      </p>
                      <p style={{ color: "#4B5563", fontSize: "16px" }}>
                        Maryland
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <figure>
                      <img src={jenisTanaman} alt="" />
                    </figure>
                    <div>
                      <p
                        style={{
                          color: "#111827",
                          fontWeight: 600,
                          fontSize: "20px",
                        }}
                      >
                        Jenis Tanaman
                      </p>
                      <p style={{ color: "#4B5563", fontSize: "16px" }}>
                        Sayuran
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <figure>
                      <img src={technology} alt="" />
                    </figure>
                    <div>
                      <p
                        style={{
                          color: "#111827",
                          fontWeight: 600,
                          fontSize: "20px",
                        }}
                      >
                        Teknologi
                      </p>
                      <p style={{ color: "#4B5563", fontSize: "16px" }}>
                        Hidroponik
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-4 px-4 mt-4">
                  <Accordion
                    title="Deskripsi Tananman"
                    onClick={() => setIsShowDeskripsi(!isShowDeskripsi)}
                    isShowAccordion={isShowDeskripsi}
                  >
                    <p
                      className="mt-2"
                      style={{
                        color: "#4B5563",
                        fontSize: "16px",
                        fontWeight: 400,
                        // width: "90%",
                        paddingRight: "22px",
                      }}
                    >
                      Tanaman Bayam merupakan jenis sayuran semusim tergolong ke
                      dalam famili Amaranthaceae beriklim tropis dengan penamaan
                      ilmiah Amaranthus spp. Dominan dimanfaatkan dan dikonsumsi
                      sebagai sayuran hijau dan banyak mengandung vitamin serta
                      mineral yang baik bagi kesehatan untuk dibudidayakan.
                    </p>
                  </Accordion>
                  <Accordion
                    title="Panduan Menanam"
                    onClick={() => setIsShowPanduan(!isShowPanduan)}
                    isShowAccordion={isShowPanduan}
                  >
                    <p
                      className="mt-2"
                      style={{
                        color: "#111827",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    >
                      Alat Yang Dibutuhkan
                    </p>
                    <motion.div
                      ref={scroll}
                      className={`mt-2 ${styles.cardScrollContainer}`}
                    >
                      <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -widthScroll }}
                        className={styles.cardScroll}
                      >
                        {alat.map((item, index) => (
                          <motion.div
                            className={`d-flex bg-white ${styles.cardInfo}`}
                            key={index}
                          >
                            <img src={image1} alt="" />
                            <div className="px-3">
                              <p
                                style={{
                                  color: "#374151",
                                  fontWeight: 600,
                                  fontSize: "16px",
                                  margin: 0,
                                }}
                              >
                                {item.name}
                              </p>
                              <span
                                style={{
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                }}
                              >
                                {item.description}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </Accordion>
                  <Accordion
                    title="Saran Untuk Tempat Penanaman"
                    onClick={() => setIsShowSaran(!isShowSaran)}
                    isShowAccordion={isShowSaran}
                  >
                    <p
                      className="mt-2"
                      style={{
                        color: "#4B5563",
                        fontSize: "16px",
                        fontWeight: 400,
                        // width: "90%",
                        paddingRight: "22px",
                      }}
                    >
                      Sebaiknya bayam ditempatkan didalam pot yang dengan
                      teknologi hidroponik. Untuk penyimpanan dari tanaman bayam
                      bisa disimpan pada tempat yang teduh, agar bayam tidak
                      layu. Perlu diketahui kalau bayam merupakan tanaman sering
                      layu.
                    </p>
                  </Accordion>
                  <Accordion
                    title="Langkah Penanaman"
                    onClick={() => setIsShowLangkah(!isShowLangkah)}
                    isShowAccordion={isShowLangkah}
                  >
                    <motion.div
                      className={`mt-2 ${styles.cardScrollContainer}`}
                    >
                      <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -widthScroll }}
                        className={`mt-2 ${styles.cardScroll}`}
                      >
                        {langkah.map((item, index) => (
                          <motion.div
                            className={`d-flex bg-white ${styles.cardInfo}`}
                            key={index}
                          >
                            <img src={langkah1} alt="" />
                            <div className="px-3">
                              <p
                                style={{
                                  color: "#374151",
                                  fontWeight: 600,
                                  fontSize: "16px",
                                  margin: 0,
                                }}
                              >
                                {item.name}
                              </p>
                              <span
                                style={{
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                }}
                              >
                                {item.description}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </Accordion>
                  <Accordion
                    title="Cara Menanam Tanaman"
                    onClick={() => setIsShowMenanam(!isShowMenanam)}
                    isShowAccordion={isShowMenanam}
                  >
                    <p
                      className="mt-2"
                      style={{
                        color: "#4B5563",
                        fontSize: "16px",
                        fontWeight: 400,
                        // width: "90%",
                        paddingRight: "22px",
                      }}
                    >
                      Merawat bayam dengan baik melibatkan penyiraman yang
                      cukup, tanah subur, pemupukan teratur, pencahayaan yang
                      memadai, suhu sejuk, pemangkasan teratur, pencegahan hama
                      dan penyakit, rotasi tanaman, dan pemanenan pada waktu
                      yang tepat. Dengan perhatian pada detail ini, Anda dapat
                      menikmati panen bayam yang lezat dan sehat.
                    </p>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-center gap-4 p-4">
                  <button
                    type="button"
                    style={{
                      border: "none",
                      backgroundColor: "#51AB8C",
                      color: "#F9FAFB",
                      borderRadius: "6px",
                      padding: "6px 12px",
                    }}
                    onClick={() => handleOnClick()}
                  >
                    Edit Tanaman
                  </button>
                  {/* <button
                    type="button"
                    style={{
                      border: "none",
                      backgroundColor: "#DC2626",
                      color: "#F9FAFB",
                      borderRadius: "6px",
                      padding: "6px 12px",
                    }}
                  >
                    Hapus Tanaman
                  </button> */}
                  <ModalTrigger
                    modalTarget={deleteModalName}
                    className={``}
                    style={{
                      border: "none",
                      backgroundColor: "#DC2626",
                      color: "#F9FAFB",
                      borderRadius: "6px",
                      padding: "6px 12px",
                    }}
                    onClick={() => {}}
                  >
                    Hapus Tanaman
                  </ModalTrigger>
                </div>
              </div>
              <div className="col-md-5 ps-4">
                <div>
                  <p
                    style={{
                      color: "#111827",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    Kalender Musiman
                  </p>
                  <div>
                    <div>
                      <p
                        className="mt-3"
                        style={{
                          color: "#111827",
                          fontSize: "16px",
                          fontWeight: 600,
                        }}
                      >
                        Musim Kemarau
                      </p>
                      <div className="d-flex gap-2 align-items-center mt-2">
                        <img src={calendar} alt="" />
                        <span
                          style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            fontWeight: 400,
                          }}
                        >
                          4 Februari 2023 - 26 Juli 2023
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p
                        style={{
                          color: "#111827",
                          fontSize: "16px",
                          fontWeight: 600,
                        }}
                      >
                        Musim Hujan
                      </p>
                      <div className="d-flex gap-2 align-items-center mt-2">
                        <img src={calendar} alt="" />
                        <span
                          style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            fontWeight: 400,
                          }}
                        >
                          20 September 2023 - 1 Januari 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-4 mt-5">
                  <Accordion
                    title="Informasi Penanganan Hama"
                    onClick={() => setIsShowPenanganan(!isShowPenanganan)}
                    isShowAccordion={isShowPenanganan}
                    style={{ width: "100%", borderColor: "#6B72801A" }}
                  >
                    <p
                      className="mt-2"
                      style={{
                        color: "#4B5563",
                        fontSize: "16px",
                        fontWeight: 400,
                        paddingRight: "22px",
                      }}
                    >
                      Tanaman Bayam merupakan jenis sayuran semusim tergolong ke
                      dalam famili Amaranthaceae beriklim tropis dengan penamaan
                      ilmiah Amaranthus spp. Dominan dimanfaatkan dan dikonsumsi
                      sebagai sayuran hijau dan banyak mengandung vitamin serta
                      mineral yang baik bagi kesehatan untuk dibudidayakan.
                    </p>
                  </Accordion>
                  <Accordion
                    title="Informasi Nutrisi dan Pupuk"
                    onClick={() => setIsShowNutrisi(!isShowNutrisi)}
                    isShowAccordion={isShowNutrisi}
                    style={{ width: "100%", borderColor: "#6B72801A" }}
                  >
                    <p
                      className="mt-2"
                      style={{
                        color: "#4B5563",
                        fontSize: "16px",
                        fontWeight: 400,
                        paddingRight: "22px",
                      }}
                    >
                      Tanaman Bayam merupakan jenis sayuran semusim tergolong ke
                      dalam famili Amaranthaceae beriklim tropis dengan penamaan
                      ilmiah Amaranthus spp. Dominan dimanfaatkan dan dikonsumsi
                      sebagai sayuran hijau dan banyak mengandung vitamin serta
                      mineral yang baik bagi kesehatan untuk dibudidayakan.
                    </p>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end main content */}
      </Layout>
      <Modal
        id={deleteModalName}
        title="Hapus Data Tanaman"
        content={
          <p className="text-center">
            Apakah anda yakin akan mengapus data tanaman?
          </p>
        }
        onCancel={() => {}}
        onSubmit={() => {}}
        type="delete"
      />
    </>
  );
};

export default DetailTanaman;
