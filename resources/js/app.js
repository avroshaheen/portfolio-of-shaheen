document.addEventListener("DOMContentLoaded", function () {
  /* -------------------------------------------------------------------------- */
  /*                       Nav Background Change on Scroll                      */
  /* -------------------------------------------------------------------------- */
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.offsetHeight;
  window.addEventListener("scroll", function () {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  /* -------------------------------------------------------------------------- */
  /*                             Navbar Link Active Status                      */
  /* -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", function () {
    let currentSection = null;
    let minDistance = Infinity;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - window.innerHeight / 3);
      if (
        rect.top >= -section.clientHeight / 2 &&
        rect.top < window.innerHeight / 2
      ) {
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section.getAttribute("id");
        }
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
      if (
        currentSection &&
        link.getAttribute("href").includes(currentSection)
      ) {
        link.classList.add("active-nav-link");
      }
    });
  });
  /* -------------------------------------------------------------------------- */
  /*                               Mobile Navbar Toggle                         */
  /* -------------------------------------------------------------------------- */
  const menuIcon = document.querySelector(".nav-toggler");
  const navbarContent = document.querySelector(".navbar-content");
  menuIcon.addEventListener("click", function (event) {
    navbarContent.classList.toggle("show");
    menuIcon.classList.toggle("show");
    event.stopPropagation();
  });
  document.addEventListener("click", function (event) {
    if (
      !navbarContent.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      navbarContent.classList.remove("show");
      menuIcon.classList.remove("show");
    }
  });
  /* -------------------------------------------------------------------------- */
  /*                             EmailJS Integration                            */
  /* -------------------------------------------------------------------------- */
  (function () {
    emailjs.init("dShqwFPB0DRVmOlF3"); // Public Key
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
          statusMessage.style.color = "white";
          contactForm.reset(); // Clear form fields after success
        })
        .catch((error) => {
          statusMessage.innerText = "❌ Failed to send message.";
          statusMessage.style.color = "red";
          console.error("EmailJS Error:", error);
        });
    });
  }
  /* -------------------------------------------------------------------------- */
  /*                             Dynamic Credit Year                            */
  /* -------------------------------------------------------------------------- */
  const year = new Date().getFullYear();
  console.log(year);
  document.getElementById("year").textContent = new Date().getFullYear();
});
