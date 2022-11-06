import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AWS from "aws-sdk";
import styled from "styled-components";
import GalleryComponent from "../components/Gallery-component";
import Back from "../components/Back";

export default function Amsterdam() {
  const [prefix, setPrefix] = useState("amsterdam/");
  let location = useLocation();

  return (
    <div>
      <Back />
      <GalleryComponent prefix={prefix} />
    </div>
  );
}
