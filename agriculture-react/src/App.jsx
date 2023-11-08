import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';

import "./essentials/essentialcss.css"
import TestPage from './pages/TestPage/TestPAge';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage/>} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
