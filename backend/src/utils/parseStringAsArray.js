module.exports = function parseStringAsArray(arrayAsString) {
  const StringArray = arrayAsString.split(",").map(array => array.trim());

  return StringArray;
};
