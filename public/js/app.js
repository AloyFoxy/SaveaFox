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

// Script show modal
window.addEventListener('load', function (event) {
  const body = document.querySelector('#body');
  // const modalLayer = document.querySelector('#layer');
  const modalLayer = document.querySelector('#layer');
  const modalContainer = document.querySelector('#small-modal');
  const modalElement = document.querySelector('#modal');

  this.setTimeout(() => {

    modalContainer.classList.add('flex');
    modalContainer.classList.toggle('-translate-y-full');
    modalLayer.classList.toggle('opacity-70');
    modalLayer.classList.toggle('hidden');

    if (!modalContainer.classList.contains('hidden')) {
      // Disable Scroll
      body.style.overflow = "hidden";
    } else {
      // Enable Scroll
      body.style.overflow = 'auto';
    }
  }, 1000);
});

document.querySelector("#close-modal").addEventListener("click", () => {
  const modalContainer = document.querySelector('#small-modal');
  const modalLayer = document.querySelector('#layer');
  const body = document.querySelector('#body');
  const cookieState = document.cookie;

  modalContainer.classList.toggle('hidden');
  modalLayer.classList.toggle('hidden');
  body.style.overflow = 'auto';

})