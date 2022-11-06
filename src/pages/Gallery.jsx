import React from "react";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div>
      <Link to="/" className="btn">
        Home
      </Link>
      <Filters />
    </div>
  );
}

// const Styles = styled.div``;
