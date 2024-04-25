//const typed = new Typed(".typed", {
//strings : ["Santiago", "Coronel"],
//stringsElement: ".typed-element",
// typeSpeed: 75,
// backSpeed: 75,
// backDelay: 1000,
//startDelay: 300,
// loop: true,
// cursorChar: "|"
//});

//const navLinksList = document.querySelectorAll(".inicio a");

//navLinksList.forEach((link) => {
//    const targetElement = document.getElementById(targetId);
//    if (targetElement) {
//      const offsetTop =
//        targetElement.getBoundingClientRect().top + window.pageYOffset;
//      window.scrollTo({
//        top: offsetTop,
//        behavior: "smooth",
//      });
//    }
//  });
//});

ScrollReveal({ reset: true });

window.sr = ScrollReveal();

sr.reveal(".container-inicio", {
  duration: 2000,
  origin: "bottom",
  distance: "-100px",
  scale: 0.8,
});

sr.reveal(".container-skills", {
  duration: 2000,
  origin: "bottom",
  distance: "-100px",
  scale: 0.8,
});

sr.reveal(".section-educacion", {
  duration: 2000,
  origin: "top",
  distance: "-100px",
  scale: 0.8,
});

const lista = document.querySelector("#lista");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  lista.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  lista.classList.remove("visible");
});


import EmblaCarousel from 'embla-carousel'

const emblaNode = document.querySelector('.embla')
const options = { loop: false }
const emblaApi = EmblaCarousel(emblaNode, options)

console.log(emblaApi.slideNodes()) // Access API