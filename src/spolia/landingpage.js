import React, { useEffect } from "react";
import Layout from "../components/layoutLP";

import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// src https://www.youtube.com/watch?v=z4UWgHvUHY8

const themeAnimation = (dataAnimation, el) => {
  switch (dataAnimation) {
    case "1":
      // console.log("ELO1");
      gsap.fromTo(
        el,
        { x: "+=10", opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
      break;
    case "2":
      // console.log("ELO2");
      gsap.fromTo(
        el,
        { x: "+=1", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            scrub: true,
          },
        }
      );
      break;
    case "3":
      console.log("ELO3");
      break;
    case "4":
      console.log("ELO4");
      break;
    default:
      console.log("WRONG");
  }
};

const LandingPage = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".section");

    els.forEach((el) => {
      let dataAnimation = el.dataset.animation;
      themeAnimation(dataAnimation, el);
    });

    // const hrefs = document.querySelectorAll("nav a");

    // const jumpThis = (href) => {
    //   const sectionid = href.hash.substr(1);
    //   const thisSection = document.getElementById(sectionid);
    // console.log(thisSection);
    // gsap.to(thisSection, {
    //   duration: 1,
    //   x: "5rem",
    //   ease: "power2",
    // });

    // gsap.to(window, {
    //   duration: 2,
    //   scrollTo: { y: thisSection, offsetY: 32 },
    //   ease: "power4",
    //   onComplete: updateDocument,
    //   onCompleteParams: [thisSection],
    // });

    // gsap.to(thisSection, { y: "4rem" });
    // thisSection.classList.add("active");
    // };

    // BLOCK
    // hrefs.forEach(
    //   (href) =>
    //     href.addEventListener("click", () => jumpThis(href)) &&
    //     href.classList.add("active")
    // );
    // const updateDocument = (offset) => {
    //   console.log(offset);
    //   //   document.documentElement.scrollTop = document.body.scrollTop = offset;
    // };
  }, []);

  // gsap.to(".gongih21", {
  //   scrollTrigger: {
  //     trigger: ".gongih21",
  //     toggleActions: "restart none none none",
  //     scrub: true,
  //   },
  //   x: 300,
  //   rotation: 360,
  //   duration: 3,
  // });

  // gsap.to(".gongih22", {
  //   scrollTrigger: {
  //     trigger: ".gongih22",
  //     toggleActions: "restart none none none",
  //     scrub: true,
  //   },
  //   x: 300,
  //   rotation: 360,
  //   duration: 3,
  // });

  // sections.forEach((section) => {
  //   gsap.fromTo(
  //     section.children
  //     { y: "+=100", opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.2,
  //       duration: 6,
  //       ease: "easeInOut",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top 20%",
  //         //   markers: "true",
  //       },
  //     }
  //   );
  // });

  return (
    <Layout>
      <section id="gongi" className="section" data-animation="1">
        <h2 className="gongih21">Gongi</h2>
        <p className="effect" id="txt">
          Blah, blah. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores
          molestias explicabo. Fuga hic illo consequuntur libero laborum eos
          nobis ducimus voluptatibus ab.
        </p>
      </section>
      <section id="usluga" className="section" data-animation="2">
        <h2 className="gongih22">Usługa</h2>
        <p className="effect">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          asperiores! Nobis cum ratione harum velit quibusdam maiores molestias
          explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus
          voluptatibus ab.
        </p>
      </section>
      <section id="omnie" className="section" data-animation="3">
        <h2>O mnie</h2>
        <p className="effect">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          asperiores! Nobis cum ratione harum velit quibusdam maiores molestias
          explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus
          voluptatibus ab.
        </p>
        <p>
          awesome headline, amazing picture, komunikat 3 sec czy ta strona jest
          dla mnie co robisz i dlaczego jestes wyjatkowy, dlczego to robisz
          clear value prop logical flow: explanation, benefits testimonial, cta
          identify the pain and sth on pleasure multiple forms of contact
          guarente, powerful cta orange
        </p>
      </section>
      <section id="kontakt" className="section" data-animation="4">
        <h2>Kontakt</h2>
      </section>
    </Layout>
  );
};

export default LandingPage;
