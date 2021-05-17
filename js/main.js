const phrases = [
  {
    start: "Мысли ",
    end: "Глобально",
  },
  {
    start: "Усердие",
    end: "Превозмогает",
  },
  {
    start: "Скажи",
    end: " Хорошо",
  },
];

const headingRight = document.querySelector(".right");
const headingLeft = document.querySelector(".left");
const heroPhrase = document.querySelector(".hero-phrase");
const btnLeft = document.querySelector(".button-left");
const btnRight = document.querySelector(".button-right");
const dots = document.querySelectorAll(".dot");
const heroDots = document.querySelector(".hero-dots");

heroPhrase.innerHTML = phrases
  .map((phrase, idx) => {
    const { start, end } = phrase;
    let position = "next";
    if (idx === 0) {
      position = "active";
    }
    if (idx === phrases.length - 1) {
      position = "last";
    }
    return `<div class="slide ${position}"><h1 class="right" >${start}</h1>
    <h1 class="left">${end}</h1></div>`;
  })
  .join("");

const startSlider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = heroPhrase.firstElementChild;
  }

  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "left") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;

    if (!next) {
      next = heroPhrase.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }

  active.classList.add(["last"]);
  last.classList.add(["next"]);
  next.classList.add(["active"]);
};

const startDots = (type) => {
  const active = document.querySelector(".act");
  const last = document.querySelector(".lst");
  let next = active.nextElementSibling;
  if (!next) {
    next = heroDots.firstElementChild;
  }

  active.classList.remove("act");
  last.classList.remove("lst");
  next.classList.remove("nxt");

  if (type === "left") {
    active.classList.add("nxt");
    last.classList.add("act");
    next = last.previousElementSibling;

    if (!next) {
      next = heroDots.lastElementChild;
    }
    next.classList.remove("nxt");
    next.classList.add("lst");
    return;
  }

  active.classList.add("lst");
  last.classList.add("nxt");
  next.classList.add("act");
};

btnRight.addEventListener("click", () => {
  startSlider();
  startDots();
});
btnLeft.addEventListener("click", () => {
  startSlider("left");
  startDots("left");
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    dots.forEach((dt) => dt.classList.remove("act"));
    startSlider();
    dot.classList.add("act");
  });
});
