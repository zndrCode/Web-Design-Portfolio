const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    navMenu.classList.remove("show");
  });
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* -------------------------
   CONTACT FORM (MAILTO)
-------------------------- */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = `Portfolio Contact from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

  window.location.href = `mailto:nzandergab@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
