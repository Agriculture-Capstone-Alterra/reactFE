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
import axios from "axios";
import Pagination from "../../../components/Pagination/Pagination";

const ListProduct = () => {
  const itemsPerPage = 10;
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [currentData, setCurrentData] = useState([]);
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

  const deleteProduct = (id) => {
    // console.log(id);
    axiosWithAuth
      .get(`plant-products/${id}`)
      .then((result) => {
        const images = result.data.data.images;
        images.map((item) => {
          axiosWithAuth
            .delete(`plant-product-images/${item.id}`)
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log("Error :", error);
            });
        });
        axiosWithAuth
          .delete(`plant-products/${id}`)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axiosWithAuth
      .get("plant-products")
      .then((result) => {
        // console.log(result.data.data);
        setProduct(result.data.data);
        setFilterProduct(result.data.data);
        setCurrentData(result.data.data);
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
      setCurrentData(dataFilter);
    }
    // console.log(filterProduct);
  }, [filter, filterProduct]);

  const paginationProps = {
    dataList: currentData,
    itemsPerPage,
    setCurrentData: setFilterProduct,
    numberingData: true,
  };

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
                        idProduct={item.id}
                        product={item}
                        changeIdDetailProduct={changeIdDetailProduct}
                        deleteProduct={deleteProduct}
                      />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <Pagination {...paginationProps} />
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
