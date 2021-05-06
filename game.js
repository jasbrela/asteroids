window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const player = new Image();
    const asteroid = new Image();
    asteroid.src = "images/asteroid.png";

    // player start position (in the middle of the screen)
    let playerX = 350;
    let playerY = 150;

    let asteroidX;
    let asteroidY;

    // updates the game
    let timeout = 200;

    let seconds = 0;

    let id = setInterval(gameLoop, timeout);
    function gameLoop() {
        setInterval(counter, 1000);
        playerMovement(playerX, playerY);
        asteroidController();
        collisionsDetector(asteroidX, asteroidY);
    }

    // player movement
    window.onkeydown = onClick;

    function onClick(keycode) {
        switch (keycode.keyCode) {
            case 65:
            case 37: // LEFT
                player.src = "images/rocket-left.png";
                playerX = playerX - 10
                break;
            case 87:
            case 38: // UP
                player.src = "images/rocket-up.png";
                playerY = playerY - 10;
                break;
            case 68:
            case 39: // RIGHT
                player.src = "images/rocket-right.png";
                playerX = playerX + 10
                break;
            case 83:
            case 40: // DOWN
                player.src = "images/rocket-down.png";
                playerY = playerY + 10;
                break;
        }
    }

    function collisionsDetector(asteroidX, asteroidY) {
        if (((playerX + 32) > asteroidX && playerX < (asteroidX + 32)) &&
            ((playerY + 32) > asteroidY) && (playerY < (asteroidY + 32))) {

            window.clearInterval(id);
        }
    }

    function playerMovement(x, y) {
        ctx.clearRect(0, 0, 800, 400);
        ctx.drawImage(player, x, y);
    }

    function Randomizer(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function asteroidController() {
        asteroidX = Randomizer(800);
        asteroidY = Randomizer(400);
        ctx.drawImage(asteroid, asteroidX, asteroidY);
    }

    function counter() {
        seconds++;
    }
}