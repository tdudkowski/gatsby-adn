import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const smoothJump = (e) => {
  const thisSectionClicked = document.getElementById(e.target.dataset.jump);
  const links = document.querySelectorAll("nav a");
  const nav = document.querySelector("nav").offsetHeight;
  console.log(nav, thisSectionClicked);
  links.forEach(function (link) {
    if (link.dataset.jump === e.target.dataset.jump) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  gsap.to(window, {
    duration: 2,
    scrollTo: { y: thisSectionClicked, offsetY: nav },
    ease: "power3",
  });
};

const elementsMenuArray = [
  ["gongi", "Gongi"],
  ["usluga", "Usługa"],
  ["omnie", "O mnie"],
  ["kontakt", "Kontakt"],
];

const Navigation = () => {
  useEffect(() => {
    const hrefs = document.querySelectorAll("nav a");
    hrefs.forEach((href) => {
      // href.hash = "`#`";
      href.hash = " ";
    });
  }, []);

  return (
    <nav>
      <ul>
        {elementsMenuArray.map((el, i) => (
          <li key={i}>
            <a
              href={"#" + el[0]}
              data-jump={el[0]}
              onClick={(e) => smoothJump(e)}
            >
              {el[1]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
