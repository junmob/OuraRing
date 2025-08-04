const menuToggle = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
});

let lastScrollY = window.scrollY;
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (Math.abs(currentScrollY - lastScrollY) > 5) {
    if (currentScrollY > lastScrollY) {
      header.classList.add("hide-header");
    } else {
      header.classList.remove("hide-header");
    }
    lastScrollY = currentScrollY;
  }
});