import styled from "styled-components";
import React from "react";
import Gallery from "./components/Gallery";
import Recents from "./components/Recents";
import Upload from "./components/Upload";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Styles>
      <BrowserRouter>
        <Upload />
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<Recents />} />
        </Routes>
      </BrowserRouter>
    </Styles>
  );
};

export default App;

const Styles = styled.div``;
