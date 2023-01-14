const nuage_gauche = document.getElementById("nuage_gauche");
const nuage_droite = document.getElementById("nuage_droite");

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.id === "nuage_gauche") {
        console.log("nuage gauche");
        nuage_gauche.classList.add("animation_gauche");
      } else if (entry.target.id === "nuage_droite") {
        nuage_droite.classList.add("animation_droite");
      }
    }
  });
}, options);

observer.observe(nuage_gauche);
observer.observe(nuage_droite);
