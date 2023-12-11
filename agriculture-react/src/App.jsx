import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";

import TableTanaman from "./pages/MenanamTanaman/TableTanaman/indeks";
import PengingatTanaman from "./pages/PengingatMerawatTanaman/PengingatTanaman";
import TambahPengingat from "./pages/PengingatMerawatTanaman/TambahPengingat";
import EditPengingat from "./pages/PengingatMerawatTanaman/EditPengingat";
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
import EditTanaman from "./pages/MenanamTanaman/EditTanaman";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          {/* punya sfutra */}
          <Route path="/testpaage" element={<TestPage />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landingpage" element={<LandingPage />} />
          {/* end punya safutra */}
          <Route
          path="/menanam-tanaman/tambah-tanaman"
          element={<TambahTanaman />}
          />
          <Route
            path="/menanam-tanaman/edit-tanaman/:id"
            element={<EditTanaman />}
          />
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
          path="/menanam-tanaman/detail-menanam-tanaman/:id"
          element={<DetailTanaman />}
        />
        <Route path="/pengingat-tanaman" element={<PengingatTanaman />} />
        <Route
          path="/pengingat-tanaman/tambah-pengingat"
          element={<TambahPengingat />}
        />
        <Route
          path="/pengingat-tanaman/edit-pengingat"
          element={<EditPengingat />}
        />

        <Route path="/testpage" element={<TestPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/errorpage" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
