import React, { useEffect } from "react";
import Layout from "../components/layout";
import Video from "../components/video";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// src https://www.youtube.com/watch?v=z4UWgHvUHY8
// https://codepen.io/GreenSock/pen/6447b92c9361290f5b244d79b3af74fd

const themeAnimation = (dataAnimation, el, pfirst, omnietxt) => {
  switch (dataAnimation) {
    case "1":
      console.log("ELO1");
      gsap.fromTo(
        pfirst,
        { y: "+=8", opacity: 0.1 },
        { y: 0, opacity: 1, duration: 1 }
      );
      break;
    case "2":
      console.log("ELO2");
      // gsap.fromTo(
      //   el,
      //   { x: "+=1", opacity: 0.4 },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     duration: 2,
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "top bottom",
      //       scrub: true,
      //     },
      //   }
      // );
      break;
    case "3":
      // console.log("ELO3");
      gsap.fromTo(
        omnietxt,
        { y: "+=20", opacity: 0.1 },
        {
          y: 0,
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
              Gongi to jeden z najstarszych instrumentów. W obecnej formie znane
              są już od epoki brązu. Jako instrument należy do grupy idiofonów
              (samodźwięcząych). Odlewany i wykuwany z połączenia kilku metali.
              Charakteryzuje się szerokim spektrum dźwięków od bardzo głebokich,
              niskich do wysokich. Gongi są instrumentem tradycyjnym używanym od
              wieków do terapii, celów rytualnych, świąt, wojny i zabawy.
            </p>
            <p className="effect">
              Cały wszechświat jest zbudowany z atomów, które pozostają w
              ciągłych drganiach. Drgania powodują wibracje zależne od ośrodka,
              a ona wytwarza dźwięk. Wszechświat jest zbudowany na zasadzie
              rytmu i harmonii tak jak muzyka.
            </p>
            <p className="effect">
              Nasz zmysł słuchu odbiera jako dźwięk wibracje w paśmie od 16 do
              20 000 Hz. Gongi mają o wiele większe spektrum wibracji. Woda, z
              której człowiek się składa w 70%, jest znakomitym nośnikiem
              wibracji, dlatego odbieramy dźwięki również całym ciałem, ulegając
              ich wpływowi.
            </p>
            <p className="effect">
              Zmysł słuchu wytwarza się w fazie embrionalnej jako pierwszy i
              najdłużej działa. Podobnie jak zmysł węchu, jest ścisle związany z
              emocjami. Człowiek nie tylko słucha dźwięku, ale odbiera wibracje
              fal akustycznych. Drgania wewnątrz organizmu przenoszone przez
              płyny ustrojowe stymulują komórki w naszym organizmie, działając
              niczym masaż. Wibracja wytwarzana przez gongi powoduje silne
              drgania i odczuwana jest fizycznie.
            </p>
            <p className="effect">
              Terapia dźwiękowa wpływa bezpośrednio na zharmonizowanie całego
              organizmu na poziomach fizycznym i emocjonalnym. Podczas takich
              seansów mózg w trakcie głębokiego rozluźnienia przechodzi w tryb
              fal alfa, a nawet theta, usuwając nagromadzone w ciele napięcia i
              blokady. Jest to skuteczna technika pokonywania stresu i
              zapobiegania jego negatywnym skutkom. Niwelując stres uruchamiamy
              procesy samoleczenia. Może to być też początek pogłębienia
              samoświadomości, zwolnienia tempa życia i bardziej uważnego
              funkcjonowania.
            </p>
            <p className="effect">
              W przypadku terapii dla dzieci relaksacje stosuje się w terapii
              mowy i myślenia, w trudnościach z koncentracją, w nadpobudliwości
              - ADHD, co pozytywnie przekłada się na wyciszenie, a co za tym
              idzie poprawę funkcjonowania w codzienności oraz poprawę w nauce.
            </p>
            <p className="effect">
              We współczesnej medycynie używa się ultradźwięków (dźwięki
              niesłyszalne), np. USG i leczeniu urazów. W Niemczech terapia
              dźwiękiem za pomocą gongów i mis dźwiękowych jest stosowana jako
              wsparcie medycyny konwencjonalnej, przepisywana przez lekarzy
              pierwszego kontaktu.
            </p>
            <p className="effect">Dźwięk przenika wszystko.</p>
          </section>
        </article>
        <article className="gongi">
          <Video
            className="video"
            videoSrcURL="https://www.youtube.com/embed/OW7TH2U4hps"
            videoTitle="9 HOURS Tibetan Healing Sounds - Singing Bowls - Natural sounds Gold for Meditation & Relaxation"
          />
        </article>
      </section>
      <section id="dzwiekoterapia" className="section" data-animation="2">
        <article className="dzwiekoterapia">
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
        <article className="dzwiekoterapia">
          <h2>Dźwiękoterapia</h2>
          <p className="effect">
            Uczestnicy podczas seansów zazwyczaj leżą. <br />
            Dysponuję własnym samochodem i mogę dojechać do klienta.
            <br />
            Zapraszam do śledzenia wydarzeń na Facebooku oraz do kontaktu.
          </p>
          <hr />
          <h3>Kąpiele w dźwiękach gongów</h3>
          <p className="effect">Grupowe i indywidualne, około godziny.</p>
          <Img fixed={data.kapiel.childImageSharp.fixed} />
          <h3>Masaż dźwiękiem mis</h3>
          <p className="effect">45 minut.</p>
          <Img fixed={data.masaz.childImageSharp.fixed} />
        </article>
      </section>
      <section id="omnie" className="section" data-animation="3">
        <article className="omnie">
          <section className="omnie-txt">
            <p className="effect">
              Jestem terapeutą zajęciowym w Stowarzyszeniu Ostoja na Rzecz Osób
              z Niepełnosprawnościami.
            </p>
            <p className="effect">
              W pracy wykorzystuję techniki plastyczne, ruch, muzykę, ale
              głównie grę na gongach jako seanse terapii dźwiękiem, indywidualne
              i grupowe, dla osób z umiarkowaną i głęboką niepełnosprawnością
              sprzężoną.
            </p>
            <p className="effect">
              Od kilku lat zajmuję się animacją kultury i arteterapią.
            </p>
            <p className="effect">
              Gongami zainteresowałam się po tym jak sama doświadczyłam ich
              dobroczynnego wpływu. Gongi oddziałują na organizm wyciszająco,
              poruszają wyobraźnię, usuwają blokady, otwierają. Świadomość że
              można za ich pomocą pomagać innym zainspirowała mnie do nauki gry
              na tych instrumentach. Ukończyłam trzy kursy:
            </p>
            <ul>
              <li>
                Gry na gongach (szkolenie w zakresie wykorzystania gongów w
                kąpielach dźwiękowych, medytacji i koncercie). Prowadzący:
                Ryszard Zdzioch.
              </li>
              <li>
                Muzykoterapii organicznej (Gongi i instrumenty archaiczne w
                terapii i profilaktyce). Prowadzący: Tomasz Niewiadomy.
              </li>
              <li>
                Kurs masażu dźwiękiem mis (wg metody Petera Hessa). Prowadzący:
                Ryszard Zdzioch.
              </li>
            </ul>
          </section>
          <picture>
            <Img fluid={data.zestaw.childImageSharp.fluid} />
          </picture>
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
            <li>telefon: 519 714 793</li>
            <li>mail: agata.gongi@gmail.com</li>
            <li class="fb-link">
              Facebook:&nbsp;{" "}
              <a href="https://www.facebook.com/Dźwiękoterapia-relaksacje-z-użyciem-gongów-i-mis-tybetańskich-420657995360697/">
                <span>Link do Facebooka</span>
              </a>{" "}
            </li>
          </ul>
        </article>
        <article className="kontakt">
          <h2>Kontakt</h2>
          <form
            action=""
            className="form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" aria-label="hidden field" />
            <input
              type="hidden"
              name="form-name"
              value="contact"
              aria-label="hidden field"
            />
            <label htmlFor="name" aria-label="name">
              Nadawca:{" "}
            </label>
            <input type="text" id="name" name="name"></input>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              // id="email"
              name="_replyto"
              id="_replyto"
              aria-label="email"
            />

            <label htmlFor="message">Wiadomość:</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              cols="30"
              aria-label="text here"
              required
            />

            <button type="submit" className="btn">
              Wyślij
            </button>
            <input
              type="reset"
              value="Wyczyść formularz"
              className="btn"
              aria-label="clear button"
            />
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
    masaz: file(relativePath: { eq: "gong7.jpg" }) {
      id
      childImageSharp {
        fixed(width: 424) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kapiel: file(relativePath: { eq: "gong8.jpg" }) {
      id
      childImageSharp {
        fixed(width: 424) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fb: file(relativePath: { eq: "fb-gong.jpg" }) {
      id
      childImageSharp {
        fixed(width: 424) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
