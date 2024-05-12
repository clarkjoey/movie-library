import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp, faFileCsv } from "@fortawesome/free-solid-svg-icons";
import './Dashboard.css';

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navigation">
      <h1 className="dashboard-title">Movies</h1>
      <div className="upload-area">
        <button className="upload-button btn btn-outline-dark" type="button">
          <span className="upload-button-text">Bulk Upload</span>
          <FontAwesomeIcon
            className="icon upload-icon-multiple"
            icon={faFileCsv}
          />
        </button>
        <button className="upload-button btn btn-dark" type="button">
          <span className="upload-button-text">Add A Movie</span>
          <FontAwesomeIcon
            className="icon upload-icon-single"
            icon={faFileArrowUp}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;