import "./style.module.css";

const Filter = () => {
  const teknologi = ["Hidroponik", "Aeroponik"];
  const jenisTanaman = [
    "Bunga",
    "Tanaman Hias",
    "Umbi - umbian",
    "Kacang - kacangan",
    "Pohon - pohonan",
    "Sayuran",
  ];

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
          Teknologi
        </p>
        <div>
          {teknologi.map((item, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="teknologi"
                id={`teknologi${index}`}
                value={item}
                onChange={(e) => cekValue(e)}
              />
              <label className="form-check-label" htmlFor={`teknologi${index}`}>
                {item}
              </label>
            </div>
          ))}
        </div>
        <hr />
        <p className="fw-semibold" style={{ color: "#9CA3AF" }}>
          Jenis Tanaman
        </p>
        <div>
          {jenisTanaman.map((item, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="tanaman"
                id={`tanaman${index}`}
                value={item}
                onChange={(e) => cekValue(e)}
              />
              <label className="form-check-label" htmlFor={`tanaman${index}`}>
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
