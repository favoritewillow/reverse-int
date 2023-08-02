module.exports = function reverse (n) {
  const str = n.toString();

  if (str[0] === "-") {
      let result = Number(str.slice(1).split("").reverse().join(""));
      return (result);
  } else {
      let result = Number(str.split("").reverse().join(""));
      return result;
  }

}
