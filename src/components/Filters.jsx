import React from "react";
import { Link } from "react-router-dom";

export default function Filters() {
  return (
    <div>
      <Link to="/sicily" className="btn">
        Sicily
      </Link>
      <Link to="/amsterdam" className="btn">
        Amsterdam
      </Link>
    </div>
  );
}
