import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { MdLogout, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const toggleSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <nav className="sidebar-logo text-decoration-none d-flex align-items-center">
        <img src="/sidebar-logo.png" alt="logo"></img>
        {sidebarOpen && <span className="sidebar-logo-text">Agriculture</span>}
      </nav>
      <hr />
      <ul className="sidebar-list nav nav-pills flex-column gap-1">
        {SidebarData.map((item, index) => (
          <li className="sidebar-item" key={index}>
            <Link
              to={item.path}
              className={`${
                item.path === activeLink
                  ? "nav-link sidebar-text active"
                  : "nav-link sidebar-text"
              }`}
              onClick={() => handleLinkClick(item.path)}
            >
              {item.icon}
              <span className="sidebar-item-text">{item.title}</span>
              <span className="tooltip">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="sidebar-list nav nav-pills flex-column mb-2">
        <li className="sidebar-item">
          <Link to="/login" className="nav-link sidebar-text">
            <MdLogout />
            <span className="sidebar-item-text">Logout</span>
            <span className="tooltip">Logout</span>
          </Link>
        </li>
      </ul>
      <button
        className="btn sidebar-toggle nav-link sidebar-text"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <MdArrowBackIosNew /> : <MdArrowForwardIos />}
      </button>
    </div>
  );
};

export default Sidebar;
