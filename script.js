function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Functionallity for the dark mode toggle button
const darkModeButton = document.getElementById('darkModeToggle');

darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
