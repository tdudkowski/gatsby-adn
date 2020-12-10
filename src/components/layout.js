import React from "react";
import Navigation from "./navigation";
import Hamburger from "./hamburger"
import "./layout.css";
import SEO from "./seo";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <SEO />
      <header>
        <Hamburger />
      </header>
      <main className="main">{children}</main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
};

export default Layout;
