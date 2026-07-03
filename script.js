document.getElementById('convertBtn').addEventListener('click', () => {
    const inputVal = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('unitSelect').value;
    const errorEl = document.getElementById('errorMessage');
    const resultDiv = document.getElementById('results');
    
    // Reset display
    errorEl.classList.add('hidden');
    resultDiv.classList.add('hidden');

    // 1. Validation: Check if input is a valid number
    if (isNaN(inputVal)) {
        showError("Please enter a valid numeric temperature.");
        return;
    }

    // 2. Absolute Zero Validation
    if ((unit === 'C' && inputVal < -273.15) || 
        (unit === 'F' && inputVal < -459.67) || 
        (unit === 'K' && inputVal < 0)) {
        showError("Temperature below absolute zero is physically impossible.");
        return;
    }

    // 3. Conversion Logic
    let celsius;
    if (unit === 'C') celsius = inputVal;
    else if (unit === 'F') celsius = (inputVal - 32) * 5/9;
    else if (unit === 'K') celsius = inputVal - 273.15;

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    // 4. Update DOM
    document.getElementById('resC').textContent = `${celsius.toFixed(2)} °C`;
    document.getElementById('resF').textContent = `${fahrenheit.toFixed(2)} °F`;
    document.getElementById('resK').textContent = `${kelvin.toFixed(2)} K`;
    resultDiv.classList.remove('hidden');
});

function showError(msg) {
    const errorEl = document.getElementById('errorMessage');
    errorEl.textContent = msg;
    errorEl.classList.remove('hidden');
}