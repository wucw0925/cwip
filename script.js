const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-header nav");

const syncHeader = () => {
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
};

const closeMenu = () => {
  if (!toggle || !nav) return;
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "開啟選單");
  toggle.textContent = "☰";
};

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
    toggle.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
