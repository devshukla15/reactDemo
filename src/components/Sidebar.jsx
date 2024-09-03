import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column justify-content-between flex-shrink-0  p-3 text-white bg-dark d-none d-lg-block"
      style={{ width: "280px", height: "100vh" }}
    >
      <div>
        <div className="d-flex  mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4 text-uppercase ">cinemascore</span>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white" aria-current="page">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white" aria-current="page">
              Favorite
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white" aria-current="page">
              About
            </Link>
          </li>
          <li></li>
        </ul>
        <div className="d-flex align-items-center mb-3 mt-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className=" text-uppercase ">account</span>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" aria-current="page">
              Chats
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white" aria-current="page">
              Saved
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white" aria-current="page">
              Writer
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link text-white" aria-current="page">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
