import React from 'react';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Layout from '../components/layout';
import Video from "../components/video";
import loadable from "@loadable/component";
const Layout = loadable(() => import("../components/layout"));

const LandingIndexPage = ({ data }) => {
    return (
        <Layout>
            <section className="gongi" id="gongi">
                <div><h2>Gongi</h2>
                    <p>Gongi to jeden z najstarszych instrumentów. W obecnej formie znane są już od epoki brązu. Jako instrument należy do grupy idiofonów (samodźwięczących). Odlewany i wykuwany z połączenia kilku metali. Charakteryzuje się szerokim spektrum dźwięków od bardzo głębokich, niskich do wysokich. Gongi są instrumentem tradycyjnym używanym od wieków do terapii, celów rytualnych, świąt, wojny i zabawy.</p>

                    <p>Wszechświat jest zbudowany z cząsteczek pozostających w ciągłych drganiach. Drgania powodują wibracje zależne od ośrodka, a ona wytwarza dźwięk. Wszechświat jest zbudowany na zasadzie rytmu i harmonii tak jak muzyka.</p>

                    <p>Nasz zmysł słuchu odbiera jako dźwięk wibracje w paśmie od 16 do 20 000 Hz. Gongi mają o wiele większe spektrum wibracji. Woda, z której człowiek się składa w 70%, jest znakomitym nośnikiem wibracji, dlatego odbieramy dźwięki również całym ciałem, ulegając ich wpływowi.</p>

                    <p>Zmysł słuchu wytwarza się w fazie embrionalnej jako pierwszy i najdłużej działa. Podobnie jak zmysł węchu, jest ściśle związany z emocjami. Człowiek nie tylko słucha dźwięku, ale odbiera wibracje fal akustycznych. Drgania wewnątrz organizmu przenoszone przez płyny ustrojowe stymulują komórki w naszym organizmie, działając niczym masaż. Wibracja wytwarzana przez gongi powoduje silne drgania i odczuwana jest fizycznie.</p>
                </div>
                <div>
                    <Video
                        className="video"
                        videoSrcURL="https://www.youtube.com/embed/OW7TH2U4hps"
                        videoTitle="9 HOURS Tibetan Healing Sounds - Singing Bowls - Natural sounds Gold for Meditation & Relaxation"
                    />
                </div>
            </section>

            <section className="dzwiekoterapia" id="dzwiekoterapia">
                <div><h2>Dźwiękoterapia</h2>
                    <p>Terapia dźwiękowa wpływa bezpośrednio na cały organizmu na poziomach fizycznym i emocjonalnym. Podczas takich seansów mózg w trakcie głębokiego rozluźnienia przechodzi w tryb fal alfa, a nawet theta, usuwając nagromadzone w ciele napięcia i blokady. Jest to skuteczna technika pokonywania stresu i zapobiegania jego negatywnym skutkom. Niwelując stres uruchamiamy procesy samoleczenia. Może to być też początek pogłębienia samoświadomości, zwolnienia tempa życia i bardziej uważnego funkcjonowania.</p>

                    <p>W przypadku terapii dla dzieci relaksacje stosuje się w terapii mowy i myślenia, w trudnościach z koncentracją, w nadpobudliwości - ADHD, co pozytywnie przekłada się na wyciszenie, a co za tym idzie poprawę funkcjonowania w codzienności oraz poprawę w nauce.</p>

                    <p>We współczesnej medycynie używa się ultradźwięków (dźwięki niesłyszalne), np. USG i leczeniu urazów. W Niemczech terapia dźwiękiem za pomocą gongów i mis dźwiękowych jest stosowana jako wsparcie medycyny konwencjonalnej, przepisywana przez lekarzy pierwszego kontaktu.</p>

                    <p>Dźwięk przenika wszystko.</p>
                </div>
                <div>
                    <iframe className="facebookDiv"
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
                </div>
            </section>

            <section className="usluga" id="usluga">
                <div><h2>Usługa</h2>
                    <p>Uczestnicy podczas seansów zazwyczaj leżą.</p>
                    <p>Dysponuję własnym samochodem i mogę dojechać do klienta.</p>
                    <p>Zapraszam do śledzenia wydarzeń na Facebooku oraz do kontaktu.</p>

                    <h3>Kąpiele w dźwiękach gongów</h3>
                    <p>Grupowe i indywidualne, czas trwania około godziny.</p>

                    <GatsbyImage image={getImage(data.kapiel)} alt="obrazek" />

                </div>
                <div>
                    <h3>Masaż dźwiękiem mis</h3>
                    <p>Czas trwania około 45 minut.</p>

                    <GatsbyImage image={getImage(data.masaz)} alt="obrazek" />

                </div>
            </section>

            <section className="o_mnie" id="o_mnie">
                <div><h2>O mnie</h2>

                    <p>Jestem terapeutą zajęciowym w Stowarzyszeniu Ostoja na Rzecz Osób z Niepełnosprawnościami.</p>

                    <p>W pracy wykorzystuję techniki plastyczne, ruch, muzykę, ale głównie grę na gongach jako seanse terapii dźwiękiem, indywidualne i grupowe, dla osób z umiarkowaną i głęboką niepełnosprawnością sprzężoną.</p>

                    <p>Od kilku lat zajmuję się animacją kultury i arteterapią.</p>

                    <p>Gongami zainteresowałam się po tym jak sama doświadczyłam ich dobroczynnego wpływu. Gongi oddziałują na organizm wyciszająco, poruszają wyobraźnię, usuwają blokady, otwierają. Świadomość że można za ich pomocą pomagać innym zainspirowała mnie do nauki gry na tych instrumentach. Ukończyłam trzy kursy:</p>

                    <ul>
                        <li>Gry na gongach (szkolenie w zakresie wykorzystania gongów w kąpielach dźwiękowych, medytacji i koncercie). Prowadzący: Ryszard Zdzioch.</li>
                        <li>Muzykoterapii organicznej (Gongi i instrumenty archaiczne w terapii i profilaktyce). Prowadzący: Tomasz Niewiadomy.</li>
                        <li>Kurs masażu dźwiękiem mis (wg metody Petera Hessa). Prowadzący: Ryszard Zdzioch.</li>
                    </ul>
                </div>
                <div>

                    <GatsbyImage image={getImage(data.zestaw)} alt="obrazek" />

                </div>
            </section>

            <section className="kontakt" id="kontakt">
                <div><h2>Kontakt</h2>
                    <ul>
                        <li>telefon: 519 714 793</li>
                        <li>mail: agata.gongi@gmail.com</li>
                        <li className="fb-link">Facebook: &nbsp; <a href="https://www.facebook.com/Dźwiękoterapia-relaksacje-z-użyciem-gongów-i-mis-tybetańskich-420657995360697/">
                            <span>Link do Facebooka</span></a></li>
                    </ul>
                </div>
                <div>
                    <form
                        className="form"
                        name="contactgongi"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field">
                        <input type="hidden" name="bot-field" aria-label="hidden field" />
                        <input type="hidden" name="form-name" value="contactgongi" aria-label="hidden field" />
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

                        <button type="submit" className="btn">Wyślij wiadomość</button>
                        <input
                            type="reset"
                            value="Wyczyść formularz"
                            className="btn"
                            aria-label="clear button"
                        />
                    </form>
                </div>
            </section>
        </Layout >
    )
}

export default LandingIndexPage


export const pageQuery = graphql`
  query {
    zestaw: file(relativePath: { eq: "gong4.jpg" }) {
           childImageSharp {
        gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    masaz: file(relativePath: { eq: "gong7.jpg" }) {
           childImageSharp {
        gatsbyImageData(width: 424, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    kapiel: file(relativePath: { eq: "gong8.jpg" }) {
            childImageSharp {
        gatsbyImageData(width: 424, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    fb: file(relativePath: { eq: "fb-gong.jpg" }) {
         childImageSharp {
        gatsbyImageData(width: 424, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`;