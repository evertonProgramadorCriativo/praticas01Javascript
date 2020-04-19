const kelvin = prompt('Qual e a temperatura em Kelvin hoje?');

const clesius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperatura is ${fahrenheit} degress fahrenheit`);
