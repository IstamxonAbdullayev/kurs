let elCurrencyForm = document.querySelector(".js-form-currency");
let elCurrencyInput = document.querySelector(".js-input-currency");
let elCurrencySelect = document.querySelector(".js-currency-select");
let elResultText = document.querySelector(".js-result");



elCurrencyForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let elCurrencyInputValue = Number(elCurrencyInput.value.trim());
    let elCurrencySelectValue = Number(elCurrencySelect.value.trim());

    elResultText.textContent = elCurrencyInputValue * elCurrencySelectValue;
})