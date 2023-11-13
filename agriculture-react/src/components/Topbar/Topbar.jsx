import "./Topbar.css";
import msgTopbar from "../../assets/msgTopbar.svg";
import notifTopbar from "../../assets/notifTopbar.svg";
import profilTopbar from "../../assets/profilTopbar.svg";
import { useState } from "react";

const Topbar = () => {
  const [msgCounter, setMsgCounter] = useState(4);
  const [notifCounter, setNotifCounter] = useState(0);
  const [imageProfil, setImageProfile] = useState(null); //state nanti isinya url atau data foto

  return (
    <>
      <div className="topbar-parent">
        <nav className="navbar justify-content-end topbar-children">
          <div className="d-flex ">
            <a className="navbar-brand topbar-title p-2">Dashboard</a>
            <div className="">
              <button className="topbar-icon btn btn-link p-2">
                <img className="" src={msgTopbar} alt="" />
                <span class="position-absolute topbar-counter bg-danger rounded text-white">
                  {msgCounter}
                </span>
              </button>
              <button className="topbar-icon btn btn-link p-2">
                <img className="" src={notifTopbar} alt="" />
                <span class="position-absolute topbar-counter bg-danger rounded text-white">
                  {msgCounter}
                </span>
              </button>
              <img className="ms-4" src={imageProfil || profilTopbar} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Topbar;
