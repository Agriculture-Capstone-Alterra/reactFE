import "./Topbar.css";
import msgTopbar from "../../assets/msgTopbar.svg";
import notifTopbar from "../../assets/notifTopbar.svg";
import profilTopbar from "../../assets/profilTopbar.svg";
import { useState } from "react";

const Topbar = ({pagetitle}) => {

  return (
    <>
      <div className="topbar-parent">
        <nav className="topbar-children">
          <div className="d-flex topbar-children2">
            <a className="navbar-brand topbar-title p-2">{pagetitle}</a>
            <div className="topbar-rightgroup">
              <img className="" src={profilTopbar} alt="" />
              <p className="text-removemargin fonts20 fontw600">Admin</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Topbar;
