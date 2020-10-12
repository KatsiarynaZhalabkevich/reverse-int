module.exports = function reverse (n) {
  let str = n.toString();
  str = str.split("").reverse().join("");
  return parseInt(str, 10);
}
