import React from "react";
import "./Navbar.css";

const Navbar = () => {
  let isArrayFunction = (inputArray) => {
    if (Array.isArray(inputArray) && inputArray.length !== 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="body">
      <div id="navbar">
        {/* <div class="usa-overlay"></div>
      <header class="usa-header usa-header--basic usa-header--megamenu padding-bottom-4 padding-top-6">
        <div class="usa-nav-container">
          <div class="usa-navbar">
            <div class="usa-logo margin-0" id="basic-mega-logo">
              <em class="usa-logo__text"> */}

        <a className=" logo" href="http://localhost:3030/">
          {" "}
          We Care
        </a>

        <div className="display-flex flex-row align-items-center nav-items">
          <a
            href="http://localhost:3030/"
            title="Home"
            aria-label="Home"
            className="Home"
          >
            Home
          </a>
          <a
            href="http://localhost:3030/login"
            title="Home"
            aria-label="Home"
            className="Home"
          >
            Log Out
          </a>
        </div>
        {/* </em>
            </div>
          </div>
        </div>
      </header> */}
      </div>
      <h3 className="Title"> Symptom Checker</h3>
    </div>
  );
};

export default Navbar;
