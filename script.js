const advantagesElements = document.querySelectorAll(".advantages");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animateAdvantages");
      observer.unobserve(entry.target);
    }
  });
});

advantagesElements.forEach((element) => {
  observer.observe(element);
});
