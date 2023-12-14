/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "../../../components/Input";
import Invalid from "../../../components/Invalid";
import Select from "../../../components/Select";
import Layout from "../../../layout/Layout";
import TextArea from "../../../components/Textarea";
import DragFile from "../../../components/DragFile";
import FormLayout from "../../../components/FormLayout";

const TambahProduct = () => {
  const [dataProduct, setDataProduct] = useState({
    namaTanaman: "",
    satuanDasar: "",
    tersedia: "",
    terjual: "",
    hargaPokok: "",
    hargaJual: "",
    jenisTanaman: "",
    deskripsiTanaman: "",
  });
  const [imageProduct, setImageProduct] = useState([]);
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
  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setDataProduct({
      ...dataProduct,
      [name]: value,
    });
    console.log(dataProduct);
  };
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
          <FormLayout onSubmit={() => {}}>
            <div className="mt-5">
              <div className="form-group mb-3">
                <label className="form-label fontw600" htmlFor="namatanaman">
                  Nama Tanaman
                </label>
                <Input
                  id="namaTanaman"
                  name="namaTanaman"
                  value={dataProduct.namaTanaman}
                  onChange={(e) => onChangeValue(e)}
                  placeholder="Masukkan nama tanaman"
                />
                <Invalid errormsg={"Tolong masukkan nama tanaman."} />
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group mb-3">
                    <label
                      className="form-label fontw600"
                      htmlFor="satuanDasar"
                    >
                      Satuan Dasar
                    </label>
                    <Select
                      id="satuanDasar"
                      name="satuanDasar"
                      value={dataProduct.satuanDasar}
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
                      htmlFor="tersedia"
                    >
                      Tersedia
                    </label>
                    <Input
                      id="tersedia"
                      name="tersedia"
                      value={dataProduct.tersedia}
                      onChange={(e) => onChangeValue(e)}
                      placeholder="Masukkan jumlah"
                    />
                    <Invalid errormsg={"Tolong masukkan jumlah tersedia."} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label
                      className="form-label fontw600 fonts16"
                      htmlFor="terjual"
                    >
                      Sudah Terjual
                    </label>
                    <Input
                      id="terjual"
                      name="terjual"
                      value={dataProduct.terjual}
                      onChange={(e) => onChangeValue(e)}
                      placeholder="Masukkan jumlah"
                    />
                    <Invalid errormsg={"Tolong masukkan jumlah terjual."} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label
                      className="form-label fontw600 fonts16"
                      htmlFor="hargaPokok"
                    >
                      Harga Pokok
                    </label>
                    <Input
                      id="hargaPokok"
                      name="hargaPokok"
                      value={dataProduct.hargaPokok}
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
                      htmlFor="hargaJual"
                    >
                      Harga Jual
                    </label>
                    <Input
                      id="hargaJual"
                      name="hargaJual"
                      value={dataProduct.hargaJual}
                      onChange={(e) => onChangeValue(e)}
                      placeholder="Masukkan harga pokok"
                    />
                    <Invalid errormsg={"Tolong masukkan harga jual."} />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label
                  className="form-label fontw600"
                  htmlFor="deskripsiTanaman"
                >
                  Deskripsi Tanaman
                </label>
                <TextArea
                  id="deskripsiTanaman"
                  name="deskripsiTanaman"
                  value={dataProduct.deskripsiTanaman}
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
                />
                <Invalid errormsg={"Tolong masukkan gambar product."} />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-auto m12">
                <button
                  type="button"
                  className="btn btn-outline-green"
                  onClick={() => {}}
                >
                  Batal
                </button>
              </div>
              <button type="submit" className="btn btn-green col-auto m12">
                Tambah
              </button>
            </div>
          </FormLayout>
        </div>
      </Layout>
    </>
  );
};

export default TambahProduct;
