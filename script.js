// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Typing effect
const texts = [
    "A ponte entre o que tu queres e quem te procura.",
    "Transformamos ideias em impacto real.",
    "Marketing inteligente, resultados extraordinários.",
    "A tua marca, amplificada."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById('typed-text');

function typeEffect() {
    if (!typedElement) return; // Garante que o elemento existe

    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect after page load
setTimeout(typeEffect, 1000);

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) { // Verifica se os elementos existem
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on link
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 80) { // Ajustado para corresponder ao padding do navbar
            navbar.style.background = 'rgba(25, 28, 61, 0.98)'; // Fundo mais opaco ao scroll
        } else {
            navbar.style.background = 'rgba(25, 28, 61, 0.95)'; // Fundo original
        }
    }
});