document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const timerDisplay = document.getElementById('timer');
    const blank1 = document.getElementById('blank1');
    const blank2 = document.getElementById('blank2');
    const messageDisplay = document.getElementById('message');

    const correct1 = "transition";
    const correct2 = "sustainable";
    let timer;
    let timeLeft = 60;
    let gameActive = false;

    // Function to start the game
    function startGame() {
        if (gameActive) return;
        gameActive = true;
        timeLeft = 60;
        timerDisplay.textContent = timeLeft;
        messageDisplay.textContent = "";
        blank1.value = "";
        blank2.value = "";
        blank1.disabled = false;
        blank2.disabled = false;
        startButton.textContent = "Reset Game";
        
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
        gameActive = false;
        blank1.disabled = true;
        blank2.disabled = true;
        messageDisplay.textContent = msg;
        startButton.textContent = "Start Game";
    }

    // Function to check the user's answers
    function checkAnswers() {
        // Convert user input to lowercase for a case-insensitive check
        const val1 = blank1.value.toLowerCase().trim();
        const val2 = blank2.value.toLowerCase().trim();

        if (val1 === correct1 && val2 === correct2) {
            endGame("🥳 Excellent! You got it right!");
        } else {
            // Provide feedback without ending the game
            messageDisplay.textContent = "Keep trying! Those aren't quite right.";
        }
    }

    // Listen for the start button click
    startButton.addEventListener('click', () => {
        if (!gameActive) {
            startGame();
        } else {
            endGame("Game has been reset.");
        }
    });

    // Listen for input changes to check answers in real-time
    blank1.addEventListener('input', checkAnswers);
    blank2.addEventListener('input', checkAnswers);
});
