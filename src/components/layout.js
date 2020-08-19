import React from "react";
import Navigation from "./navigation";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <Navigation />
      </header>
      <main className="main">{children}</main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
};

export default Layout;
