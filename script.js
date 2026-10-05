document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("mobile-open");
  menuBtn.textContent = open ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
    menuBtn.textContent = "☰";
  });
});

function sendQuote(event) {
  event.preventDefault();
  // CHANGE THIS to your real business email before publishing.
  const businessEmail = "your-email@example.com";
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();

  const subject = encodeURIComponent("SME Website Enquiry - " + service);
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Service: " + service + "\n\n" +
    "Project details:\n" + details
  );
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
}
