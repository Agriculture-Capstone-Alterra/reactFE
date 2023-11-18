import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";
import PengingatTanaman from "./pages/PengingatMerawatTanaman/PengingatTanaman";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/pengingat-tanaman" element={<PengingatTanaman />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
