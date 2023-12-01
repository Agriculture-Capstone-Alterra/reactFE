import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
// import Logout from "../../authentication/Logout/Logout";

const Sidebar = () => {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("/");
  const navigate = useNavigate()
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const toggleSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };

  function handlelogout(){
    localStorage.removeItem('usertoken')
    navigate('/login')
  }

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <nav className="sidebar-logo text-decoration-none d-flex align-items-center">
        <img src="/sidebar-logo.png" alt="logo"></img>
        {sidebarOpen && <span className="sidebar-logo-text">Agriplant</span>}
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
          <button className="nav-link sidebar-text" onClick={handlelogout}>
            <MdLogout />
            <span className="sidebar-item-text">Logout</span>
            <span className="tooltip">Logout</span>
          </button>
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
