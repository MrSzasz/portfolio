
// =========================  STYLES  =========================

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss"

// =========================  LIBRARIES  =========================

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// =========================  CUSTOM IMPORTS  =========================
// import CartContextProvider from "./context/CartContext/CartContext";

// ----------  COMPONENTS  ---------- 

import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
