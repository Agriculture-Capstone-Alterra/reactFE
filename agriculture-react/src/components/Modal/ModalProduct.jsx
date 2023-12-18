/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import padi from "../../assets/img/Padi.png";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import axiosWithAuth from "../../api/axios";
const ModalProduct = ({ id, idProduct }) => {
  const [detailProduct, setDetailProduct] = useState({});
  const [imagesProduct, setImagesProduct] = useState([]);
  useEffect(() => {
    axiosWithAuth
      .get(`plant-products/${idProduct}`)
      .then((result) => {
        console.log(result);
        setDetailProduct(result.data.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, [idProduct]);

  useEffect(() => {
    setImagesProduct(detailProduct.images || []);
  }, [detailProduct]);
  return (
    <>
      <div
        className="modal modal-fade"
        tabIndex="-1"
        id={id}
        aria-labelledby={`${id}Label`}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="row">
              <div className="col-4 p-3" style={{ backgroundColor: "#F3F4F6" }}>
                <Carousel autoPlay={true} showArrows={false} showThumbs={false}>
                  {imagesProduct.length > 0 ? (
                    imagesProduct.map((item, index) => (
                      <div className="mb-5" key={index}>
                        <img
                          src={item.image_path}
                          style={{
                            width: "100%",
                            height: "204px",
                            borderRadius: "20px",
                          }}
                          alt=""
                        />
                      </div>
                    ))
                  ) : (
                    <div className="mb-5">
                      <img src={padi} width={"100%"} alt="" />
                    </div>
                  )}
                </Carousel>
              </div>
              <div className="col-8 p-3 px-5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="fonts24 fontw800">Detail Tanaman</div>
                  <div
                    style={{
                      backgroundColor: "#51AB8C",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    data-bs-dismiss="modal"
                    onClick={() => {}}
                  >
                    <RxCross2 />
                  </div>
                </div>
                <div className="mt-2">
                  <div className="form-group mb-3">
                    <label
                      className="form-label fontw600 fonts16"
                      htmlFor="namatanaman"
                    >
                      Nama Tanaman
                    </label>
                    <input
                      type="text"
                      name="namatanaman"
                      id="namatanaman"
                      className="form-control"
                      readOnly
                      value={detailProduct.name}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label
                          className="form-label fontw600 fonts16"
                          htmlFor="namatanaman"
                        >
                          Satuan Dasar
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          disabled
                        >
                          <option value={detailProduct.unit}>
                            {detailProduct.unit}
                          </option>
                        </select>
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
                        <input
                          type="number"
                          name="tersedia"
                          id="tersedia"
                          className="form-control"
                          readOnly
                          value={detailProduct.stock}
                        />
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
                        <input
                          type="number"
                          name="terjual"
                          id="terjual"
                          className="form-control"
                          readOnly
                          value={detailProduct.sold}
                        />
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
                        <input
                          type="number"
                          name="hargaPokok"
                          id="hargaPokok"
                          className="form-control"
                          readOnly
                          value={
                            detailProduct.cost_price
                              ? detailProduct.cost_price.toLocaleString(
                                  "id-ID",
                                  {
                                    maximumFractionDigits: 0,
                                  }
                                )
                              : ""
                          }
                        />
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
                        <input
                          type="number"
                          name="hargaJual"
                          id="hargaJual"
                          className="form-control"
                          readOnly
                          value={
                            detailProduct.sales_price
                              ? detailProduct.sales_price.toLocaleString(
                                  "id-ID",
                                  {
                                    maximumFractionDigits: 0,
                                  }
                                )
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label
                          className="form-label fontw600 fonts16"
                          htmlFor="namatanaman"
                        >
                          Jenis Tanaman
                        </label>
                        <br />
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="satuanDasar"
                            id="bibit"
                            defaultValue="bibit"
                            checked={detailProduct.plant_type === "bibit"}
                          />
                          <label className="form-check-label" htmlFor="bibit">
                            Bibit
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="satuanDasar"
                            id="benih"
                            defaultValue="benih"
                            checked={detailProduct.plant_type === "benih"}
                          />
                          <label className="form-check-label" htmlFor="benih">
                            Benih
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label
                      className="form-label fontw600 fonts16"
                      htmlFor="namatanaman"
                    >
                      Deskripsi Tanaman
                    </label>
                    <textarea
                      name="deskripsiTanaman"
                      id="deskripsiTanaman"
                      rows="5"
                      className="form-control"
                      value={detailProduct.description}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProduct;
