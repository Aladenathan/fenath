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

// Simulate a delay for testing
// window.addEventListener('load', function () {
//     setTimeout(function () {
//         const spinner = document.getElementById('loading-spinner');
//         spinner.style.display = 'none';
//     }, 3000); // 3-second delay for testing
// });



// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggle element
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved user preference, if any
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.add(currentTheme);
      themeToggle.checked = currentTheme === 'dark-theme';
      updateThemeText();
    }
  
    // Set initial theme based on system preference if no saved preference
    if (!currentTheme) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
        localStorage.setItem('theme', 'dark-theme');
      } else {
        localStorage.setItem('theme', 'light-theme');
      }
      updateThemeText();
    }
  
    // Listen for toggle changes
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light-theme');
      }
      updateThemeText();
    });
  
    // Update the theme toggle label text
    function updateThemeText() {
      const themeLabels = document.querySelectorAll('.form-check-label');
      if (document.body.classList.contains('dark-theme')) {
        themeLabels.forEach(label => label.textContent = 'Light Mode');
      } else {
        themeLabels.forEach(label => label.textContent = 'Dark Mode');
      }
    }

  });


// Ad Banner Functionality
document.addEventListener('DOMContentLoaded', function() {
  const bannerTrack = document.querySelector('.ad-banner-track');
  const bannerItems = document.querySelectorAll('.ad-banner-item');
  const itemWidth = bannerItems[0].offsetWidth;
  let currentPosition = 0;
  let autoScrollInterval;

  // Function to move to next ad
  function moveToNextAd() {
    currentPosition -= itemWidth;
    bannerTrack.style.transform = `translateX(${currentPosition}px)`;
    
    // Reset position when reached the end (for infinite loop)
    if (Math.abs(currentPosition) >= itemWidth * (bannerItems.length / 2)) {
      currentPosition = 0;
      bannerTrack.style.transform = `translateX(0)`;
    }
  }

  // down ad Start auto-scrolling
  function startAutoScroll() {
    autoScrollInterval = setInterval(moveToNextAd, 10000); // 10 seconds
  }

  // Initialize
  startAutoScroll();

  // Pause on hover
  document.querySelector('.ad-banner-container').addEventListener('mouseenter', function() {
    clearInterval(autoScrollInterval);
  });

  // Resume when mouse leaves
  document.querySelector('.ad-banner-container').addEventListener('mouseleave', function() {
    startAutoScroll();
  });
});



  document.addEventListener('DOMContentLoaded', function() {
    // Only show on homepage
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      setTimeout(function() {
        const popup = new bootstrap.Modal(document.getElementById('adPopup'));
        popup.show();
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  });
