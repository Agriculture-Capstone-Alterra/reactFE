import "./style.module.css";

const FilterProduct = () => {
  const product = ["All", "Bibit", "Benih"];

  const cekValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <>
      <div>
        <p
          className="fw-semibold"
          style={{ color: "#111827", fontSize: "16px" }}
        >
          Filters
        </p>
        <hr />
        <p className="fw-semibold" style={{ color: "#9CA3AF" }}>
          Jenis Tanaman
        </p>
        <div>
          {product.map((item, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="filterProduct"
                id={`filterProduct${index}`}
                value={item}
                onChange={(e) => cekValue(e)}
              />
              <label
                className="form-check-label"
                htmlFor={`filterProduct${index}`}
              >
                {item}
              </label>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
};

export default FilterProduct;
