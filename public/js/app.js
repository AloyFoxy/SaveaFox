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
  const modalElement = document.querySelector('#modal');

  this.setTimeout(() => {

    modalContainer.classList.add('flex');
    modalContainer.classList.toggle('opacity-100');
  }, 200);
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
    '(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'
// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

// text-sm font-medium antialiased text-darkcolor dark:text-gray-400