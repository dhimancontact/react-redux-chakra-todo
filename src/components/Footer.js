import React from "react";
import { socialLink } from "../data";
import PageLinks from "./PageLinks";

function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" childClass="footer-link" />

      <ul className="footer-icons">
        {socialLink.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
