/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Invalid from "../../../components/Invalid";
import Select from "../../../components/Select";
import Layout from "../../../layout/Layout";
import TextArea from "../../../components/Textarea";
import DragFile from "../../../components/DragFile";
import FormLayout from "../../../components/FormLayout";
import axiosWithAuth from "../../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataProduct, setDataProduct] = useState({
    name: "",
    unit: "",
    stock: "",
    soldOut: "",
    costPrice: "",
    salesPrice: "",
    plantType: "",
    description: "",
  });
  const [imageProduct, setImageProduct] = useState([]);
  const [oldImageProduct, setOldImageProduct] = useState([]);
  const dataSelect = [
    {
      label: "Kg",
      value: "Kg",
    },
    {
      label: "Gram",
      value: "Gram",
    },
    {
      label: "Liter",
      value: "Liter",
    },
  ];
  const dataRadio = ["Bibit", "Benih"];
  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setDataProduct({
      ...dataProduct,
      [name]: value,
    });
    // console.log(dataProduct);
  };

  const deleteImageProduct = (id) => {
    const dataImage = imageProduct.filter((item) => item.id !== id);
    setImageProduct(dataImage);
  };

  const handleSubmit = async () => {
    console.log(dataProduct);
    const data = {
      cost_price: parseInt(dataProduct.costPrice),
      description: dataProduct.description,
      name: dataProduct.name,
      plant_type: dataProduct.plantType,
      sales_price: parseInt(dataProduct.salesPrice),
      sold: parseInt(dataProduct.soldOut),
      stock: parseInt(dataProduct.stock),
      unit: dataProduct.unit,
    };

    try {
      const productResponse = await axiosWithAuth.put(
        `plant-products/${id}`,
        data
      );
      // console.log(productResponse);
      const product_id = id;
      const productFormData = new FormData();
      for (const image of imageProduct) {
        const base64toRes = await fetch(image.src);
        const base64toBlob = await base64toRes.blob();
        productFormData.append("plant_product_id", product_id);
        productFormData.append("image_files", base64toBlob);
      }
      oldImageProduct.map((item) => {
        axiosWithAuth
          .delete(`plant-product-images/${item.id}`)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log("Error :", error);
          });
      });
      const productImageResponse = await axiosWithAuth.post(
        `plant-product-images/${product_id}`,
        productFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("produk-lokal");
    } catch (error) {
      console.log("Error :", error);
    }
  };
  const getDataProduct = async () => {
    try {
      const response = await axiosWithAuth.get(`plant-products/${id}`);
      const product = response.data.data;
      console.log(product);
      const images = await product.images.map((item) => {
        const imagePath = item.image_path;
        const fileName = imagePath.substring(imagePath.lastIndexOf("/") + 1);
        return {
          id: item.id,
          name: fileName,
          src: item.image_path,
        };
      });
      setDataProduct({
        name: product.name,
        unit: product.unit,
        stock: product.stock,
        soldOut: product.sold,
        costPrice: product.cost_price,
        salesPrice: product.sales_price,
        plantType: product.plant_type,
        description: product.description,
      });
      setImageProduct(images);
      setOldImageProduct(images);
      console.log(images);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  useEffect(() => {
    getDataProduct();
  }, [id]);
  useEffect(() => {
    console.log(imageProduct);
  }, [imageProduct]);

  const breadcrumbsobjectexample = [
    {
      crumblink: "/produk-lokal",
      crumbname: "Produk Lokal",
    },
    {
      crumblink: "/produk-lokal/tambah-produk",
      crumbname: "Tambah Produk",
    },
  ];
  return (
    <>
      <Layout pagetitle={"Produk Lokal"} breadcrumbs={breadcrumbsobjectexample}>
        <div
          className="mt-2"
          style={{ padding: "0px 0px 30px 30px", marginRight: "0" }}
        >
          <h4 className="fontw800">Tambah Produk</h4>
          <div className="mt-5">
            <div className="form-group mb-3">
              <label className="form-label fontw600" htmlFor="name">
                Nama Tanaman
              </label>
              <Input
                id="name"
                name="name"
                value={dataProduct.name}
                onChange={(e) => onChangeValue(e)}
                placeholder="Masukkan nama tanaman"
              />
              <Invalid errormsg={"Tolong masukkan nama tanaman."} />
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="form-group mb-3">
                  <label className="form-label fontw600" htmlFor="unit">
                    Satuan Dasar
                  </label>
                  <Select
                    id="unit"
                    name="unit"
                    value={dataProduct.unit}
                    options={dataSelect}
                    title={"Pilih Satuan Dasar"}
                    onChange={(e) => onChangeValue(e)}
                  />
                  <Invalid errormsg={"Tolong masukkan satuan."} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label
                    className="form-label fontw600 fonts16"
                    htmlFor="stock"
                  >
                    Tersedia
                  </label>
                  <Input
                    id="stock"
                    name="stock"
                    value={dataProduct.stock}
                    onChange={(e) => onChangeValue(e)}
                    placeholder="Masukkan jumlah"
                  />
                  <Invalid errormsg={"Tolong masukkan jumlah stock."} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label
                    className="form-label fontw600 fonts16"
                    htmlFor="soldOut"
                  >
                    Sudah Terjual
                  </label>
                  <Input
                    id="soldOut"
                    name="soldOut"
                    value={dataProduct.soldOut}
                    onChange={(e) => onChangeValue(e)}
                    placeholder="Masukkan jumlah"
                  />
                  <Invalid errormsg={"Tolong masukkan jumlah sold."} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label
                    className="form-label fontw600 fonts16"
                    htmlFor="costPrice"
                  >
                    Harga Pokok
                  </label>
                  <Input
                    id="costPrice"
                    name="costPrice"
                    value={dataProduct.costPrice}
                    onChange={(e) => onChangeValue(e)}
                    placeholder="Masukkan harga pokok"
                  />
                  <Invalid errormsg={"Tolong masukkan harga pokok."} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label
                    className="form-label fontw600 fonts16"
                    htmlFor="salesPrice"
                  >
                    Harga Jual
                  </label>
                  <Input
                    id="salesPrice"
                    name="salesPrice"
                    value={dataProduct.salesPrice}
                    onChange={(e) => onChangeValue(e)}
                    placeholder="Masukkan harga pokok"
                  />
                  <Invalid errormsg={"Tolong masukkan harga jual."} />
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="form-label fontw600" htmlFor="description">
                Jenis Tanaman
              </label>
              <br />
              {dataRadio.map((item, index) => (
                <div className="form-check form-check-inline" key={index}>
                  <Input
                    type="radio"
                    value={item.toLowerCase()}
                    name="plantType"
                    className="form-check-input"
                    id={item.toLowerCase()}
                    onChange={(e) => onChangeValue(e)}
                    checked={item.toLowerCase() === dataProduct.plantType}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={item.toLowerCase()}
                  >
                    {item}
                  </label>
                </div>
              ))}
              <Invalid errormsg={"Tolong masukkan deskripsi tanaman."} />
            </div>
            <div className="form-group mb-3">
              <label className="form-label fontw600" htmlFor="description">
                Deskripsi Tanaman
              </label>
              <TextArea
                id="description"
                name="description"
                value={dataProduct.description}
                onChange={(e) => onChangeValue(e)}
                placeholder="Masukkan deskripsi tanaman"
                rows={5}
              />
              <Invalid errormsg={"Tolong masukkan deskripsi tanaman."} />
            </div>
            <div className="form-group mb-3">
              <label className="form-label fontw600" htmlFor="imageProduct">
                Gambar
              </label>
              <DragFile
                name={"gambarsaran"}
                value={imageProduct}
                setValue={setImageProduct}
                onDelete={deleteImageProduct}
              />
              <Invalid errormsg={"Tolong masukkan gambar product."} />
            </div>
          </div>
          <div className="form-group row justify-content-end">
            <div className="col-auto m12">
              <button
                type="button"
                className="btn btn-outline-green"
                onClick={() => {navigate("/produk-lokal")}}
              >
                Batal
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-green col-auto m12"
              onClick={() => handleSubmit()}
            >
              Tambah
            </button>
          </div>
          {/* <FormLayout onSubmit={() => handleSubmit()}>
          </FormLayout> */}
        </div>
      </Layout>
    </>
  );
};

export default EditProduct;
