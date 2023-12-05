import React, { useState } from "react";
import ModalTrigger from "../Modal/ModalTrigger";
import TrashIcon from "../../assets/trash.svg";
import ViewIcon from "../../assets/view-icon.svg";

const ImgCard = ({ images, deleteImgModalName, handleDeleteClick }) => {
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
        src={images} // Gunakan props 'images' sebagai sumber gambar
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
         <ModalTrigger
            modalTarget={deleteImgModalName} // Pastikan variabel ini didefinisikan dan diteruskan dari komponen induk
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => handleDeleteClick(item)} // Perhatikan 'item', pastikan variabel ini didefinisikan dan diteruskan dari komponen induk
          >
            <img
              src={ViewIcon}
              alt="View Icon"
              className="ml-2"
              width="16"
              height="16"
            />
          </ModalTrigger>
          <ModalTrigger
            modalTarget={deleteImgModalName} // Pastikan variabel ini didefinisikan dan diteruskan dari komponen induk
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => handleDeleteClick(item)} // Perhatikan 'item', pastikan variabel ini didefinisikan dan diteruskan dari komponen induk
          >
            <img
              src={TrashIcon}
              alt="Delete Icon"
              className="ml-2"
              width="16"
              height="16"
            />
          </ModalTrigger>
        </div>
      )}
    </div>
  );
};

export default ImgCard;
