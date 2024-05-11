import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp, faFileCsv } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="dashboard-title"> Movies</h1>
      <div className="upload-area">
        <div className="upload-text">Upload</div>
        <FontAwesomeIcon
          className="icon upload-icon-single"
          icon={faFileArrowUp}
        />
        <FontAwesomeIcon
          className="icon upload-icon-multiple"
          icon={faFileCsv}
        />
      </div>
    </div>
  );
}

export default Navbar;