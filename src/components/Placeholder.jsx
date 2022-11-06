import React from "react";
import styled from "styled-components";

const Placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Placeholder() {
  return (
    <Styles className="card">
      {Placeholders.map((k) => (
        <img
          key={k}
          src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
          width="100%"
          height="100%"
        />
      ))}
    </Styles>
  );
}

const Styles = styled.div`
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  align-items: start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  img {
    object-fit: cover;
  }
`;
