document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const navButtons = document.querySelectorAll('.nav-button');

    let currentIndex = 0;

    function updateSlider() {
        const newTransformValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function changeSlide(index) {
        currentIndex = index;
        updateSlider();
        updateNavButtons();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
        updateNavButtons();
    }

    function updateNavButtons() {
        navButtons.forEach((button, index) => {
            if (index === currentIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    setInterval(nextSlide, 4000); // Change slide every 3 seconds

    // Debugging click events
    navButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            changeSlide(index);
        });
    });
});