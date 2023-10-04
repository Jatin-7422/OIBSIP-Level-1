const calculateTemprature = () => {
    let inputTemp = document.getElementById('text').value;

    const tempSelected = document.getElementById('tempratures');
    const valueTemp = tempratures.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    // Reset Button
    function reset() {
        inputTemp.value = '';
        document.getElementById("result").innerHTML = "";
    }
}
function reset() {
    document.getElementById('text').value = '';
}

if (valueTemp == 'cel') {
    document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
}

else {
    document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
}



resetButton.addEventListener('click', reset)



