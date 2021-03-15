module.exports = function reverse (n) {
    return Number(`${n}`.replace('-', '').split('').reverse().join(''));
  }
  
