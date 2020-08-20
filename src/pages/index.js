import React, { useEffect } from "react";
import Layout from "../components/layout";
import Video from "../components/video";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// src https://www.youtube.com/watch?v=z4UWgHvUHY8

const themeAnimation = (dataAnimation, el, pfirst, omnietxt) => {
  switch (dataAnimation) {
    case "1":
      console.log("ELO1");
      gsap.fromTo(
        pfirst,
        { y: "+=35", opacity: 0.2 },
        { y: 0, opacity: 1, duration: 2 }
      );
      break;
    case "2":
      console.log("ELO2");
      gsap.fromTo(
        el,
        { x: "+=1", opacity: 0.4 },
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
      // console.log("ELO3");
      gsap.fromTo(
        omnietxt,
        { x: "-=200", opacity: 0.1 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
          },
        }
      );
      break;
    case "4":
      console.log("ELO4");
      break;
    default:
      console.log("WRONG");
  }
};

const LandingPage = ({ data }) => {
  useEffect(() => {
    const els = document.querySelectorAll(".section");
    const pfirst = document.getElementsByClassName("gongi-txt");
    const omnietxt = document.getElementsByClassName("omnie-txt");

    els.forEach((el) => {
      let dataAnimation = el.dataset.animation;
      themeAnimation(dataAnimation, el, pfirst, omnietxt);
    });
  }, []);

  return (
    <Layout>
      <section id="gongi" className="section" data-animation="1">
        <article className="gongi">
          <section className="gongi-txt">
            <h2>Gongi</h2>
            <p className="effect">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              asperiores! Nobis cum ratione harum velit quibusdam maiores
              molestias explicabo. Fuga hic illo consequuntur libero laborum eos
              nobis ducimus voluptatibus ab.
            </p>
            <p className="effect">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              asperiores! Nobis cum ratione harum velit quibusdam maiores
              molestias explicabo. Fuga hic illo consequuntur libero laborum eos
              nobis ducimus voluptatibus ab.
            </p>
            <p className="effect">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              asperiores! Nobis cum ratione harum velit quibusdam maiores
              molestias explicabo. Fuga hic illo consequuntur libero laborum eos
              nobis ducimus voluptatibus ab.
            </p>
          </section>
        </article>
        <Video
          className="video"
          videoSrcURL="https://www.youtube.com/embed/OW7TH2U4hps"
          videoTitle="9 HOURS Tibetan Healing Sounds - Singing Bowls - Natural sounds Gold for Meditation & Relaxation"
        />
      </section>
      <section id="usluga" className="section" data-animation="2">
        <article className="usluga">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FD%C5%BAwi%C4%99koterapia-relaksacje-z-u%C5%BCyciem-gong%C3%B3w-i-mis-tybeta%C5%84skich-420657995360697%2F&tabs=timeline&width=800&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="600"
            height="700"
            max-width="90%"
            max-height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="facebook"
          ></iframe>
        </article>
        <article className="usluga">
          <h2>Dźwiękoterapia</h2>
          <p className="effect">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            asperiores! Nobis cum ratione harum velit quibusdam maiores
            molestias explicabo. Fuga hic illo consequuntur libero laborum eos
            nobis ducimus voluptatibus ab.
          </p>
          <p className="effect">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            asperiores! Nobis cum ratione harum velit quibusdam maiores
            molestias explicabo. Fuga hic illo consequuntur libero laborum eos
            nobis ducimus voluptatibus ab.
          </p>
          <p className="effect">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            asperiores! Nobis cum ratione harum velit quibusdam maiores
            molestias explicabo. Fuga hic illo consequuntur libero laborum eos
            nobis ducimus voluptatibus ab.
          </p>
          <picture>
            <Img fluid={data.zestaw.childImageSharp.fluid} />
          </picture>
        </article>
      </section>
      <section id="omnie" className="section" data-animation="3">
        <article className="omnie">
          <section className="omnie-txt">
            <p className="effect">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              asperiores! Nobis cum ratione harum velit quibusdam maiores
              molestias explicabo. Fuga hic illo consequuntur libero laborum eos
              nobis ducimus voluptatibus ab.
            </p>
            <p className="effect">
              awesome headline, amazing picture, komunikat 3 sec czy ta strona
              jest dla mnie co robisz i dlaczego jestes wyjatkowy, dlczego to
              robisz clear value prop logical flow: explanation, benefits
              testimonial, cta identify the pain and sth on pleasure multiple
              forms of contact guarente, powerful cta orange
            </p>
            <p className="effect">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              asperiores! Nobis cum ratione harum velit quibusdam maiores
              molestias explicabo. Fuga hic illo consequuntur libero laborum eos
              nobis ducimus voluptatibus ab.
            </p>
            <p className="effect">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              asperiores! Nobis cum ratione harum velit quibusdam maiores
              molestias explicabo. Fuga hic illo consequuntur libero laborum eos
              nobis ducimus voluptatibus ab.
            </p>
            <p className="effect">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              asperiores! Nobis cum ratione harum velit quibusdam maiores
              molestias explicabo. Fuga hic illo consequuntur libero laborum eos
              nobis ducimus voluptatibus ab.
            </p>
          </section>
        </article>
        <article className="omnie">
          <h2>O mnie</h2>
          <picture>
            <Img fluid={data.terapia.childImageSharp.fluid} />
          </picture>
        </article>
      </section>
      <section id="kontakt" className="section" data-animation="4">
        <article className="kontakt">
          <ul>
            <li>telefon: 111 222 333</li>
            <li>mail: jnjvnnv@cmskmcm.com</li>
            <li>inne: </li>
          </ul>
        </article>
        <article className="kontakt">
          <h2>Kontakt</h2>
          <form action="" className="form">
            <label htmlFor="name" aria-label="name">
              Nadawca: <br />
              <input type="text" id="name" name="name"></input>
              <br />
            </label>

            <label htmlFor="email">
              Email: <br />
              <input type="email" id="email" name="email"></input>
              <br />
            </label>
            <label htmlFor="message">
              Wiadomość: <br />
              <textarea name="message" rows="10" cols="30"></textarea>
              <br />
            </label>
            <input type="submit" value="Wyczyść" className="btn"></input>
            <input type="submit" value="Wyślij" className="btn"></input>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default LandingPage;

export const pageQuery = graphql`
  query {
    terapia: file(relativePath: { eq: "gong5.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zestaw: file(relativePath: { eq: "gong4.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
