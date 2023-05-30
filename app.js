
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// 1 EUR (Euro) = 1.2 USD (US Dollar)

function fromDollarToYen(dolar) {
return (dolar/1.2 * 127.9)
}

function fromEuroToDollar(euro){
    return (euro*1.2)
} 

function fromYenToPound(yen){
    return (yen/127.9) * 0.8
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound}