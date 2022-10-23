import "./App.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Popup from "./Popup";

const imagesCount = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
  { id: 21 },
  { id: 22 },
  { id: 23 },
  { id: 24 },
  { id: 25 },
  { id: 26 },
  { id: 27 },
  { id: 28 },
  { id: 29 },
  { id: 30 },
  { id: 31 },
  { id: 32 },
  { id: 33 },
  { id: 34 },
  { id: 35 },
  { id: 36 },
  { id: 37 },
  { id: 38 },
  { id: 39 },
  { id: 40 },
  { id: 41 },
  { id: 42 },
  { id: 43 },
  { id: 44 },
  { id: 45 },
  { id: 46 },
  { id: 47 },
  { id: 48 },
  { id: 49 },
  { id: 50 },
  { id: 51 },
  { id: 52 },
  { id: 53 },
  { id: 54 },
  { id: 55 },
  { id: 56 },
  { id: 57 },
  { id: 58 },
];
const awsUrl = "https://kipmi-first-global-bucket.s3.amazonaws.com/";
const format = ".jpg";

function App() {
  const [popup, setPopup] = useState(false);
  const [getclassName, setClassName] = useState();

  const GetClassName = (e) => {
    setClassName(e.target.className);
    setPopup(true);
  };

  useEffect(() => {
    if (popup === true) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    const close = (e) => {
      if (e.keyCode === 27) {
        setPopup(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });

  return (
    <Styles>
      <h1>Amsterdam</h1>
      <div className="grid-container">
        {imagesCount.map((image) => (
          <div key={image.id} className="images">
            <img
              onClick={GetClassName}
              alt={image.id}
              className={image.id}
              src={awsUrl + image.id + format}
            />
          </div>
        ))}
        {popup && <Popup getclassName={getclassName} setPopup={setPopup} />}
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  background: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h1 {
    color: white;
    align-self: flex-start;
    padding-bottom: 20px;
  }
  img {
    border-radius: 4px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .images {
    cursor: pointer;
  }
  .grid-container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media only screen and (max-width: 1100px) {
    padding: 10px;
    .grid-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 700px) {
    padding: 10px;
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default App;
