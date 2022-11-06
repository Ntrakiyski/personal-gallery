import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Filters() {
  return (
    <Styles className="flex-row">
      <Link to="/sicily" className="folder">
        Sicily
      </Link>
      <Link to="/amsterdam" className="folder">
        Amsterdam
      </Link>
    </Styles>
  );
}

const Styles = styled.div`
  position: fixed;
  bottom: 40px;
  left: 0;
  width: 100%;
  gap: 20px;
  .folder {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    :hover {
      background-color: lightgray;
    }
  }
`;
