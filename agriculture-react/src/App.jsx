import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";
import TambahTanaman from "./pages/MenanamTanaman/TambahTanaman";
import ListTanaman from "./pages/MenanamTanaman/ListTanaman";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/menanam-tanaman/tambah-tanaman" element={<TambahTanaman />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
