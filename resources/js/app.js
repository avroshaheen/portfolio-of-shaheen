document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".nav-toggler");
  const navbarContent = document.querySelector(".navbar-content");
  const navbar = document.querySelector(".navbar");
  menuIcon.addEventListener("click", function (event) {
    navbarContent.classList.toggle("show");
    event.stopPropagation();
  });
  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target)) {
      navbarContent.classList.remove("show");
    }
  });

  //Color Mode
  const modeToggle = document.getElementById("mode-toggle");
  const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");
  const lightModeStylesheet = document.getElementById("light-mode-stylesheet");

  // Function to switch to dark mode
  function switchToDarkMode() {
    darkModeStylesheet.disabled = false;
    lightModeStylesheet.disabled = true;
  }

  // Function to switch to light mode
  function switchToLightMode() {
    darkModeStylesheet.disabled = true;
    lightModeStylesheet.disabled = false;
  }

  // Initialize with dark mode as default
  switchToDarkMode();

  // Event listener for checkbox change
  modeToggle.addEventListener("change", function () {
    if (this.checked) {
      switchToLightMode(); // Switch to light mode
    } else {
      switchToDarkMode(); // Switch to dark mode
    }
  });
});
