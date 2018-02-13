/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  let sum = 0
  for(let divisors = 2; a > divisors; divisors++){
    if(a%divisors === 0){
    sum = sum + divisors
    }
  }
 return sum;
};

module.exports = {
  solution,
};
