const intro = document.getElementById("intro");

document.getElementById("enterBtn").addEventListener("click", () => {
  intro.classList.add("hide");
  burst();
});

const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});

document.querySelectorAll(".navlinks a").forEach(a => {
  a.addEventListener("click", () => navlinks.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const particles = document.getElementById("particles");

function makeParticle() {
  const p = document.createElement("span");
  p.className = "particle";
  p.textContent = ["✦", "✧", "🌸", "•"][Math.floor(Math.random() * 4)];
  p.style.left = Math.random() * 100 + "%";
  p.style.fontSize = 10 + Math.random() * 18 + "px";
  p.style.animationDuration = 6 + Math.random() * 8 + "s";

  particles.appendChild(p);

  setTimeout(() => p.remove(), 15000);
}

setInterval(makeParticle, 700);

const modal = document.getElementById("modal");

document.getElementById("surpriseBtn").addEventListener("click", () => {
  modal.classList.add("show");
  burst();
});

document.getElementById("closeBtn").addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

function burst() {
  for (let i = 0; i < 35; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = ["🎉", "✨", "🌸", "⭐"][Math.floor(Math.random() * 4)];
    p.style.left = 35 + Math.random() * 30 + "%";
    p.style.top = 35 + Math.random() * 20 + "%";
    p.style.animationDuration = 2 + Math.random() * 3 + "s";

    particles.appendChild(p);

    setTimeout(() => p.remove(), 6000);
  }
}
