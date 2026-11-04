const toggleBtn = document.getElementById("toggle-btn");
const toggleBtnIcon = document.querySelector(".burger i");
const dropdownMenu = document.getElementById("dropdown-menu");
toggleBtn.onclick = () => {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  toggleBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const links = document.querySelectorAll(".menu-mobile-link");
links.forEach((link) => {
  link.onclick = () => {
    dropdownMenu.classList.remove("open");
    toggleBtnIcon.className = "fa-solid fa-bars";
  };
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("headerWrapper");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const video = document.getElementById("maVideo");

// // Lecture
// video.addEventListener("mouseenter", () => {
//   video.play();
// });
// //Pause
// video.addEventListener("mouseleave", () => {
//   video.pause();
// });

// const form = document.getElementById("contactForm");
// const responseMessage = document.getElementById("responseMessage");

// function sanitizeInput(value) {
//   return value
//     .normalize("NFC")
//     .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
//     .trim();
// }

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const formData = {
//     username: sanitizeInput(form.elements["username"].value),
//     email: sanitizeInput(form.elements["email"].value),
//     tel: sanitizeInput(form.elements["phone"].value),
//     message: sanitizeInput(form.elements["message"].value),
//   };

//   // Validation minimale
//   if (!formData.username || !formData.email || !formData.message) {
//     responseMessage.textContent = "Merci de remplir les champs obligatoires.";
//     return;
//   }

//   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//     responseMessage.textContent = "Veuillez saisir une adresse e-mail valide.";
//     return;
//   }

//   try {
//     const response = await fetch("https://portfolio-on22.onrender.com/send-email", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error("Erreur lors de l'envoi du formulaire.");
//     }

//     const result = await response.json();

//     // textContent évite d'interpréter le message comme du HTML
//     responseMessage.textContent = result.message || "Votre message a bien été envoyé.";

//     form.reset();
//   } catch (error) {
//     responseMessage.textContent = "Une erreur est survenue. Veuillez réessayer.";
//   }
// });

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = {
    username: form.elements["username"].value,
    email: form.elements["email"].value,
    tel: form.elements["phone"].value,
    message: form.elements["message"].value,
  };
  form.reset();
  const response = await fetch("https://portfolio-on22.onrender.com/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  document.getElementById("responseMessage").textContent = result.message;
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function trackAndDownload() {
  navigator.sendBeacon("https://portfolio-on22.onrender.com/track-cv");
}
