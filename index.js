const toggleBtn = document.getElementById("toggle-btn");
const toggleBtnIcon = document.querySelector(".burger i");
const dropdownMenu = document.getElementById("dropdown-menu");
toggleBtn.onclick = () => {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  toggleBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

window.addEventListener("scroll", function () {
  const header = document.getElementById("headerBloc");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const video = document.getElementById("maVideo");

// Lecture au survol
video.addEventListener("mouseenter", () => {
  video.play();
});

// Pause quand la souris quitte la vidéo
video.addEventListener("mouseleave", () => {
  video.pause();
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // empêche le rechargement de la page

  // récupère les valeurs du formulaire
  const formData = {
    name: form.elements["username"].value,
    email: form.elements["email"].value,
    tel: form.elements["phone"].value,
    message: form.elements["message"].value,
  };

  // envoie la requête vers ton back Node.js
  const response = await fetch("https://portfolio-on22.onrender.com/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  document.getElementById("responseMessage").textContent = result.message;
});
