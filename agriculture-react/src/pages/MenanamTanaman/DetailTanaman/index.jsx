/* eslint-disable no-unused-vars */
// import Card from "../../../components/Card/Card";
import Layout from "../../../layout/Layout";
import bayam from "../../../assets/img/bayam.png";
import varietas from "../../../assets/img/varietas-detail.png";
import jenisTanaman from "../../../assets/img/jenis-tanaman-detail.png";
import technology from "../../../assets/img/technology-detail.png";
import calendar from "../../../assets/img/icon-calendar.png";
import image1 from "../../../assets/img/gambar1.png";
import langkah1 from "../../../assets/img/langkah1.png";
// import Slider from "react-slick";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const DetailTanaman = () => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const [isShowNutrisi, setIsShowNutrisi] = useState(false);
  const [isShowDeskripsi, setIsShowDeskripsi] = useState(false);
  const [isShowPanduan, setIsShowPanduan] = useState(false);
  const [isShowSaran, setIsShowSaran] = useState(false);
  const [isShowLangkah, setIsShowLangkah] = useState(false);
  const [isShowMenanam, setIsShowMenanam] = useState(false);
  const [isShowPenanganan, setIsShowPenanganan] = useState(false);

  const breadcrumbsobjectexample = [
    {
      crumblink: "/linkpage1",
      crumbname: "Nama Page1",
    },
    {
      crumblink: "/linkpage2",
      crumbname: "Nama Page2",
    },
    {
      crumblink: "/linkpage3",
      crumbname: "Nama Page Final",
    },
  ];

  // useEffect(() => {
  //   console.log(isShowNutrisi);
  // }, [isShowNutrisi]);

  const onClickCollapse = (e) => {
    // const target = e.target.dataset.target;
  };
  return (
    <>
      <Layout pagetitle={"Nama Header"} breadcrumbs={breadcrumbsobjectexample}>
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
                <div className="d-flex flex-wrap gap-5 px-4 mt-4">
                  <div
                    className="card"
                    style={{
                      backgroundColor: "#F3F4F6",
                      width: "100%",
                      borderColor: "#6B72801A",
                    }}
                  >
                    <div className="card-body">
                      <div
                        className="d-flex justify-content-between"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowDeskripsi(!isShowDeskripsi)}
                      >
                        <p
                          className="user-select-none"
                          style={{
                            color: "#111827",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                        >
                          Deskripsi Tanaman
                        </p>
                        <p className="d-flex align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="#4B5563"
                            className="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </p>
                      </div>
                      <div
                        className={
                          isShowDeskripsi ? styles.expand : styles.collapse
                        }
                      >
                        <p
                          style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            fontWeight: 400,
                            // width: "90%",
                            paddingRight: "22px",
                          }}
                        >
                          Tanaman Bayam merupakan jenis sayuran semusim
                          tergolong ke dalam famili Amaranthaceae beriklim
                          tropis dengan penamaan ilmiah Amaranthus spp. Dominan
                          dimanfaatkan dan dikonsumsi sebagai sayuran hijau dan
                          banyak mengandung vitamin serta mineral yang baik bagi
                          kesehatan untuk dibudidayakan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{
                      backgroundColor: "#F3F4F6",
                      width: "100%",
                      borderColor: "#6B72801A",
                    }}
                  >
                    <div className="card-body">
                      <div
                        className="d-flex justify-content-between"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowPanduan(!isShowPanduan)}
                      >
                        <p
                          className="user-select-none"
                          style={{
                            color: "#111827",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                        >
                          Panduan Menanam
                        </p>
                        <p className="d-flex align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="#4B5563"
                            className="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </p>
                      </div>
                      <div
                        className={
                          isShowPanduan ? styles.expand : styles.collapse
                        }
                      >
                        <p
                          style={{
                            color: "#111827",
                            fontSize: "16px",
                            fontWeight: 400,
                          }}
                        >
                          Alat Yang Dibutuhkan
                        </p>
                        <div className={styles.cardScroll}>
                          <div
                            className={`d-flex bg-white ${styles.cardInfo}`}
                            // style={{ width: "348px", borderRadius: "16px" }}
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
                                Rockwool
                              </p>
                              <span
                                style={{
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                }}
                              >
                                Rockwool/media tanaman yang bagus digunakan
                                untuk tanaman hidroponik
                              </span>
                            </div>
                          </div>
                          <div
                            className={`d-flex bg-white ${styles.cardInfo}`}
                            // style={{ width: "348px", borderRadius: "16px" }}
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
                                Rockwool
                              </p>
                              <span
                                style={{
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                }}
                              >
                                Rockwool/media tanaman yang bagus digunakan
                                untuk tanaman hidroponik
                              </span>
                            </div>
                          </div>
                          <div
                            className={`d-flex bg-white ${styles.cardInfo}`}
                            // style={{ width: "348px", borderRadius: "16px" }}
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
                                Rockwool
                              </p>
                              <span
                                style={{
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                }}
                              >
                                Rockwool/media tanaman yang bagus digunakan
                                untuk tanaman hidroponik
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{
                      backgroundColor: "#F3F4F6",
                      width: "100%",
                      borderColor: "#6B72801A",
                    }}
                  >
                    <div className="card-body">
                      <div
                        className="d-flex justify-content-between"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowSaran(!isShowSaran)}
                      >
                        <p
                          className="user-select-none"
                          style={{
                            color: "#111827",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                        >
                          Saran Untuk Tempat Penanaman
                        </p>
                        <p className="d-flex align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="#4B5563"
                            className="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </p>
                      </div>
                      <div
                        className={
                          isShowSaran ? styles.expand : styles.collapse
                        }
                      >
                        <p
                          style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            fontWeight: 400,
                            // width: "90%",
                            paddingRight: "22px",
                          }}
                        >
                          Sebaiknya bayam ditempatkan didalam pot yang dengan
                          teknologi hidroponik. Untuk penyimpanan dari tanaman
                          bayam bisa disimpan pada tempat yang teduh, agar bayam
                          tidak layu. Perlu diketahui kalau bayam merupakan
                          tanaman sering layu.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{
                      backgroundColor: "#F3F4F6",
                      width: "100%",
                      borderColor: "#6B72801A",
                    }}
                  >
                    <div className="card-body">
                      <div
                        className="d-flex justify-content-between"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowLangkah(!isShowLangkah)}
                      >
                        <p
                          className="user-select-none"
                          style={{
                            color: "#111827",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                        >
                          Langkah Penanaman
                        </p>
                        <p className="d-flex align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="#4B5563"
                            className="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </p>
                      </div>
                      <div
                        className={
                          isShowLangkah ? styles.expand : styles.collapse
                        }
                      >
                        <div className={styles.cardScroll}>
                          <div
                            className={`d-flex bg-white ${styles.cardInfo}`}
                            // style={{ width: "348px", borderRadius: "16px" }}
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
                                Tahap 1
                              </p>
                              <span
                                style={{
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                }}
                              >
                                Potong rockwool bentuk dadu ukuran 2,5cm x 2,5cm
                                x 2,5cm
                              </span>
                            </div>
                          </div>
                          <div
                            className={`d-flex bg-white ${styles.cardInfo}`}
                            // style={{ width: "348px", borderRadius: "16px" }}
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
                                Tahap 1
                              </p>
                              <span
                                style={{
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                }}
                              >
                                Potong rockwool bentuk dadu ukuran 2,5cm x 2,5cm
                                x 2,5cm
                              </span>
                            </div>
                          </div>
                          <div
                            className={`d-flex bg-white ${styles.cardInfo}`}
                            // style={{ width: "348px", borderRadius: "16px" }}
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
                                Tahap 1
                              </p>
                              <span
                                style={{
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                }}
                              >
                                Potong rockwool bentuk dadu ukuran 2,5cm x 2,5cm
                                x 2,5cm
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{
                      backgroundColor: "#F3F4F6",
                      width: "100%",
                      borderColor: "#6B72801A",
                    }}
                  >
                    <div className="card-body">
                      <div
                        className="d-flex justify-content-between"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowMenanam(!isShowMenanam)}
                      >
                        <p
                          className="user-select-none"
                          style={{
                            color: "#111827",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                        >
                          Cara Menanam Tanaman
                        </p>
                        <p className="d-flex align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="#4B5563"
                            className="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </p>
                      </div>
                      <div
                        className={
                          isShowMenanam ? styles.expand : styles.collapse
                        }
                      >
                        <p
                          style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            fontWeight: 400,
                            // width: "90%",
                            paddingRight: "22px",
                          }}
                        >
                          Merawat bayam dengan baik melibatkan penyiraman yang
                          cukup, tanah subur, pemupukan teratur, pencahayaan
                          yang memadai, suhu sejuk, pemangkasan teratur,
                          pencegahan hama dan penyakit, rotasi tanaman, dan
                          pemanenan pada waktu yang tepat. Dengan perhatian pada
                          detail ini, Anda dapat menikmati panen bayam yang
                          lezat dan sehat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-5 p-4">
                  <button
                    type="button"
                    style={{
                      border: "none",
                      backgroundColor: "#51AB8C",
                      color: "#F9FAFB",
                      borderRadius: "6px",
                      padding: "6px 12px",
                    }}
                  >
                    Edit Tanaman
                  </button>
                  <button
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
                  </button>
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
                        style={{
                          color: "#111827",
                          fontSize: "16px",
                          fontWeight: 600,
                        }}
                      >
                        Musim Kemarau
                      </p>
                      <div className="d-flex gap-2 align-items-center">
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
                      <div className="d-flex gap-2 align-items-center">
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
                  <div
                    className="card"
                    style={{ width: "100%", borderColor: "#6B72801A" }}
                  >
                    <div className="card-body">
                      <div
                        className="d-flex justify-content-between"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowPenanganan(!isShowPenanganan)}
                      >
                        <p
                          className="user-select-none"
                          style={{
                            color: "#111827",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                        >
                          Informasi Penanganan Hama
                        </p>
                        <p className="d-flex align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="#4B5563"
                            className="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </p>
                      </div>
                      <div
                        className={
                          isShowPenanganan ? styles.expand : styles.collapse
                        }
                      >
                        <p
                          style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            fontWeight: 400,
                            paddingRight: "22px",
                          }}
                        >
                          Tanaman Bayam merupakan jenis sayuran semusim
                          tergolong ke dalam famili Amaranthaceae beriklim
                          tropis dengan penamaan ilmiah Amaranthus spp. Dominan
                          dimanfaatkan dan dikonsumsi sebagai sayuran hijau dan
                          banyak mengandung vitamin serta mineral yang baik bagi
                          kesehatan untuk dibudidayakan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{ width: "100%", borderColor: "#6B72801A" }}
                  >
                    <div className="card-body">
                      <div
                        className="d-flex justify-content-between"
                        data-target="#collapse7"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsShowNutrisi(!isShowNutrisi)}
                      >
                        <p
                          className="user-select-none"
                          style={{
                            color: "#111827",
                            fontWeight: 600,
                            fontSize: "20px",
                          }}
                          data-target="#collapse7"
                        >
                          Informasi Nutrisi dan Pupuk
                        </p>
                        <p className="d-flex align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="#4B5563"
                            className="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                            data-target="#collapse7"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            />
                          </svg>
                        </p>
                      </div>
                      <div
                        className={
                          isShowNutrisi ? styles.expand : styles.collapse
                        }
                        // style={{ display: "none" }}
                      >
                        <p
                          style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            fontWeight: 400,
                            paddingRight: "22px",
                          }}
                        >
                          Tanaman Bayam merupakan jenis sayuran semusim
                          tergolong ke dalam famili Amaranthaceae beriklim
                          tropis dengan penamaan ilmiah Amaranthus spp. Dominan
                          dimanfaatkan dan dikonsumsi sebagai sayuran hijau dan
                          banyak mengandung vitamin serta mineral yang baik bagi
                          kesehatan untuk dibudidayakan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end main content */}
      </Layout>
    </>
  );
};

export default DetailTanaman;
