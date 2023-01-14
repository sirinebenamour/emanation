const head = document.querySelector("header");
const introduction = document.querySelector(".introduction");

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.id === "introduction") {
        console.log("introduction");
        head.classList.add("cacher");
      } else {
        head.classList.remove("cacher");
      }
    }
  });
}, options);

observer.observe(head);
observer.observe(introduction);
