import React, { useState } from "react";
import img from "../../assets/img/mawarputih.jpg";
import ModalTrigger from "../Modal/ModalTrigger";
import TrashIcon from "../../assets/img/icons/trash.svg";

const handleDeleteClick = (data) => {
    setModalData({ ...data });
  };


const ImgCard = ({ img }) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <div className="card" style={{ width: "104px", position: "relative" }}>
      <img
        src={img}
        style={{ height: "104px" }}
        className="card-img-top"
        alt="..."
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {showButtons && (
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="btn btn-primary"
            onClick={() => console.log("View clicked")}
          >
            View
          </button>
          <ModalTrigger
            modalTarget={deleteImgModalName}
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => handleDeleteClick(item)}
          >
            <img
              src={TrashIcon}
              alt="Edit Icon"
              className="me-2"
              width="20"
              height="20"
            />
          </ModalTrigger>
        </div>
      )}
    </div>
  );
};

export default ImgCard;
