window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // player start position (in the middle of the screen)
    let x = 350;
    let y = 150;

    // updates the game every 50ms
    setTimeout(gameLoop, 50);
    function gameLoop() {
        drawSquare(x, y);
        setTimeout(gameLoop, 50);
    }

    // player movement
    window.onkeydown = onClick;
    function onClick(keycode) {
        switch (keycode.keyCode) {
            case 37: // LEFT
                x = x - 10
                break;
            case 38: // UP
                y = y - 10;
                break;
            case 39: // RIGHT
                x = x + 10
                break;
            case 40: // DOWN
                y = y + 10;
                break;
        }
    }

    function drawSquare(x, y) {
        ctx.clearRect(0, 0, 800, 400)
        ctx.fillStyle = "#00F";
        ctx.fillRect(x, y, 100, 100);
    }
}