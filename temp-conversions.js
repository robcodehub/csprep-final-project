//task 1:conversions
/*
//convert fahrenheit to celsius
function convertToCelsius(f){
 let celsius = (f - 32) * 5/9;
 return celsius;
}
console.log(convertToCelsius(70));
//convert celsius to fahrenheit
function convertToF(celsius){
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(convertToF(100));
*/

//function that uses callbacks to convert temperature from fahrenheit to celsius and vice versa
function convert(callback, temperature) {
  // convert to  fahrenheit to celsius
  function convertToCelsius(f) {
    let celsius = ((f - 32) * 5) / 9;
    return celsius;
  }
  return convertToCelsius;

  //convert celsius to fahrenheit
  function convertToF(c) {
    let fahrenheit = c * (9 / 5) + 32;
    return fahrenheit;
  }
}

//prompt the user for the temperature to convert
let tempToConvert = prompt('Enter the temperature to convert: ');

//prompt the user for the conversion type
let conversionType = prompt(
  'To convert to Fahrenheit, enter 1. To convert to Celsius enter 2: '
);

//call the function with the user's input passed in as arguments
function convert(tempToConvert, conversionType) {
  // call conversion function based on user input
  // So far this is returning undefined
  //struggling with passing function convert as an argument back into function convertTocelsius and convertToF
  if ((conversionType = 1)) {
    //create variable to store final conversion
    let finalConvert = convertToF(tempToConvert);
    return finalConvert;
  } else if ((conversionType = 2)) {
    let finalConvert = convertToCelsius(tempToConvert);
  }
  return finalConvert;
}
