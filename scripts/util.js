/**
 * Returns a random number between a range
 *
 * @param {number} lower
 * @param {number} upper
 * @returns number
 */
const getRandomNum = (lower = 0, upper = 1) => {
  return lower + Math.random() * (upper - lower);
};

/**
 * Returns distance between two points
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns number
 */
const distance = (x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};
