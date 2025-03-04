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

// Hide the spinner when the page is fully loaded
window.addEventListener('load', function () {
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'none';
});

// Simulate a delay for testing
window.addEventListener('load', function () {
    setTimeout(function () {
        const spinner = document.getElementById('loading-spinner');
        spinner.style.display = 'none';
    }, 9000); // 3-second delay for testing
});