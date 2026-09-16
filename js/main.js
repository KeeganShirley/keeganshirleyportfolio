document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  const path = location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll("nav.main-nav a[data-match]").forEach((a) => {
    const match = a.getAttribute("data-match");
    if (match === path || (match !== "/" && path.startsWith(match))) {
      a.classList.add("active");
    }
  });

  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector("img");

  document.querySelectorAll("[data-zoomable]").forEach((img) => {
    img.addEventListener("click", () => {
      overlayImg.src = img.getAttribute("src");
      overlayImg.alt = img.getAttribute("alt") || "";
      overlay.classList.add("open");
    });
  });
  overlay.addEventListener("click", () => overlay.classList.remove("open"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("open");
  });
});
