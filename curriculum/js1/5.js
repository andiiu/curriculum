/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (number, func, counter = 0) => {
  if(number === counter)
    return;
  func();
  return solution(number, func, counter + 1);
};

module.exports = {
  solution,
};
