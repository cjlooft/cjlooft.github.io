document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    const blank1 = document.getElementById('blank1');
    const blank2 = document.getElementById('blank2');
    const messageDisplay = document.getElementById('message');

    const correct1 = "build";
    const correct2 = "amazing";
    let timer;
    let timeLeft = 30;
    
    // Function to start the game
    function startGame() {
        timeLeft = 30;
        timerDisplay.textContent = timeLeft;
        messageDisplay.textContent = "";
        blank1.value = "";
        blank2.value = "";
        blank1.disabled = false;
        blank2.disabled = false;
        
        // Start the countdown timer
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            // Check if time has run out
            if (timeLeft <= 0) {
                endGame("Time's up! You did not complete the phrase in time.");
            }
        }, 1000); // Update every second
    }

    // Function to end the game and check answers
    function endGame(msg) {
        clearInterval(timer);
        blank1.disabled = true;
        blank2.disabled = true;
        messageDisplay.textContent = msg;
    }

    // Function to check the user's answers
    function checkAnswers() {
        // Convert user input to lowercase for a case-insensitive check
        const val1 = blank1.value.toLowerCase().trim();
        const val2 = blank2.value.toLowerCase().trim();

        if (val1 === correct1 && val2 === correct2) {
            endGame("🥳 Excellent! You got it right!");
        }
    }

    // Listen for input changes to check answers in real-time
    blank1.addEventListener('input', checkAnswers);
    blank2.addEventListener('input', checkAnswers);

    // Call startGame() when the page loads
    startGame();
});
