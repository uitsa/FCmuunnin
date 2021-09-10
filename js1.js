const fahrenheitSyote = document.querySelector('input');
const fahrenheitTuloste = document.querySelector('#fahrenheit');
const celsiusTuloste = document.querySelector('#celsius');
const muunnaButton = document.querySelector('button');

function fahrenheitCelsiukseksi(fahrenheit) {
    let celsius = math.round((fahrenheit -32)*0.5556);
    
    return celsius;
}
123

function muunna() {
    let syote = fahrenheitSyote.value;
    fahrenheitTuloste.textContent = syote;

    celsiusTuloste.textContent = fahrenheitCelsiukseksi(syote);

}


muunnaButton.addEventListener('click', muunna);