const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



const convertValues = async () =>{
    const inputCurrencyValue = document.querySelector(".input-currecy").value
    const currecyValueToconvert = document.querySelector(".currecy-value-to-convert")
    const currecyValueConverted = document.querySelector(".currecy-value")

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    console.log(data)
    // console.log(currencySelect.value)
    // const dolaToday = 5.0
    // const euroToday = 6.0
    // const libratoday = 7.0

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.USDBRL.high

    if (currencySelect.value === "dolar") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolar)
    }

    if (currencySelect.value === "euro") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euro)
    }

    if (currencySelect.value === "libra") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("un-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libra )

    }
    currecyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
};

function changeCureency() {
    const currencyname = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value === "dolar") {
        currencyname.innerHTML = "Dola americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value === "euro") {
        currencyname.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelect.value === "libra") {
        currencyname.innerHTML = "libra"
        currencyImg.src = "./assets/libra.png"
    }
    convertValues() 
}

currencySelect.addEventListener("change", changeCureency)
convertButton.addEventListener("click", convertValues)

