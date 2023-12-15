import React from 'react';


const Filter = ({ selectedTeknologi, selectedJenisTanaman, setSelectedTeknologi, setSelectedJenisTanaman, resetFilters }) => {
  const teknologi = ["Hidroponik", "Aeroponik"];
  const jenisTanaman = ["Bunga", "Tanaman Hias", "Umbi - umbian", "Kacang - kacangan", "Pohon - pohonan", "Sayuran"];

  const cekValue = (e) => {
    const { name, value } = e.target;

    if (name === 'teknologi') {
      setSelectedTeknologi(value);
    } else if (name === 'tanaman') {
      setSelectedJenisTanaman(value);
    }
  };

  const handleResetFilters = () => {
    setSelectedTeknologi('');
    setSelectedJenisTanaman('');
  };

  return (
    <>
      <div>
        <p className="fw-semibold" style={{ color: "#111827", fontSize: "16px" }}>
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
                checked={selectedTeknologi === item}
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
                checked={selectedJenisTanaman === item}
              />
              <label className="form-check-label" htmlFor={`tanaman${index}`}>
                {item}
              </label>
            </div>
          ))}
        </div>
        <hr />
        <button
          className='btn-cancel'
          style={{
            color: "#F9FAFB",
            borderRadius: "5px",
            background: "#51AB8C",
            border: "1px solid #51AB8C",  
            transition: "background-color 0.3s ease, border-color 0.3s ease", 
          }}
        >
          Cancel Filter
        </button>
      </div>
    </>
  );
};

export default Filter;
