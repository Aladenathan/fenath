document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    // Initialize the carousel with autoplay
const carousel = new bootstrap.Carousel('#carouselExampleIndicators', {
    interval: 5000, // Change slide every 3 seconds
    pause: 'hover' // Pause on hover
});
});

// Add spin animation on touch for mobile devices
document.addEventListener('DOMContentLoaded', function () {
    const phoneImage = document.getElementById('phone-image');

    // Add touch event listener for mobile devices
    phoneImage.addEventListener('touchstart', function () {
        phoneImage.classList.add('spin-on-touch');
    });

    // Remove the class after the animation ends
    phoneImage.addEventListener('animationend', function () {
        phoneImage.classList.remove('spin-on-touch');
    });
});

// Hide the spinner when the page is fully loaded
window.addEventListener('load', function () {
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'none';
});
