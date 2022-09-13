// Toggle darkmode desktop
document.querySelector("#toggle").addEventListener("click", () => {
  const darkBtn = document.querySelector("#toggle");
  const moonIcon = document.querySelector("#moonIcon");
  const sunIcon = document.querySelector("#sunIcon");

  document.querySelector("html").classList.toggle("dark");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
});

// Toggle darkmode mobile
document.querySelector("#toggle2").addEventListener("click", () => {
  const darkBtn2 = document.querySelector("#toggle2");
  const moonIcon = document.querySelector("#moonIcon2");
  const sunIcon = document.querySelector("#sunIcon2");

  document.querySelector("html").classList.toggle("dark");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
});

// Toggle btn navbar mobile & animation
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#btnNav");

  document.querySelector("#btnNav").addEventListener("click", () => {
    navBtn.classList.toggle("tham-active");
    nav.classList.toggle("translate-x-full");
  });
});