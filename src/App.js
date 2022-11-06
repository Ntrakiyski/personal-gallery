import styled from "styled-components";
import React from "react";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Sicily from "./pages/Sicily";
import Amsterdam from "./pages/Amsterdam";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sicily" element={<Sicily />} />
          <Route path="/amsterdam" element={<Amsterdam />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
