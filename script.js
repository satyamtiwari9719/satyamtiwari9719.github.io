
// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// ============================
// TYPING ANIMATION
// ============================

const typingText = document.getElementById("typingText");

const words = [
    "Aspiring Developer",
    "Python Programmer",
    "CSE Student",
    "Tech Enthusiast"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 55 : 100;

    if (!deleting && characterIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ============================
// SCROLL REVEAL ANIMATION
// ============================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .stat-card, " +
    ".skill-card, .project-card, .education-card, .contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ============================
// ACTIVE NAVIGATION
// ============================

const sections = document.querySelectorAll("main section");

const navObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            document.querySelectorAll(".nav-link").forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-link[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

    });

}, {
    rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => {
    navObserver.observe(section);
});


// ============================
// DYNAMIC FOOTER YEAR
// ============================

document.getElementById("year").textContent =
    new Date().getFullYear();
