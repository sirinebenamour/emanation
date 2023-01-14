const animation_container = document.getElementById("animation_container");
const salle3_texte = document.querySelector(".salle3_texte");

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.id === "salle3_texte") {
        console.log("je vois leau");
        animation_container.classList.add("visible");
      }
    }
  });
}, options);

observer.observe(animation_container);
observer.observe(salle3_texte);
