const greeting = document.getElementById('greeting');
const confettiContainer = document.getElementById('confetti-container');
const colors = ['#FFD700', '#B8860B', '#EEE8AA']; // Goldenrod shades
let isVisible = true;
let flashInterval;

function flashText() {
    clearInterval(flashInterval); // Clear any existing interval
    flashInterval = setInterval(() => {
        greeting.style.visibility = isVisible ? 'hidden' : 'visible';
        isVisible = !isVisible;
    }, 500); // Adjust the flashing speed (milliseconds)

    // Stop flashing after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
        clearInterval(flashInterval);
        greeting.style.visibility = 'visible'; // Ensure it's visible at the end
        startConfetti();
    }, 3000); // 3000 milliseconds = 3 seconds
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * confettiContainer.offsetWidth;
    const startY = -20; // Start above the container
    const size = Math.random() * 10 + 5;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size * 1.5}px`; // Keep a rectangular shape
    confetti.style.left = `${startX}px`;
    confetti.style.top = `${startY}px`;
    confetti.style.opacity = 1;

    const animationDuration = Math.random() * 2 + 1; // 1 to 3 seconds
    const fallDistance = confettiContainer.offsetHeight + 20;
    const rotation = Math.random() * 360;

    confetti.style.transition = `top ${animationDuration}s ease-in-out, opacity ${animationDuration * 0.8}s ease-out, transform ${animationDuration}s ease-in-out`;

    confettiContainer.appendChild(confetti);

    // Animate
    setTimeout(() => {
        confetti.style.top = `${fallDistance}px`;
        confetti.style.opacity = 0;
        confetti.style.transform = `rotate(${rotation}deg) scale(0.8)`;
    }, 50); // Small delay to ensure transition is applied

    // Remove confetti after it falls
    setTimeout(() => {
        confetti.remove();
    }, animationDuration * 1000 + 500);
}

function startConfetti() {
    const confettiInterval = setInterval(createConfetti, 100); // Create confetti every 100 milliseconds

    // Stop confetti after 3 seconds
    setTimeout(() => {
        clearInterval(confettiInterval);
    }, 3000);
}

// Start the flashing when the page loads
window.onload = flashText;
