import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdLogout, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

const Sidebar = () => {
  const pathLocation = useLocation();
  const currentPath = pathLocation.pathname;
  const [activeLink, setActiveLink] = useState(currentPath);
  const navigate = useNavigate();

  // Status sidebar dari localStorage
  const storedSidebarStatus = localStorage.getItem("sidebarOpen");
  const [sidebarOpen, setSidebarOpen] = useState(
    storedSidebarStatus ? JSON.parse(storedSidebarStatus) : true
  );

  const handleLinkClick = (path) => {
    const activeLink = path;
    setActiveLink(activeLink);

    // Jika sidebar sebelumnya ditutup, buka sidebar saat user mengeklik link
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
  };

  // Buka dan tutup sidebar
  const toggleSidebar = () => {
    const sidebarStatus = !sidebarOpen;
    setSidebarOpen(sidebarStatus);

    // Save sidebar status terakhir
    localStorage.setItem("sidebarOpen", JSON.stringify(sidebarStatus));
  };

  const handleLogout = () => {
    localStorage.removeItem("usertoken");
    navigate("/login");
  };

  // Update active link dari currentPath
  useEffect(() => {
    setActiveLink(currentPath);
  }, [currentPath]);

  // Root path untuk menentukan sidebar aktif
  const rootPath = currentPath.split("/")[1];

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
                rootPath === item.path.split("/")[1]
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
          <button className="nav-link sidebar-text" onClick={handleLogout}>
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
