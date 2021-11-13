import React, { useEffect } from "react";
import "./layout.css";
import Navigation from "./navigation"
import Hamburger from "./hamburger"
import favicon from '../images/favicon.ico'
import Seo from "./seo";
import Helmet from 'react-helmet'

const Layout = ({ children }) => {

    const setDefaultCSS = () => {
        useEffect(() => {
            const firstSection = document.getElementById("gongi")
            const secondSection = document.getElementById("dzwiekoterapia")
            if (firstSection) {
                firstSection.style.position = "sticky"
                secondSection.style.position = "sticky"
            }
        }, []);

    }
    return (
        <div className="container">
            <Seo />
            <Helmet>
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>
            <Hamburger />
            <main onMouseMove={() => setDefaultCSS()}>
                {children}
            </main>
            <Navigation />
        </div>
    )
}

export default Layout