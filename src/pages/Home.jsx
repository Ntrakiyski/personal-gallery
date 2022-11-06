import React from "react";
import Upload from "../components/Upload";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Home() {
  return (
    <Styles>
      <Upload />
      <div className="bottom flex-row">
        <Link to="/gallery" className="btn">
          Gallery
        </Link>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  .bottom {
    position: fixed;
    bottom: 40px;
    left: 0;
    width: 100%;
    gap: 20px;
  }
`;
