/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Layout from "../../../layout/Layout";
import styles from "./style.module.css";
import { FaPlus } from "react-icons/fa6";
import CardProduct from "../../../components/Card/CardProduct";
import { useEffect, useState } from "react";
import ModalProduct from "../../../components/Modal/ModalProduct";
import FilterProduct from "../../../components/Filter/FilterProduct";

const ListProduct = () => {
  const [idDetailProduct, setIdDetailProduct] = useState(0);
  const breadcrumbsobjectexample = [
    {
      crumblink: "/produk-lokal",
      crumbname: "Product Lokal",
    },
  ];

  const changeIdDetailProduct = (id) => {
    setIdDetailProduct(id);
  };

  useEffect(() => {
    console.log(idDetailProduct);
  }, [idDetailProduct]);

  return (
    <>
      <Layout pagetitle={"Produk Lokal"} breadcrumbs={breadcrumbsobjectexample}>
        <div>
          <div className="row">
            <div>
              <Link
                to={"/produk-lokal/tambah-produk"}
                className={styles.tambahProduct}
              >
                <FaPlus /> Tambah Produk
              </Link>
            </div>
            <div className="col-md-9">
              <div className="row mt-5">
                <div className="col-md-3 mt-3">
                  <CardProduct changeIdDetailProduct={changeIdDetailProduct} />
                </div>
                <div className="col-md-3 mt-3">
                  <CardProduct changeIdDetailProduct={changeIdDetailProduct} />
                </div>
                <div className="col-md-3 mt-3">
                  <CardProduct changeIdDetailProduct={changeIdDetailProduct} />
                </div>
                <div className="col-md-3 mt-3">
                  <CardProduct changeIdDetailProduct={changeIdDetailProduct} />
                </div>
                <div className="col-md-3 mt-3">
                  <CardProduct changeIdDetailProduct={changeIdDetailProduct} />
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <FilterProduct />
            </div>
          </div>
        </div>
      </Layout>
      <ModalProduct id={`product${idDetailProduct}`} />
    </>
  );
};

export default ListProduct;
