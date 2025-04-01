const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit - 32) * 0.55555555555;

  return Number.parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let temp = celsius * 1.8 + 32;

  return Number.parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
