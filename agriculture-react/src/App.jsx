import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";

import RiwayatMenanam from "./pages/RiwayatMenanam/RiwayatMenanam/RiwayatMenanam";
import ListTanaman from "./pages/RiwayatMenanam/ListTanaman/ListTanaman";
<<<<<<< HEAD
import InfoDetailRiwayatTanaman from "./pages/RiwayatMenanam/InfoDetailRiwayatTanaman/InfoDetailRiwayatTanaman";
=======
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";

>>>>>>> 1a91950098c10a6f7fcca23697812dafda073624
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/riwayat-menanam" element={<RiwayatMenanam />} />
        <Route path="/list-tanaman" element={<ListTanaman />} />
<<<<<<< HEAD
        <Route
          path="/info-detail-riwayat-tanaman"
          element={<InfoDetailRiwayatTanaman />}/>
      </Routes>
=======
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/landingpage" element={<LandingPage/>} />
        </Routes>
>>>>>>> 1a91950098c10a6f7fcca23697812dafda073624
    </BrowserRouter>
  );
}

export default App;
