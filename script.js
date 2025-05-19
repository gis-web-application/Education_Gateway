// Function to fade out the preloader
function fadeOutPreloader() {
    const preloader = document.querySelector('.wrapper');
    preloader.classList.add('fade');
    // Remove the preloader from the DOM after fade-out transition
    setTimeout(() => preloader.remove(), 1000);
}

// Add an event listener to fade out the preloader when the window is fully loaded
window.addEventListener('load', fadeOutPreloader);
