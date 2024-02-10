particlesJS.load("particles-container", "static/particles.json");
var scrollOptions = {
  delay: 300,
  duration: 500,
  distance: "30px",
  origin: "top",
};

ScrollReveal().reveal(".about h2", {
  delay: 300,
  duration: 500,
  distance: "30px",
  origin: "left"
});
ScrollReveal().reveal("#about-description", {
  delay: 400,
  duration: 500,
  distance: "30px",
  origin: "top"
});
ScrollReveal().reveal(".line-ligature", {
  delay: 300,
  duration: 500,
});
ScrollReveal().reveal(".more-information p", {
  delay: 300,
  origin: "left",
  distance: "40px",
  duration: 700,
});
ScrollReveal().reveal(".line-aditional", {
  delay: 300,
  duration: 500,
});
ScrollReveal().reveal(".projects h2", {
  delay: 300,
  duration: 500,
  distance: "30px",
  origin: "left"
});
ScrollReveal().reveal(".projects-list", {
  delay: 400,
  duration: 500,
  distance: "30px",
  origin: "top"
});
ScrollReveal().reveal(".contact", scrollOptions);
ScrollReveal().reveal(".contacts ul", scrollOptions);