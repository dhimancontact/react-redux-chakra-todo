import React from "react";
import { footerLink } from "../data";

function PageLinks({ parentClass, childClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {footerLink.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={childClass}>
              {link.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default PageLinks;
