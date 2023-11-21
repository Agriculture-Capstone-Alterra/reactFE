import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TableTanaman from "./pages/MenanamTanaman/TableTanaman/indeks";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

import PengingatTanaman from "./pages/PengingatMerawatTanaman/PengingatTanaman";

import TambahTanaman from "./pages/MenanamTanaman/TambahTanaman";
import ListTanaman from "./pages/MenanamTanaman/ListTanaman";

import RiwayatMenanam from "./pages/RiwayatMenanam/RiwayatMenanam/RiwayatMenanam";
import RiwayatListTanaman from "./pages/RiwayatMenanam/ListTanaman/ListTanaman";
import InfoDetailRiwayatTanaman from "./pages/RiwayatMenanam/InfoDetailRiwayatTanaman/InfoDetailRiwayatTanaman";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/riwayat-menanam" element={<RiwayatMenanam />} />
          <Route path="riwayat-menanam/list-tanaman" element={<RiwayatListTanaman />} />
          <Route path="riwayat-menanam/list-tanaman/info-detail-riwayat-tanaman" element={<InfoDetailRiwayatTanaman />}/>

          <Route path="menanam-tanaman" element={<TableTanaman/>} />
          <Route path="/" element={<TestPage />} />
          <Route path="/menanam-tanaman/tambah-tanaman" element={<TambahTanaman />} />
          <Route path="/" element={<TestPage />} />
          <Route path="/pengingat-tanaman" element={<PengingatTanaman />} />
          <Route path="/list-tanaman" element={<ListTanaman />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/landingpage" element={<LandingPage/>} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
