import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AWS from "aws-sdk";
import styled from "styled-components";
import GalleryComponent from "./Gallery-component";

export default function Sicily() {
  const [prefix, setPrefix] = useState("sicily/");
  let location = useLocation();



  return (
    <div>
      <GalleryComponent prefix={prefix} />
    </div>
  );
}
