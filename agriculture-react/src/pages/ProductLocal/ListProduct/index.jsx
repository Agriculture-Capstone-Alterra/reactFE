/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Layout from "../../../layout/Layout";
import styles from "./style.module.css";
import { FaPlus } from "react-icons/fa6";
import CardProduct from "../../../components/Card/CardProduct";
import { useEffect, useState } from "react";
import ModalProduct from "../../../components/Modal/ModalProduct";
import FilterProduct from "../../../components/Filter/FilterProduct";
import axiosWithAuth from "../../../api/axios";

const ListProduct = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [idDetailProduct, setIdDetailProduct] = useState(0);
  const [filter, setFilter] = useState("");
  const breadcrumbsobjectexample = [
    {
      crumblink: "/produk-lokal",
      crumbname: "Product Lokal",
    },
  ];

  const changeFilter = (e) => {
    if (e.target.value == "All") {
      setFilter("");
    } else {
      setFilter(e.target.value);
    }
    console.log(filter);
  };

  const changeIdDetailProduct = (id) => {
    setIdDetailProduct(id);
  };

  useEffect(() => {
    axiosWithAuth
      .get("plant-products")
      .then((result) => {
        // console.log(result.data.data);
        setProduct(result.data.data);
        setFilterProduct(result.data.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, [product]);

  useEffect(() => {
    let dataProduct = product;
    if (filter === "") {
      setFilterProduct(dataProduct);
    } else {
      const dataFilter = dataProduct.filter(
        (item) => item.plant_type === filter.toLowerCase()
      );
      setFilterProduct(dataFilter);
    }
    // console.log(filterProduct);
  }, [filter, filterProduct]);

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
                {filterProduct.length > 0 ? (
                  filterProduct.map((item, index) => (
                    <div className="col-md-3 mt-3" key={index}>
                      <CardProduct
                        product={item}
                        changeIdDetailProduct={changeIdDetailProduct}
                      />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <FilterProduct changeFilter={changeFilter} />
            </div>
          </div>
        </div>
      </Layout>
      <ModalProduct
        id={`product${idDetailProduct}`}
        idProduct={idDetailProduct}
      />
    </>
  );
};

export default ListProduct;
