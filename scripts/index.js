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

// Function to draw and move balls and check collision
function render() {
  ballsArr.forEach((ball) => {
    ball.draw();
    ball.move();
    ball.checkWallCollision(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);

    ballsArr.forEach((otherBall) => {
      if (ball === otherBall) return;
      ball.checkBallCollision(otherBall);
    });
  });
  requestAnimationFrame(render);
}

render();
