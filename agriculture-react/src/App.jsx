import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";
import RiwayatMenanam from "./pages/RiwayatMenanam/RiwayatMenanam/RiwayatMenanam";
import RiwayatListTanaman from "./pages/RiwayatMenanam/ListTanaman/ListTanaman";
import InfoDetailRiwayatTanaman from "./pages/RiwayatMenanam/InfoDetailRiwayatTanaman/InfoDetailRiwayatTanaman";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/riwayat-menanam" element={<RiwayatMenanam />} />
        <Route path="riwayat-menanam/list-tanaman" element={<RiwayatListTanaman />} />
        <Route
          path="riwayat-menanam/list-tanaman/info-detail-riwayat-tanaman"
          element={<InfoDetailRiwayatTanaman />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
