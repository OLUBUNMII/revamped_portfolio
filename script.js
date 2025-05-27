// Technology skills list
const technologies = [
  // "JavaScript ", 
  "HTML  5️⃣", 
  "CSS 🎨", 
  "Python 🐍", 
  "Git 🧬", 
  "Automation 🤖",
  "End User Support 🛠️",
  "Amazon Web Services ☁️",
  "Responsive Design 🧩",  
  "Web Development 👨🏾‍💻"
];

// DOM Elements
const slider = document.querySelector(".slider");
const navbar = document.getElementById("navbar");

// Create and populate the technology carousel
function initTechCarousel() {
  if (!slider) return;
  
  // Create technology tags - duplicate for seamless loop
  const loopedTechnologies = [...technologies, ...technologies];
  
  let carouselHTML = "";
  loopedTechnologies.forEach(tech => {
    carouselHTML += `<button class="language">${tech}</button>`;
  });
  
  slider.innerHTML = carouselHTML;
}

// Handle navbar scroll effect
function initNavbarScroll() {
  if (!navbar) return;
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menu = document.querySelector(".nav__menu");
  const openBtn = document.getElementById("open-menu-btn");
  const closeBtn = document.getElementById("close-menu-btn");
  
  if (!menu || !openBtn || !closeBtn) return;
  
  openBtn.addEventListener("click", () => {
    menu.classList.add("active");
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
  });
  
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
  });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking a link
      const menu = document.querySelector(".nav__menu");
      if (menu && menu.classList.contains("active")) {
        document.getElementById("close-menu-btn").click();
      }
    });
  });
}

// Initialize all scripts when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initTechCarousel();
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
});
