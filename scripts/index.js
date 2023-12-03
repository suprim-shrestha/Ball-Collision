// Balls will be rendered in this DOM element
const viewport = document.getElementById("viewport");

// Array to store balls
var ballsArr = [];

// Add balls to balls array
for (let i = 0; i < BALL_COUNT; i++) {
  let r = getRandomNum(MIN_BALL_RADIUS, MAX_BALL_RADIUS);
  let x = getRandomNum(0, VIEWPORT_WIDTH - r * 2);
  let y = getRandomNum(0, VIEWPORT_HEIGHT - r * 2);
  let colorIndex = Math.floor(getRandomNum(0, 8));
  let color = COLOR_ARRAY[colorIndex];
  const ball = new Ball(x, y, r, color);

  ballsArr.push(ball);
}

// Add balls to viewport
ballsArr.forEach((ball) => {
  viewport.appendChild(ball.getElement());
});

let lastRenderTime = 0;
let framerate = 60;

// Function to draw and move balls and check collision
function render(currentTime) {
  // Set framerate to 60fps
  const timeSinceLastRender = currentTime - lastRenderTime;
  if (timeSinceLastRender > 1000 / framerate) {
    lastRenderTime = currentTime;
    ballsArr.forEach((ball) => {
      ball.draw();
      ball.move();

      ballsArr.forEach((otherBall) => {
        if (ball === otherBall) return;
        ball.checkBallCollision(otherBall);
      });

      ball.checkWallCollision(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    });
  }

  requestAnimationFrame(render);
}

render();
