import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";
import HistoryMenanam from "./pages/HistoryTanaman/HistoryMenanam/HistoryMenanam";
import InfoDetailRiwayatTanaman from "./pages/HistoryTanaman/InfoDetailRiwayatTanaman/InfoDetailRiwayatTanaman";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/history-tanaman" element={<HistoryMenanam />} />
        <Route
          path="/history-tanaman/list-tanaman/info-detail-riwayat-tanaman"
          element={<InfoDetailRiwayatTanaman />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
