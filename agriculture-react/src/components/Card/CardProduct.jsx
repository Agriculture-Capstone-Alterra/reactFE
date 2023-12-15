/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./CardProduct.module.css";
import { MdOutlineModeEditOutline } from "react-icons/md";
import aloe from "../../assets/img/aloe.png";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import ModalTrigger from "../Modal/ModalTrigger";
import "./CustomDot.css";
const CardProduct = ({ changeIdDetailProduct }) => {
  const deleteModalName = "deletaDataTanaman";
  return (
    <>
      <div className={styles.cardProduct}>
        <Carousel autoPlay={true} showArrows={false} showThumbs={false}>
          <div className="mb-5">
            <img
              src={aloe}
              style={{ cursor: "pointer" }}
              onClick={() => changeIdDetailProduct(1)}
              alt=""
              data-bs-toggle="modal"
              data-bs-target={`#product${1}`}
            />
          </div>
          <div className="mb-5">
            <img
              src={aloe}
              style={{ cursor: "pointer" }}
              onClick={() => changeIdDetailProduct(1)}
              alt=""
              data-bs-toggle="modal"
              data-bs-target={`#product${1}`}
            />
          </div>
        </Carousel>

        <div
          className={`${styles.cardInfo}`}
          onClick={() => changeIdDetailProduct(1)}
          data-bs-toggle="modal"
          data-bs-target={`#product${1}`}
        >
          <p className="fonts16 fontw600">Bibit Aloe</p>
          <p className="fonts12 fontw600" style={{ color: "#10B981" }}>
            Tersedia : 1100
          </p>
          <p className="fonts12 fontw600" style={{ color: "#3B82F6" }}>
            Sudah Terjual : 1100
          </p>
          <p className="fonts12 fontw600">Harga Pokok : 70.000/kg</p>
          <p className="fonts12 fontw600">Harga Jual : 80.000/kg</p>
        </div>
        <div className={`mt-3 ${styles.footerCard}`}>
          <Link
            to={"/menanam-tanaman"}
            className={`btn btn-outline-primary`}
            style={{ whiteSpace: "nowrap" }}
          >
            <MdOutlineModeEditOutline />
            Edit
          </Link>
          {/* <button
            className={`btn btn-outline-danger`}
            onClick={() => console.log("Oke")}
          >
            Hapus
          </button> */}
          <ModalTrigger
            modalTarget={deleteModalName}
            className={`btn btn-outline-danger`}
          >
            Hapus
          </ModalTrigger>
        </div>
      </div>
      <Modal
        id={deleteModalName}
        title="Hapus Data Tanaman"
        content={
          <p className="text-center">
            Apakah anda yakin akan mengapus data tanaman?
          </p>
        }
        onCancel={() => {}}
        onSubmit={() => console.log("Oke")}
        type="delete"
      />
    </>
  );
};

export default CardProduct;
