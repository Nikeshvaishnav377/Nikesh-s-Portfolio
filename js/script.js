// Initialize Typed.js only after the script is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect without Typed.js
    var element = document.getElementById("element");
    var words = ["Front-end Developer", "Video Editor", "Digital Marketing"];
    var wordIndex = 0;
    var letterIndex = 0;
    var typingSpeed = 100;
    var deletingSpeed = 50;
    var isDeleting = false;

    function typeEffect() {
        if (!isDeleting && letterIndex < words[wordIndex].length) {
            element.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && letterIndex > 0) {
            element.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeEffect, 1000);
        }
    }

    typeEffect();

    // Toggle Menu for Mobile
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".about-box, .project-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.add("hidden");
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});


    document.addEventListener("DOMContentLoaded", function () {
        const skillCategories = document.querySelectorAll(".skill-category");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    entry.target.classList.remove("hide");
                } else {
                    entry.target.classList.remove("show");
                    entry.target.classList.add("hide");
                }
            });
        }, { threshold: 0.3 });

        skillCategories.forEach(category => observer.observe(category));
    });
