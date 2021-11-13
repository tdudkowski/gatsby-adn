// src https://snopkowski.com/blog/gatsby-navigation-styled-components
import React, { useState } from "react"
import NavbarLinks from "./navigation"
// import Logo from "./Logo"
import styled from "styled-components"

const Navigation = styled.nav`
      
    @media (max-width: 699px) {
      position: absolute;
    height: 2rem;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
           }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  background-color: #333;
  color: #ccc;

  @media (max-width: 699px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 699px) {
    position: absolute;
    /* top: 2rem; */
    width: 100%;
    justify-content: flex-start;
    transition: all 0.3s ease-in;
    left: ${props => (props.open ? "-100%" : "0")};
    & h2, h3, ul {background-color: #691145; font-size:1.3rem; }
    & a:hover {background-color: rgba(251, 251, 251, 0.3); color:#eec;}
  }
`

const Hamburger = styled.div`
  background-color: #ccc;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #ccc;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const MenuHamburger = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <Navigation className="menu-hamburger">
      <Toggle onClick={() => setNavbarOpen(!navbarOpen)} >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (<Navbox onClick={() => setNavbarOpen(false)}> <NavbarLinks /> </Navbox>
      ) : (
        <Navbox open> <NavbarLinks />  </Navbox>)}
    </Navigation>
  )
}
export default MenuHamburger
