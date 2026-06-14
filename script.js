// =========================================================
// Pulse landing page — small interactions
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close mobile nav after clicking a link
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Only allow one FAQ item open at a time
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) other.removeAttribute("open");
        });
      }
    });
  });
});
