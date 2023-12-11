import { useState } from "react";
import ImgModal from "../../components/ImgModal/ImgModal";
import Layout from "../../layout/Layout";
import { Bayam } from "../../assets";
import Carousel from "react-multi-carousel";
export default function TestPage() {
  const headers = ["Ngetest ioni satu", "kedua", "Ketiga", "keempat"];

  // begin : dummy data untuk data pada chart
  const generateRandomData = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      month: (index + 1).toString(),
      value: Math.floor(Math.random() * 451),
    }));
  };

  const data = [
    {
      dataSetName: "bulan ini",
      data: generateRandomData(9),
      color: "#4B567E",
    },
    {
      dataSetName: "bulan lalu",
      data: generateRandomData(9),
      color: "#847042",
    },
  ];
  //  end : dummy data untuk data pada chart

  // begin : dummy data untuk breadcrumb
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
  //end : dummy data untuk breadcrumbs

  // begin : yang dibutuhkan untuk menggunakan imgmodal
  const [modalopen, setModalOpen] = useState(false)
  const [imgmodalcurrentindex, setImgModalCurrentIndex] = useState(0)
  function handleonClick(key){
    console.log(key)
    setImgModalCurrentIndex(key)
    setModalOpen(!modalopen)
  }
  const dataimage = [
    {
      link:"https://loremflickr.com/640/480/abstract",
      datecreated:"20-20-2907"
    },
    {
      link:"https://loremflickr.com/640/480/abstract",
      datecreated:"20-20-2907"
    },
    {
      link:"https://loremflickr.com/640/480/nightlife",
      datecreated:"20-20-2907"
    },
    {
      link:"https://loremflickr.com/640/480/fashion",
      datecreated:"20-20-2907"
    }
  ]
  // end : yang dibutuhkan untuk menggunakan imgmodal


  return (
    <>
      <ImgModal imgclickedindex={imgmodalcurrentindex} imgdatas={dataimage} modalstatus={modalopen} modalcloser={handleonClick} />
      <Layout pagetitle={"Nama Header"} breadcrumbs={breadcrumbsobjectexample}>
        {/* begin main content */}
        <div>
          {/* begin : contoh pemaanggil imgmodal */}
          <button onClick={()=>handleonClick(1)} >Show modal 1</button>
          <button onClick={()=>handleonClick(2)} >Show modal 2</button>
          <button onClick={()=>handleonClick(3)} >Show modal 3</button>
          <button onClick={()=>handleonClick(4)} >Show modal 4</button>
          {/* end: contoh pemanggil imgmodal */}
        </div>
        {/* end main content */}
      </Layout>
    </>
  );
}
