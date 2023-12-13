import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../../layout/Layout";
import MawarPutih from "../../../assets/img/mawarputih.jpg";
import Bibit from "../../../assets/bibit.svg";
import JenisTanaman from "../../../assets/jenisTanaman.svg";
import Teknologi from "../../../assets/Teknologi.svg";
import Varietas from "../../../assets/varietas.svg";
import calendar from "../../../assets/calendar.svg";
import BarChart from "../../../components/BarChart/BarChart";
import Accordion from "../../../components/Accordion";
import "./style.css";
import SliderImg from "../../../components/SliderImg/SliderImg";
import ImgCard from "../../../components/SliderImg/ImgCard";
import axiosWithAuth from "../../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import ImgModal from "../../../components/ImgModal/ImgModal";
import { format } from "date-fns";
import idLocale from "date-fns/locale/id";
import bayam from "../../../assets/img/bayam.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const InfoDetailRiwayatTanaman = () => {
  const breadcrumbsobjectexample = [
    {
      crumbname: "Riwayat Menanam",
      crumblink: "/riwayat-menanam",
    },
    {
      crumbname: "List Tanaman",
      crumblink: "/riwayat-menanam/list-tanaman",
    },
    {
      crumbname: "Info Detail Riwayat Tanaman",
      crumblink: "/riwayat-menanam/list-tanaman/info-detail-riwayat-tanaman",
    },
  ];
  const [isShowDeskripsi, setIsShowDeskripsi] = useState(false);
  const [isShowNutrisi, setIsShowNutrisi] = useState(false);
  const [isShowPenanganan, setIsShowPenanganan] = useState(false);

  const { user_id } = useParams();
  const [tanaman, setTanaman] = useState({});

  useEffect(() => {
    axiosWithAuth
      .get(`admin/user-plants/user/${user_id}`)
      .then((result) => {
        setTanaman(result.data.data);
        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user_id]);

  // useEffect(() => {
  //   axiosWithAuth
  //     .get(`user-plants/${id}`)
  //     .then((result) => {
  //       setPlants(result.data.data);
  //       console.log(result.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  function handleDeleteClick(id) {
    console.log(id);
  }

  const [modalopen, setModalOpen] = useState(false);
  const [imgmodalcurrentindex, setImgModalCurrentIndex] = useState(0);
  function handleonClick(key) {
    console.log(key);
    setImgModalCurrentIndex(key);
    setModalOpen(!modalopen);
  }
  const dataimage = [
    {
      link: "https://loremflickr.com/640/480/abstract",
      datecreated: "20-20-2907",
    },
    {
      link: "https://loremflickr.com/640/480/abstract",
      datecreated: "20-20-2907",
    },
    {
      link: "https://loremflickr.com/640/480/nightlife",
      datecreated: "20-20-2907",
    },
    {
      link: "https://loremflickr.com/640/480/fashion",
      datecreated: "20-20-2907",
    },
  ];

  return (
    <>
      <ImgModal
        imgclickedindex={imgmodalcurrentindex}
        imgdatas={dataimage}
        modalstatus={modalopen}
        modalcloser={handleonClick}
      />
      <Layout
        pagetitle={"Info Detail History Tanaman"}
        breadcrumbs={breadcrumbsobjectexample}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="card"
                style={{ width: "640px", backgroundColor: "#F3F4F6" }}
              >
                {/* <img
                  src={MawarPutih}
                  className="card-img-top img-style"
                  alt="..."
                /> */}
                <div style={{ width: "100%" }}>
                  <Carousel
                    autoPlay={true}
                    showArrows={false}
                    showThumbs={false}
                  >
                    {/* <div key={id}>
                      <img src={tanaman.plant_images} key={id} />
                    </div> */}
                    {tanaman.plant_images &&
                      tanaman.plant_images.map((image_path, user_id) => (
                        <img
                          key={user_id}
                          src={image_path}
                          alt={`Gambar tanaman ${user_id}`}
                        />
                      ))}
                  </Carousel>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">
                    {tanaman.name}
                  </h5>
                  <div
                    className="content d-flex justify-content-between"
                    style={{ gap: "32px" }}
                  >
                    <div className="text-center">
                      <div className="">
                        <img src={Bibit} alt="" />
                        <div className="fw-bold">Jumlah Bibit</div>
                        <p>{tanaman.seed_quantity}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="">
                        <img src={Varietas} alt="" />
                        <div className="fw-bold">Varietas</div>
                        <p>{tanaman.variety}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="">
                        <img src={JenisTanaman} alt="" />
                        <div className="fw-bold">Jenis Tanaman</div>
                        <p>{tanaman.plant_type}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="">
                        <img src={Teknologi} alt="" />
                        <div className="fw-bold">Teknologi</div>
                        <p>{tanaman.technology}</p>
                      </div>
                    </div>
                  </div>
                  <Accordion
                    title="Deskripsi Tanaman"
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
                      {tanaman.description}
                    </p>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: "436px" }}>
              <div>
                <h4>Tanggal Mulai Menanam</h4>
                <div className="d-flex gap-2 align-items-center mt-2">
                  <img src={calendar} alt="" />
                  {tanaman.created_at && (
                    <span
                      style={{
                        color: "#4B5563",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    >
                      {`${format(new Date(tanaman.created_at), "dd MMMM yyyy", {
                        locale: idLocale,
                      })} 
                        `}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <h4>Kalender Musiman</h4>
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
                        {tanaman.dry_season_start_plant &&
                          tanaman.dry_season_finish_plant && (
                            <span
                              style={{
                                color: "#4B5563",
                                fontSize: "16px",
                                fontWeight: 400,
                              }}
                            >
                              {`${format(
                                new Date(tanaman.dry_season_start_plant),
                                "dd MMMM yyyy",
                                { locale: idLocale }
                              )} - ${format(
                                new Date(tanaman.dry_season_finish_plant),
                                "dd MMMM yyyy",
                                { locale: idLocale }
                              )}`}
                            </span>
                          )}
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
                        {tanaman.rainy_season_start_plant &&
                          tanaman.rainy_season_finish_plant && (
                            <span
                              style={{
                                color: "#4B5563",
                                fontSize: "16px",
                                fontWeight: 400,
                              }}
                            >
                              {`${format(
                                new Date(tanaman.rainy_season_start_plant),
                                "dd MMMM yyyy",
                                { locale: idLocale }
                              )} - ${format(
                                new Date(tanaman.rainy_season_finish_plant),
                                "dd MMMM yyyy",
                                { locale: idLocale }
                              )}`}
                            </span>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mt-4">Progress Tanaman</h4>
                <BarChart />
              </div>

              <div>
                <h4 className="mt-4">Perkembangan Tumbuhan</h4>
                {/* 
                <ImgCard
                  images={MawarPutih}
                  viewImgModal={handleonClick}
                  deleteImgModalName="modalDelete"
                /> */}
              </div>
              <div className="d-flex flex-wrap gap-4 mt-4">
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
                    {tanaman.pest_info}
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
                    {tanaman.fertilizer_info}
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default InfoDetailRiwayatTanaman;
