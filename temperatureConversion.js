// (0°C × 9/5) + 32 = 32°F

function ce(n){
    var fahrenheit = (n*9/5)+32
    return fahrenheit
}
// (0°F − 32) × 5/9 = -17.78°C

function fa(n){
    var celsius = (n-32) * 5/9
    return celsius
}
	
// 0K − 273.15 = -273.1°C

function kel(n){
    var celsius = n - 273.15
    return celsius
}

// Input Celsius to get fahrenhiet
var temperatureC = 23

// Input fahrenheit to get celsius
var temperatureF = 23

// Input Kelvin to get Celsius
var temperatureK = 23


var getFahrenheit = ce(temperatureC)
var getCelsius = fa(temperatureF)
var getCelsiusFromKelvin = kel(temperatureK)
console.log(temperatureC+'°C'+' = '+getFahrenheit.toFixed(2)+'°F')
console.log(temperatureF+'°F'+' = '+getCelsius.toFixed(2)+'°C')
console.log(temperatureK +'°k'+' = '+getCelsiusFromKelvin.toFixed(2)+'°C')
