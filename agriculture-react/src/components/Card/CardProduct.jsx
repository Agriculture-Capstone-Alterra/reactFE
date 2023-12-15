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
const CardProduct = ({ product, changeIdDetailProduct }) => {
  const deleteModalName = "deletaDataTanaman";
  return (
    <>
      <div className={styles.cardProduct}>
        <div className={styles.imageCarousel}>
          <Carousel autoPlay={true} showArrows={false} showThumbs={false}>
            {product.images.length > 0 ? (
              product.images.map((item, index) => (
                <div className="mb-5" key={index}>
                  <img
                    src={item.image_path}
                    style={{ cursor: "pointer" }}
                    onClick={() => changeIdDetailProduct(product.id)}
                    className={styles.imageCarousel}
                    alt=""
                    data-bs-toggle="modal"
                    data-bs-target={`#product${product.id}`}
                  />
                </div>
              ))
            ) : (
              <div className="mb-5">
                <img
                  src={aloe}
                  style={{ cursor: "pointer" }}
                  onClick={() => changeIdDetailProduct(product.id)}
                  alt=""
                  data-bs-toggle="modal"
                  data-bs-target={`#product${product.id}`}
                />
              </div>
              // <></>
            )}
          </Carousel>
        </div>
        <div
          className={`mt-5 ${styles.cardInfo}`}
          onClick={() => changeIdDetailProduct(product.id)}
          data-bs-toggle="modal"
          data-bs-target={`#product${product.id}`}
        >
          <p className="fonts16 fontw600">{product.name}</p>
          <p className="fonts12 fontw600" style={{ color: "#10B981" }}>
            Tersedia : {product.stock}
          </p>
          <p className="fonts12 fontw600" style={{ color: "#3B82F6" }}>
            Sudah Terjual : {product.sold}
          </p>
          <p className="fonts12 fontw600">
            Harga Pokok :{" "}
            {product.cost_price.toLocaleString("id-ID", {
              maximumFractionDigits: 0,
            })}
            /kg
          </p>
          <p className="fonts12 fontw600">
            Harga Jual :{" "}
            {product.sales_price.toLocaleString("id-ID", {
              maximumFractionDigits: 0,
            })}
            /kg
          </p>
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
