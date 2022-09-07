document.querySelector("#toggle").addEventListener("click", () => {
  const darkBtn = document.querySelector("#toggle");

  document.querySelector("html").classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
});
document.querySelector("#toggle2").addEventListener("click", () => {
  const darkBtn = document.querySelector("#toggle2");
  const moonIcon = document.querySelector("#moonIcon");
  const sunIcon = document.querySelector("#sunIcon");

  document.querySelector("html").classList.toggle("dark");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
});

// const themeToggle = document.querySelector('#theme-toggle');

// themeToggle.addEventListener('change', ()=> {
//     document.querySelector('body').classList.toggle('dark');
// });

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#btnNav");

  document.querySelector("#btnNav").addEventListener("click", () => {
    navBtn.classList.toggle("tham-active");
    nav.classList.toggle("translate-x-0");
  });

  // document.querySelector(".nav-overlay").addEventListener("click", () => {
  //     nav.classList.remove("nav-open");
  // });
});

let hola = "hola";

if (hola !== "hola") {
  console.log("es Hola");
  setShow(true);
  once && observer.disconnect();
} else {
  console.log("No es Hola");
}

const onChange = (entries, observer) => {
  const el = entries[0];
  if (el.isIntersecting === true) {
    setShow(true);
    once && observer.disconnect();
  } else {
    !once && setShow(false);
  }
};
