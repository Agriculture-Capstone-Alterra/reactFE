import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";
import HistoryMenanam from "./pages/HistoryTanaman/HistoryMenanam/HistoryMenanam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/history-tanaman" element={<HistoryMenanam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
