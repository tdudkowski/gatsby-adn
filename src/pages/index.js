import React, { useEffect } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
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

const LandingPage = ({ data }) => {
  useEffect(() => {
    const els = document.querySelectorAll(".section");

    els.forEach((el) => {
      let dataAnimation = el.dataset.animation;
      themeAnimation(dataAnimation, el);
    });
  }, []);

  return (
    <Layout>
      <section id="gongi" className="section" data-animation="1">
        <article className="gongi">
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
        </article>
      </section>
      <section id="usluga" className="section" data-animation="2">
        <article className="usluga">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FD%C5%BAwi%C4%99koterapia-relaksacje-z-u%C5%BCyciem-gong%C3%B3w-i-mis-tybeta%C5%84skich-420657995360697%2F&tabs=timeline&width=800&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="600"
            height="700"
            max-width="50%"
            max-height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
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
            <Img fixed={data.zestaw.childImageSharp.fixed} />
          </picture>
        </article>
      </section>
      <section id="omnie" className="section" data-animation="3">
        <article className="omnie">
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
        </article>
        <article className="omnie">
          <h2>O mnie</h2>
          <picture>
            <Img fixed={data.terapia.childImageSharp.fixed} />
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
            <label for="name" aria-label="name">
              Nadawca: <br />
              <input type="text" id="name" name="name"></input>
              <br />
            </label>

            <label for="email">
              Email: <br />
              <input type="email" id="email" name="email"></input>
              <br />
            </label>
            <label for="message">
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
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zestaw: file(relativePath: { eq: "gong4.jpg" }) {
      id
      childImageSharp {
        fixed(width: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
