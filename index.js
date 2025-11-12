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

// Lecture
video.addEventListener("mouseenter", () => {
  video.play();
});
//Pause
video.addEventListener("mouseleave", () => {
  video.pause();
});

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
