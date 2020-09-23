/**
 * Returns a random number between 1 and the 'max_value'
 * 
 * Default value returns a number between 1 and 2
 *
 * @param {integer} max_value
 */
function das_random_integer(max_value = 2) {
  return Math.floor(Math.random() * max_value) + 1;
}
