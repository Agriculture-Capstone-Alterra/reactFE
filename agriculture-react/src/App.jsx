import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPage";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app d-flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
