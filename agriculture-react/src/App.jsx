import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "./essentials/essentialcss.css";
import TestPage from "./pages/TestPage/TestPAge";
import Topbar from "./components/Topbar/Topbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/topbar" element={<Topbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
