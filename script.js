const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = `Portfolio Contact from ${name}`;
  const body =
    `Name: ${name}%0D%0A` +
    `Email: ${email}%0D%0A%0D%0A` +
    message;

  window.location.href =
    `mailto:nzandergab@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
