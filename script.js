// =========================
// Part 1: Theme Toggle
// =========================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =========================
// Part 2: Interactive Elements
// =========================

// Counter
let count = 0;
const incrementBtn = document.getElementById("incrementBtn");
const counterValue = document.getElementById("counterValue");

incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// FAQ Collapsible (Accordion style)
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // Close all other open answers (Accordion behavior)
    document.querySelectorAll(".faq-answer.open").forEach((open) => {
      if (open !== answer) open.classList.remove("open");
    });

    // Toggle current one
    answer.classList.toggle("open");
  });
});

// Dropdown Menu
const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent closing instantly
  menuList.classList.toggle("show");
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!menuList.contains(e.target) && e.target !== menuBtn) {
    menuList.classList.remove("show");
  }
});

// =========================
// Part 3: Form Validation
// =========================
const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear messages
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // Success
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Registration successful!";
    form.reset();
  }
});
