import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";
import RiwayatMenanam from "./pages/RiwayatMenanam/RiwayatMenanam/RiwayatMenanam";
import ListTanaman from "./pages/RiwayatMenanam/ListTanaman/ListTanaman";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/riwayat-menanam" element={<RiwayatMenanam />} />
        <Route path="/list-tanaman" element={<ListTanaman />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
