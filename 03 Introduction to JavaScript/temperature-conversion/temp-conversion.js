const tempCalc = function(){

    //sets Kelvin temperature
    let kelvin = document.getElementById("temp").value;
    kelvin = Number(kelvin);

    //sets Celsius temperature from kelvin
    let celsius = kelvin - 273;

    //sets fahrenheit temperature from celsius, then rounds down value to nearest integer
    let fahrenheit = Math.floor(celsius * (9/5) + 32);

    //calculates rankine temperature from kelvin, then rounds down value to nearest integer
    let rankine = Math.floor(kelvin * 1.8);

    //accessing the html values we want to overwrite with our calculated temperatures
    const kValue = document.getElementById("kelvin");
    const cValue = document.getElementById("celsius");
    const fValue = document.getElementById("fahrenheit");
    const rValue = document.getElementById("rankine");

    //change html text to reflect new values
    kValue.innerHTML = `The temperature is ${kelvin.toString()} degrees Kelvin.`;
    cValue.innerHTML = `The temperature is ${celsius.toString()} degrees Celsius.`;
    fValue.innerHTML = `The temperature is ${fahrenheit.toString()} degrees Fahrenheit.`;
    rValue.innerHTML = `The temperature is ${rankine.toString()} degrees Rankine.`;

};

    




