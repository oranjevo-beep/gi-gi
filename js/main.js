const phrases = [
  {
    start: "Мысли ",
    end: "Глобально",
    text: " Di Gi - это диджитал агенство полного цикла, направленное на самыйлучший результат наших клиентов в маркетинге, продажах и управлении",
  },
  {
    start: "Усердие",
    end: "Превозмогает",
    text: "Если Вашего бизнеса нет в Интернете, то Вас нет в бизнесе!",
  },
  {
    start: "Скажи",
    end: " Хорошо",
    text: " Первая и главная предпосылка успеха в бизнесе — это терпение",
  },
];
const colored = "colored";
const quotes = [
  {
    quote: `Если нужно создавать либо повышать имидж компании, то <span class="${colored}">диджитал-маркетинг</span> является наиболее подходящим`,
    author: "- Маргарита Акулич",
  },
  {
    quote: `Миру наплевать на вашу самооценку. Жизнь будет <span class="${colored}">требовать</span> от вас закончить дело до того, как вы почувствуете себя уверенно.`,
    author: "- Билл Гейтс",
  },
  {
    quote: `Половина того, что отделяет успешных предпринимателей от неудачников — это <span class="${colored}">настойчивость</span>.`,
    author: "Стив Джобс",
  },
];
// const headingRight = document.querySelector(".right");
// const headingLeft = document.querySelector(".left");
const heroPhrase = document.querySelector(".hero-phrase");
const btnLeft = document.querySelector(".button-left");
const btnRight = document.querySelector(".button-right");
const dots = document.querySelectorAll(".dot");
const heroDots = document.querySelector(".hero-dots");
const quotePhrase = document.querySelector(".quote-phrase");
const qDots = document.querySelectorAll(".quote-dot");
const quoteDots = document.querySelector(".quote-dots");

heroPhrase.innerHTML = phrases
  .map((phrase, idx) => {
    const { start, end, text } = phrase;
    let position = "next";
    if (idx === 0) {
      position = "active";
    }
    if (idx === phrases.length - 1) {
      position = "last";
    }
    return `<div class="slide ${position}"><h1 class="right" >${start}</h1>
    <h1 class="left">${end}</h1>
    <p>${text}</p></div>`;
  })
  .join("");

quotePhrase.innerHTML = quotes
  .map((quot, idx) => {
    const { quote, author } = quot;
    let position = "next-quote";
    if (idx === 0) {
      position = "active-quote";
    }
    if (idx === quotes.length - 1) {
      position = "last-quote";
    }
    return `<div class="quote-slide ${position}">
    ${quote}
    <p>${author}</p>
  </div>`;
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

const startSlider2 = (type) => {
  const active = document.querySelector(".active-quote");
  const last = document.querySelector(".last-quote");
  let next = active.nextElementSibling;
  if (!next) {
    next = quotePhrase.firstElementChild;
  }

  active.classList.remove(["active-quote"]);
  last.classList.remove(["last-quote"]);
  next.classList.remove(["next-quote"]);

  if (type === "left-quote") {
    active.classList.add("next-quote");
    last.classList.add("active-quote");
    next = last.previousElementSibling;

    if (!next) {
      next = quotePhrase.lastElementChild;
    }
    next.classList.remove(["next-quote"]);
    next.classList.add("last-quote");
    return;
  }

  active.classList.add(["last-quote"]);
  last.classList.add(["next-quote"]);
  next.classList.add(["active-quote"]);
};

const startDots2 = (type) => {
  const active = document.querySelector(".act-quote");
  const last = document.querySelector(".lst-quote");
  let next = active.nextElementSibling;
  if (!next) {
    next = quoteDots.firstElementChild;
  }

  active.classList.remove("act-quote");
  last.classList.remove("lst-quote");
  next.classList.remove("nxt-quote");

  if (type === "left-quote") {
    active.classList.add("nxt-quote");
    last.classList.add("act-quote");
    next = last.previousElementSibling;

    if (!next) {
      next = quoteDots.lastElementChild;
    }
    next.classList.remove("nxt-quote");
    next.classList.add("lst-quote");
    return;
  }

  active.classList.add("lst-quote");
  last.classList.add("nxt-quote");
  next.classList.add("act-quote");
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
qDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    qDots.forEach((dt) => dt.classList.remove("act-quote"));
    startSlider2();
    dot.classList.add("act-quote");
  });
});
function slide() {
  startSlider();
  startDots();
}
function slide2() {
  startSlider2();
  startDots2();
}
setInterval(slide, 5000);
setInterval(slide2, 5000);
