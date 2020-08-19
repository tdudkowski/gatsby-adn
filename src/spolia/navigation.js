import React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/usluga">Usługa</Link>
        </li>
        <li>
          <Link to="/gongi">Gongi</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/landingpage">Landingpage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
