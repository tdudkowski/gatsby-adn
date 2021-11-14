import React from "react";
import "./layout.css";

const Navigation = () => {

    const sections = document.querySelectorAll("section");
    for (let j = 0; j < sections.length; j++) { sections[j].style.position = "relative"; }

    const smoothJump = (e) => {

        const links = document.querySelectorAll("nav a");
        for (let i = 0; i < links.length; i++) {
            if (links[i].dataset.jump === e.target.dataset.jump) {
                links[i].classList.add("active");
            } else {
                links[i].classList.remove("active");
            }
        }

    }

    const elementsMenuArray = [
        ["gongi", "Gongi"],
        ["dzwiekoterapia", "Dźwiękoterapia"],
        ["usluga", "Usługa"],
        ["o_mnie", "O mnie"],
        ["kontakt", "Kontakt"],
    ];

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
    )
}

export default Navigation