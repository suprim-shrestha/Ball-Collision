class Ball {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} r
   * @param {string} color
   */
  constructor(x, y, r = MAX_BALL_SIZE / 2, color = "#CCCCFF") {
    this.x = x;
    this.y = y;

    this.r = r;
    this.color = color;

    this.dx = getRandomNum(-1, 1);
    this.dy = getRandomNum(-1, 1);

    this.element = document.createElement("div");
    this.element.classList.add("ball");
    this.element.style.width = this.r * 2 + "px";
    this.element.style.height = this.r * 2 + "px";
    this.element.style.background = this.color;
  }

  /**
   * Returns the DOM element representing the ball
   *
   * @returns HTMLDivElement
   */
  getElement = () => this.element;

  /**
   * Returns x position of ball
   *
   * @returns number
   */
  getX = () => this.x;

  /**
   * Returns y position of ball
   *
   * @returns number
   */
  getY = () => this.y;

  /**
   * Set x position of ball
   *
   * @param {number} x
   */
  setX = (x) => {
    this.x = x;
  };

  /**
   * Set y position of ball
   *
   * @param {number} y
   */
  setY = (y) => {
    this.y = y;
  };

  /**
   * Set position of ball
   */
  draw = () => {
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
  };

  /**
   * Move ball to set position
   */
  move = () => {
    this.x += this.dx * SPEED;
    this.y += this.dy * SPEED;
  };

  /**
   * Check collision with wall and invert direction if collided
   *
   * @param {number} boundaryLeft
   * @param {number} boundaryTop
   * @param {number} boundaryWidth
   * @param {number} boundaryHeight
   */
  checkWallCollision = (
    boundaryLeft,
    boundaryTop,
    boundaryWidth,
    boundaryHeight
  ) => {
    if (this.x <= boundaryLeft || this.x + this.r * 2 >= boundaryWidth) {
      this.dx *= -1;
      this.x =
        this.x <= boundaryLeft ? boundaryLeft : boundaryWidth - this.r * 2;
    }
    if (this.y <= boundaryTop || this.y + this.r * 2 >= boundaryHeight) {
      this.dy *= -1;
      this.y =
        this.y <= boundaryTop ? boundaryTop : boundaryHeight - this.r * 2;
    }
  };

  /**
   * Check collision with another ball and invert direction of both balls if collided
   *
   * @param {Ball} ball
   */
  checkBallCollision = (ball) => {
    const dist = distance(this.x, this.y, ball.x, ball.y);

    const sumOfRadii = this.r + ball.r;

    if (dist <= sumOfRadii) {
      this.dx *= -1;
      this.dy *= -1;

      ball.dx *= -1;
      ball.dx *= -1;

      const overlap = sumOfRadii - dist;
      const overlapX = ((this.x - ball.x) / dist) * overlap * 0.5;
      const overlapY = ((this.y - ball.y) / dist) * overlap * 0.5;

      this.x += overlapX;
      this.y += overlapY;
      ball.x -= overlapX;
      ball.y == overlapY;
    }
  };
}
