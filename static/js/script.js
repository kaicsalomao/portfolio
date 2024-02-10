particlesJS.load("particles-container", "static/particles.json");
var scrollOptions = {
  delay: 300,
  duration: 700,
  distance: "30px",
  origin: "top",
};
ScrollReveal().reveal(".about", scrollOptions);
ScrollReveal().reveal("#about-description", scrollOptions);
ScrollReveal().reveal(".line-ligature", {
  delay: 300,
  duration: 700,
});
ScrollReveal().reveal(".line-aditional", {
  delay: 100,
  duration: 700,
});
ScrollReveal().reveal(".projects", scrollOptions);
ScrollReveal().reveal(".contact", scrollOptions);
ScrollReveal().reveal(".contacts ul", scrollOptions);


new TypeIt(".header-description", {
  strings: "Ajudando empresas e pessoas a contruir aplicativos e sites digitais.",
  speed: 60,
  loop: false,
}).go();
