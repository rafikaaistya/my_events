import React from "react";
import "../assets/style/style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-landing">
        <div className="row mt-2 ml-5">
          <div className="col-6  text-white">
            <span className="mr-4" style={{ fontSize: "24px" }}>
              MY-EVENT
            </span>
          </div>
          <div className="col-6 text-right">
            <Link to="/event">
              <button className="button-login mr-3">LIST</button>
            </Link>
            <Link to="/create">
              <button className="button-register mr-3">CREATE EVENT</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
