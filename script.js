// Chenge Fahrenhite to Celsius 
function TempCal1() {
    let value = (document.getElementById("inputFahrenhite").value - 32) * 5 / 9
    let fahrenheit = document.getElementById("inputFahrenhite").value
    document.getElementById("fahrenheit").innerHTML = "<br><br>" + "Result : " + "( " + fahrenheit + "<sup>o</sup>F " + " = " + value.toFixed(2) + "<sup>o</sup>C " + ")";
}

// Chenge Celsius to Fahrenhite
function TempCal2() {
    let value = (9 / 5 * document.getElementById("inputCelsius").value) + 32
    let celsius = document.getElementById("inputCelsius").value
    document.getElementById("celsius").innerHTML = "<br><br>" + "Result : " + "( " + celsius + "<sup>o</sup>C " + " = " + value.toFixed(2) + "<sup>o</sup>F " + ")";
}

// Placeholder
/* var placeholderText = "asdsad";
    (document.getElementById("inputFahrenhite")).attr('placeholder', placeholderText); */