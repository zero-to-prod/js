/**
 * Returns a random number limited by the 'max_value'
 *
 * @param {integer} max_value
 */
function das_random_integer(max_value = 2) {
  return Math.floor(Math.random() * max_value);
}
