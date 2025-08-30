// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("response");

  if (name && email && message) {
    response.textContent = "✅ Thank you, " + name + "! Your message has been sent.";
    response.style.color = "green";
    this.reset();
  } else {
    response.textContent = "❌ Please fill in all fields.";
    response.style.color = "red";
  }
});