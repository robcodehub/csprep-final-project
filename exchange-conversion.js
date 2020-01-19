

function calculateExchangeRate(currency) {

  //object of exchange currencies and exchange rates
    const exchangeRatesUsd = {
      'AUD': 0.70,
      'EUR': 1.11,
      'GBP': 1.30,
      'CAD': 0.75
    }

    //set the base currency
    let baseCurrency = currency.toUpperCase();

    //return a function that accepts amount and exchangeCurrency as parameters
    return function (amount, exchangeCurrency) {

      //convert the argument passed into exchangeCode to uppercase
      let currencyCode = exchangeCurrency.toUpperCase()

      //look up the exchange rate object and set the exchange rate to the matching currency code
      let exchangeRate = exchangeRatesUsd[currencyCode]

      //return a string with the base currency and converted amount
      // 1 USD = 1.11 EUR
      return `${amount} ${currency} = ${amount * exchangeRate} ${currencyCode}`

    }

  }

  //Set the base currency to USD for testing
  const usdExchange = calculateExchangeRate('USD')

  //example of how to pass in arguments
  //usdExchange(1, 'aud')

  //prompt the user for the amount to convert
  let amountToConvert = prompt("Enter the amount to exchange: ")

  //prompt the user for the currency code to convert the amount into
  let conversionCurrency = prompt("Enter the currency code to exchange to: ")

  //call the function with the user's input passed in as arguments
  usdExchange(amountToConvert, conversionCurrency)


