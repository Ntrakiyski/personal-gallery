import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AWS from "aws-sdk";
import styled from "styled-components";
import GalleryComponent from "../components/Gallery-component";
import Back from "../components/Back";

export default function Sicily() {
  const [prefix, setPrefix] = useState("sicily/");
  let location = useLocation();

  return (
    <div>
      <Back />
      <GalleryComponent prefix={prefix} />
    </div>
  );
}
