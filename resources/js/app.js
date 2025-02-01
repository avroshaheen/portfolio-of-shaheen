document.addEventListener("DOMContentLoaded", function () {
  // Navbar Toggle
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

  // Color Mode
  const modeToggle = document.getElementById("mode-toggle");
  const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");
  const lightModeStylesheet = document.getElementById("light-mode-stylesheet");

  function switchToDarkMode() {
    darkModeStylesheet.disabled = false;
    lightModeStylesheet.disabled = true;
  }

  function switchToLightMode() {
    darkModeStylesheet.disabled = true;
    lightModeStylesheet.disabled = false;
  }

  // Initialize with dark mode as default
  switchToDarkMode();

  modeToggle.addEventListener("change", function () {
    if (this.checked) {
      switchToLightMode();
    } else {
      switchToDarkMode();
    }
  });

  // EmailJS Integration
  (function () {
    emailjs.init("dShqwFPB0DRVmOlF3"); // Your Public Key
  })();

  const contactForm = document.getElementById("contactForm");
  const statusMessage = document.getElementById("status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs
        .sendForm("getjob_avro", "template_tmavbum", this)
        .then(() => {
          statusMessage.innerText = "✅ Message sent successfully!";
          statusMessage.style.color = "green";
          contactForm.reset(); // Clear form fields after success
        })
        .catch((error) => {
          statusMessage.innerText = "❌ Failed to send message.";
          statusMessage.style.color = "red";
          console.error("EmailJS Error:", error);
        });
    });
  }
});
