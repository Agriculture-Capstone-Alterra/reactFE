import React from "react";
import Layout from "../../../layout/Layout";
import InfoCard from "../../../components/InfoCard/InfoCard";
import MawarPutih from "../../../assets/img/mawarputih.jpg";
import Bibit from "../../../assets/bibit.svg";
import JenisTanaman from "../../../assets/jenisTanaman.svg";
import Teknologi from "../../../assets/teknologi.svg";
import Varietas from "../../../assets/varietas.svg";
import Calendar from "../../../assets/calendar.svg";
import "./style.css";
const InfoDetailRiwayatTanaman = () => {
  const breadcrumbsobjectexample = [
    {
      crumbname: "Riwayat Menanam",
      crumblink: "/history-tanaman/",
    },
    {
      crumbname: "List Tanaman",
      crumblink: "/history-tanaman/list-tanaman/",
    },
    {
      crumbname: "Info Detail Riwayat Tanaman",
      crumblink: "/history-tanaman/list-tanaman/info-detail-riwayat-tanaman",
    },
  ];

  return (
    <Layout
      pagetitle={"Info Detail History Tanaman"}
      breadcrumbs={breadcrumbsobjectexample}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "30rem" }}>
              <img
                src={MawarPutih}
                className="card-img-top img-style"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Mawar Putih</h5>
                <div
                  className="content d-flex justify-content-between"
                  style={{ gap: "40px" }}
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
                <InfoCard
                  title="Deskripsi Tanaman"
                  style={{ backgroundColor: "#FFFF" }} 
                  content="Cara terbaik untuk mengendalikan hama dan penyakit ialah selalu pencegahan daripada intervensi. Penanam bayam harus mempertimbangkan langkah-langkah berikut:

          Disarankan menggunakan benih bersertifikat. Dalam kebanyakan kasus, petani harus memilih hibrida yang memiliki ketahanan terhadap bolting dan Bulai.
          Perkecambahan benih yang rendah atau laju pembibitan yang tidak tepat akan mempercepat efek negatif hama dan penyakit.
          Pemupukan dan/atau Irigasi yang tidak memadai akan mempercepat efek negatif.
          Langkah-langkah pengendalian bahan kimia diizinkan hanya setelah berkonsultasi dengan ahli agronomi berlisensi setempat.
          Rotasi tanaman dapat diterapkan untuk mengendalikan beberapa penyakit."

                />
              </div>
            </div>
          </div>
          <div className="col">
            <h4 className="">Tanggal Mulai Menanam</h4>
            <div className=""><img src={Calendar}/>22 Februari 2023</div>
            <h4 className="">Kalender Musiman</h4>
            <h5 className="">Musim Kemarau</h5>
            <div className=""><img src={Calendar}/>22 Februari 2023</div>
            <h5 className="">Musim Hujan</h5>
            <div className=""><img src={Calendar}/>22 Februari 2023</div>

            <h4 className="">Progress Tanaman</h4>

            <h4 className="">Perkembangan Tumbuhan</h4>

            <InfoCard
            title="Informasi Penanganan Hama"
            content="Cara terbaik untuk mengendalikan hama dan penyakit ialah selalu pencegahan daripada intervensi. Penanam bayam harus mempertimbangkan langkah-langkah berikut:

          Disarankan menggunakan benih bersertifikat. Dalam kebanyakan kasus, petani harus memilih hibrida yang memiliki ketahanan terhadap bolting dan Bulai.
          Perkecambahan benih yang rendah atau laju pembibitan yang tidak tepat akan mempercepat efek negatif hama dan penyakit.
          Pemupukan dan/atau Irigasi yang tidak memadai akan mempercepat efek negatif.
          Langkah-langkah pengendalian bahan kimia diizinkan hanya setelah berkonsultasi dengan ahli agronomi berlisensi setempat.
          Rotasi tanaman dapat diterapkan untuk mengendalikan beberapa penyakit."
          />
          


          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfoDetailRiwayatTanaman;
