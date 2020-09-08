import React from "react";
import Navigation from "./navigation";
import "./layout.css";
import SEO from "./seo";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <SEO />
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
