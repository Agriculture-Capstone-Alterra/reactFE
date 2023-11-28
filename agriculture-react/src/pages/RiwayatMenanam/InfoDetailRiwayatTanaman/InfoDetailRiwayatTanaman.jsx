import React from "react";
import { useState } from "react";
import Layout from "../../../layout/Layout";
import MawarPutih from "../../../assets/img/mawarputih.jpg";
import Bibit from "../../../assets/bibit.svg";
import JenisTanaman from "../../../assets/jenisTanaman.svg";
import Teknologi from "../../../assets/teknologi.svg";
import Varietas from "../../../assets/varietas.svg";
import Calendar from "../../../assets/calendar.svg";
import BarChart from "../../../components/BarChart/BarChart";
import Accordion from "../../../components/Accordion";
import "./style.css";


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


  return (
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
              <img
                src={MawarPutih}
                className="card-img-top img-style"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Mawar Putih</h5>
                <div
                  className="content d-flex justify-content-between"
                  style={{ gap: "32px" }}
                >
                  <div className="text-center">
                    <div className="">
                      <img src={Bibit} alt="" />
                      <div className="fw-bold">Jumlah Bibit</div>
                      <p>10</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="">
                      <img src={Varietas} alt="" />
                      <div className="fw-bold">Varietas</div>
                      <p>Hidroponik</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="">
                      <img src={JenisTanaman} alt="" />
                      <div className="fw-bold">Jenis Tanaman</div>
                      <p>Hidroponik</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="">
                      <img src={Teknologi} alt="" />
                      <div className="fw-bold">Teknologi</div>
                      <p>Hidroponik</p>
                    </div>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
          <div className="col" style={{ width: "436px"}}>
            <h4 className="">Tanggal Mulai Menanam</h4>
            <h6 className="">
              <img src={Calendar} />
              22 Februari 2023
            </h6>
            <h4 className="g-col-6">Kalender Musiman</h4>
            <h5 className="g-col-6">Musim Kemarau</h5>
            <h6 className="">
              <img src={Calendar} />
              22 Februari 2023
            </h6>
            <h5 className="g-col-6">Musim Hujan</h5>
            <h6 className="">
              <img src={Calendar} />
              22 Februari 2023
            </h6>

            <h4 className="g-col-6">Progress Tanaman</h4>
            <BarChart />

            <h4 className="g-col-6">Perkembangan Tumbuhan</h4>
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
                      Cara terbaik untuk mengendalikan hama dan penyakit ialah selalu pencegahan daripada intervensi. Penanam bayam harus mempertimbangkan langkah-langkah berikut:

Disarankan menggunakan benih bersertifikat. Dalam kebanyakan kasus, petani harus memilih hibrida yang memiliki ketahanan terhadap bolting dan Bulai.
Perkecambahan benih yang rendah atau laju pembibitan yang tidak tepat akan mempercepat efek negatif hama dan penyakit.
Pemupukan dan/atau Irigasi yang tidak memadai akan mempercepat efek negatif.
Langkah-langkah pengendalian bahan kimia diizinkan hanya setelah berkonsultasi dengan ahli agronomi berlisensi setempat.
Rotasi tanaman dapat diterapkan untuk mengendalikan beberapa penyakit.
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
    </Layout>
  );
};

export default InfoDetailRiwayatTanaman;
