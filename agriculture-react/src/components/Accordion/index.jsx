/* eslint-disable react/prop-types */
import styles from "./style.module.css";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
const Accordion = ({ children, title, onClick, isShowAccordion, style }) => {
  const defaultStyle = {
    backgroundColor: "#F3F4F6",
    width: "100%",
    borderColor: "#6B72801A",
  };
  return (
    <>
      <div className="card" style={style ? style : defaultStyle}>
        <div className="card-body">
          <div
            className="d-flex justify-content-between"
            style={{ cursor: "pointer" }}
            onClick={onClick}
          >
            <p
              className="user-select-none"
              style={{
                color: "#111827",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              {title}
            </p>
            <p
              className="d-flex align-items-center"
              style={{ color: "#4B5563" }}
            >
              {isShowAccordion ? <FaMinus /> : <FaPlus />}
            </p>
          </div>
          <div className={isShowAccordion ? styles.expand : styles.collapse}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
