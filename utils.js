const genereateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// Common js module exports
module.exports = { genereateRandomNumber, celciusToFahrenheit };
