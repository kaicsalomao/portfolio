particlesJS.load("particles-container", "static/particles.json");
var scrollOptions = {
  delay: 300,
  duration: 500,
  distance: "30px",
  origin: "top",
};
ScrollReveal().reveal(".header h1", {
  delay: 300,
  duration: 700,
  distance: "30px",
  origin: "top"
});
ScrollReveal().reveal("#header-ligature-text", {
  delay: 900,
  duration: 700,
  distance: "30px",
  origin: "top"
});
ScrollReveal().reveal("#header-ligature", {
  delay: 1000,
  duration: 700,
  distance: "30px",
  origin: "top"
});
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
ScrollReveal().reveal(".more-information:nth-child(2) p", {
  delay: 300,
  origin: "left",
  distance: "40px",
  duration: 700,
});
ScrollReveal().reveal(".more-information:nth-child(4) p", {
  delay: 300,
  origin: "right",
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

 var headerLigature = document.querySelector("#header-ligature");
 var headerLigatureBox = document.querySelector(".header-ligature-box");
 var height = 600;
 headerLigature.style.height = height + "px";
 headerLigatureBox.style.marginTop = -(height/2) + "px";

