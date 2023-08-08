import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLink } from "../data";
import PageLinks from "./PageLinks";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <PageLinks parentClass="nav-links" childClass="nav-link"></PageLinks>

          <ul className="nav-icons">
            {socialLink.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} target="_blank" className="nav-icon">
                    <i className={link.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
