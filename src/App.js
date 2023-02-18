import React, { Children, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

//PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import BestSeller from "./pages/BestSeller";
import Classics from "./pages/Classics";
import Child from "./pages/Child";
import Philosophy from "./pages/Philosophy";
import BookDetails from "./pages/BookDetails";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/best-seller" element={<BestSeller/>}/>
        <Route path="/classics" element={<Classics/>}/>
        <Route path="/children" element={<Child/>}/>
        <Route path="/philosophy" element={<Philosophy/>}/>
        <Route path="/book-details/:booksId" element={<BookDetails/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
