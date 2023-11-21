import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TableTanaman from "./pages/MenanamTanaman/TableTanaman/indeks";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage/>} />
          <Route path="menanam-tanaman" element={<TableTanaman/>} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
