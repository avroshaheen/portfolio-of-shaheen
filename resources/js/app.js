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
