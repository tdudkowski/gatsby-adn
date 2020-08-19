import { gsap } from "gsap";

gsap.to(".gongih22", {
  scrollTrigger: {
    trigger: ".gongih22",
    toggleActions: "play none none none",
  },
  x: 300,
  rotation: 360,
  duration: 3,
});

const txt = document.getElementsByClassName("gongih2");
