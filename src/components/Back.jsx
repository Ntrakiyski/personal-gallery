import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Back() {
  return (
    <Styles>
      <Link to="/gallery">Back</Link>
    </Styles>
  );
}

const Styles = styled.div`
  position: fixed;
  bottom: 40px;
  right: 15px;
  background-color: white;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 5px;
`;
