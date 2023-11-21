import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import InfoDetailRiwayatTanaman from "./pages/RiwayatMenanam/InfoDetailRiwayatTanaman/InfoDetailRiwayatTanaman";
import RiwayatMenanam from "./pages/RiwayatMenanam/RiwayatMenanam/RiwayatMenanam";
import ListTanaman from "./pages/RiwayatMenanam/ListTanaman/ListTanaman";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/riwayat-menanam" element={<RiwayatMenanam />} />
        <Route path="/list-tanaman" element={<ListTanaman />} />
        <Route
          path="/info-detail-riwayat-tanaman"
          element={<InfoDetailRiwayatTanaman />}
        />
        <Route path="/testpage" element={<TestPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
