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
  /*                            Hero Title Animation                            */
  /* -------------------------------------------------------------------------- */
  // function([string1, string2],target id,[color1,color2])
  consoleText(["Web Designer", "Frontend Developer"], "hero-terminal-text", [
    "white",
  ]);
  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    // Add the text typing effect only to the span with the dynamic text
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 170);
    // Handle blinking underscore animation separately for the console effect
    window.setInterval(function () {
      if (visible === true) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";
        visible = true;
      }
    }, 500);
  }
  /* -------------------------------------------------------------------------- */
  /*                             EmailJS Integration                            */
  /* -------------------------------------------------------------------------- */
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
