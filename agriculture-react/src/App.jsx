import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TableTanaman from "./pages/MenanamTanaman/TableTanaman/indeks";
import TestPage from "./pages/TestPage/TestPage";
import PengingatTanaman from "./pages/PengingatMerawatTanaman/PengingatTanaman";
import TambahTanaman from "./pages/MenanamTanaman/TambahTanaman";
import RiwayatMenanam from "./pages/RiwayatMenanam/RiwayatMenanam/RiwayatMenanam";
import RiwayatListTanaman from "./pages/RiwayatMenanam/ListTanaman/ListTanaman";
import InfoDetailRiwayatTanaman from "./pages/RiwayatMenanam/InfoDetailRiwayatTanaman/InfoDetailRiwayatTanaman";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import PrivateRoute from "./privateroute/PrivateRoute";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailTanaman from "./pages/MenanamTanaman/DetailTanaman";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          {/* punya sfutra */}
          <Route path="/testpaage" element={<TestPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landingpage" element={<LandingPage />} />
          {/* end punya safutra */}
        </Route>

        {/* Start Riwayat Menanam Pages */}
        <Route path="/riwayat-menanam" element={<RiwayatMenanam />} />
        <Route
          path="riwayat-menanam/list-tanaman"
          element={<RiwayatListTanaman />}
        />
        <Route
          path="riwayat-menanam/list-tanaman/info-detail-riwayat-tanaman"
          element={<InfoDetailRiwayatTanaman />}
        />
        {/* End Riwayat Menanam Pages */}

        <Route path="/menanam-tanaman" element={<TableTanaman />} />
        {/* <Route path="/" element={<TestPage />} /> */}
        <Route
          path="/menanam-tanaman/tambah-tanaman"
          element={<TambahTanaman />}
        />
        <Route
          path="/menanam-tanaman/detail-menanam-tanaman"
          element={<DetailTanaman />}
        />
        <Route path="/pengingat-tanaman" element={<PengingatTanaman />} />
        <Route path="/pengignat-tanaman/tambah-pengingat" element={<PengingatTanaman />}/>
        <Route path="/pengignat-tanaman/edit-pengingat" element={<PengingatTanaman />}/>


        <Route path="/testpage" element={<TestPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/errorpage" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
