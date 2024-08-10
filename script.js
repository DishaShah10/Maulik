// Responsive Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact Form Submission (Simple example)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formMessage.textContent = 'Thank you for contacting us. We will get back to you soon!';
    contactForm.reset();
});
