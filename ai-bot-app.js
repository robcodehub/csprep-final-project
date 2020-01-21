


//==================================
//==================================

function calculateLoan(){
    //Get the user's input
    //Convert payment period in years to the number of monthly payments
    let principal = prompt("Enter the loan amount with no dollar sign and no commas or type exit: ");

    if(principal === 'exit' || principal === 'quit') {
      exitApp()
    }


    let interest = prompt("Enter the interest on your loan typing the number value without the % symbol: ");
    //convert interest from a percentage to a decimal
    //and convert from an annual rate to a montlhy rate
    convertedInterest = interest / 100 / 12;

    if(interest === 'exit' || interest === 'quit') {
      exitApp()
    }

    let paymentPeriod = prompt("Enter the number of years of the loan: ");
    //convert payment period in years to the number of monthly payments
    monthlyPayments = paymentPeriod * 12;

    //compute the monthly payment amount
    let x = Math.pow(1 + convertedInterest, monthlyPayments);
    let monthly = (principal * x * convertedInterest)/(x-1);

    console.log("Your monthly payment is: " + "$" +Math.floor(monthly));


    calculateLoan()
    }


    //==================================
    //==================================




    //==================================
    //==================================

    function stateCapitals(){

    const stateCapitalList = {
    'Alabama': 'Montgomery',
    'Alaska': 'Juneau',
    'Arizona': 'Phoenix',
    'Arkansas': 'Little_Rock',
    'California': 'Sacramento',
    'Colorado': 'Denver',
    'Connecticut': 'Hartford',
    'Delaware': 'Dover',
    'Florida': 'Tallahassee',
    'Georgia': 'Atlanta',
    'Hawaii': 'Honolulu',
    'Idaho': 'Boise',
    'Illinois': 'Springfield',
    'Indiana': 'Indianapolis',
    'Iowa': 'Des_Moines',
    'Kansas': 'Topeka',
    'Kentucky': 'Frankfort',
    'Louisiana': 'Baton_Rouge',
    'Maine': 'Augusta',
    'Maryland': 'Annapolis',
    'Massachusetts': 'Boston',
    'Michigan': 'Lansing',
    'Minnesota': 'Saint_Paul',
    'Mississippi': 'Jackson',
    'Missouri': 'Jefferson_City',
    'Montana': 'Helena',
    'Nebraska': 'Lincoln',
    'Nevada': 'Carson_City',
    'New Hampshire': 'Concord',
    'New Jersey': 'Trenton',
    'New Mexico': 'Santa_Fe',
    'New York': 'Albany',
    'North Carolina': 'Raleigh',
    'North Dakota': 'Bismark',
    'Ohio': 'Columbus',
    'Oklahoma': 'Okalhoma_City',
    'Oregon': 'Salem',
    'Pennsylvania': 'Harrisburg',
    'Rhode Island': 'Providence',
    'South Carolina': 'Columbia',
    'South Dakota': 'Pierre',
    'Tennessee': 'Nashville',
    'Texas': 'Austin',
    'Utah': 'Salt_Lake_City',
    'Vermont': 'Montpelier',
    'Virginia':'Richmond',
    'Washington': 'Olympia',
    'West Virginia': 'Charleston',
    'Wisconsin': 'Madison',
    'Wyoming': 'Cheyene'
      }

    let state = prompt("Enter a state or exit: ");

    if (state === 'exit'){
      exitApp()
    }

    state = state[0].toUpperCase() + state.slice(1, state.length)

    if(state === undefined) {
      console.log("Sorry, I couldn't find that state, please enter the full state name")
    }



    //get state from the user
    console.log("The capital of " + state + " is " + stateCapitalList[state]);

    stateCapitals()

    }


    //==============================================
    //==============================================

    function calculateExchangeRate() {

      //object of exchange currencies and exchange rates
        const exchangeRatesUsd = {
          'AUD': 0.70,
          'EUR': 1.11,
          'GBP': 1.30,
          'CAD': 0.75
        }
        let currency = prompt('Enter the currency code are you converting from or exit: ')

        if(currency === 'exit' || currency == 'quit') {
          exitApp()
        }
       //set the base currency
        let baseCurrency = currency.toUpperCase();

        if(baseCurrency != "USD" ) {
            console.log("Sorry, I can't convert from that currency. Please enter USD")
            calculateExchangeRate()
          }



         //prompt the user for the amount to convert
      let amountToConvert = prompt("Enter the amount to exchange: ")

      //prompt the user for the currency code to convert the amount into
      let conversionCurrency = prompt("Enter the currency code to exchange to: ")

        //return a function that accepts amount and exchangeCurrency as parameters
        //return function (amount, exchangeCurrency) {

          //convert the argument passed into exchangeCode to uppercase
          let currencyCode = conversionCurrency.toUpperCase()

          //look up the exchange rate object and set the exchange rate to the matching currency code
          let exchangeRate = exchangeRatesUsd[currencyCode]

          if(exchangeRate === undefined) {
            console.log("Sorry, I can't convert to that currency")
            calculateExchangeRate()
          }

          amountToConvert = Number(amountToConvert)

        if (Number.isNaN(amountToConvert)) {
          console.log('Not a valid number to convert.')
          calculateExchangeRate()
        }


          //return a string with the base currency and converted amount
          // 1 USD = 1.11 EUR
          console.log(`${amountToConvert} ${baseCurrency} = ${(amountToConvert / exchangeRate).toFixed(2)} ${currencyCode}`)

          calculateExchangeRate()

        //}

      }

    //==============================================
    //==============================================

    //==============================================
    //==============================================
    //Convert Temperatures
    function convertTemperature() {
    //convert fahrenheit to celsius
    function convertToCelsius(f){
     let celsius = Math.floor((f - 32) * 5/9);
     console.log(`${f} degrees fahrenheit = ${celsius} degrees celsius`);
     convertTemperature()
    }
    //console.log(convertToCelsius(70));

    //convert celsius to fahrenheit
    function convertToF(celsius){
      let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
      console.log(`${celsius} degrees celsius = ${fahrenheit} degrees fahrenheit`);
      convertTemperature()
    }
    //console.log(convertToF(100));


    //prompt the user for the temperature to convert
    let tempToConvert = prompt("Enter the temperature to convert or type exit : ");

    //call the function with the user's input passed in as arguments

    if(tempToConvert === 'exit' || tempToConvert === 'quit') {
      console.log("")
      console.log("I'll exit this program and return you to the main menu.")
        console.log("")
      userChoice()
    }

    //prompt the user for the conversion type
    let conversionType = prompt("To convert to Fahrenheit, enter 1. To convert to Celsius enter 2: ");


     if(conversionType === '1'){
      //create variable to store final conversion
     convertToF(tempToConvert);

    } else if (conversionType === '2'){
      convertToCelsius(tempToConvert);
    }

    }
    //==============================================
    //==============================================



    //==============================================
    //==============================================

    //Country Capitals
    function countryCapitals() {

      //prompt the user for the country they want the capital city of
      let countryChoice = prompt("Enter the country you want to know the capital of or type exit : ")

    //console.log('country choice= ', countryChoice)

    if (countryChoice.toLowerCase() === 'exit') {
        console.log("")
      console.log("I'll exit this program and return you to the main menu.")
        console.log("")
      userChoice()
    }


      if(typeof countryChoice !== 'string') {
        return `I couldn't find a capital city for ${countryChoice}, please check the country name and try again`
      }

    let countryCheck = "";


    let countryFormatted = "";


      //alternative variations of country names
        const countries = {
          'USA': 'United States',
          'U.S.A': 'United States',
          'AMERICA': 'United States',
          'UNITED STATES': 'United States',
          'THE U.S': 'United States',
          'UK': 'United Kingdom',
          'U.K': 'United Kingdom',
          'ENGLAND': 'United Kingdom',
          'UNITED KINGDOM': 'United Kingdom',
          'THE U.K': 'United Kingdom',
          'AUSTRALIA': 'Australia',
          'OZ': 'Australia',
          'AUS': 'Australia',
        }



    countryCheck = countries[countryChoice.toUpperCase()]

    //console.log("country check = ",countryCheck)

    if (countryCheck === undefined) {
      countryCheck = ""
    }

    //console.log("country check 2 = ",countryCheck)


    for(let i=0;i<countryChoice.length;i++) {
      if(i === 0 || countryChoice[i-1] === " ") {
        countryFormatted += countryChoice[i].toUpperCase()
      } else {
        countryFormatted += countryChoice[i].toLowerCase()
      }

    }

    //console.log('country formatted = ', countryFormatted)







      //cities
        const capitalCities = [
        {
            "country": "Afghanistan",
            "city": "Kabul"
        },
        {
            "country": "Albania",
            "city": "Tirana"
        },
        {
            "country": "Algeria",
            "city": "Alger"
        },
        {
            "country": "American Samoa",
            "city": "Fagatogo"
        },
        {
            "country": "Andorra",
            "city": "Andorra la Vella"
        },
        {
            "country": "Angola",
            "city": "Luanda"
        },
        {
            "country": "Anguilla",
            "city": "The Valley"
        },
        {
            "country": "Antarctica",
            "city": null
        },
        {
            "country": "Antigua and Barbuda",
            "city": "Saint John's"
        },
        {
            "country": "Argentina",
            "city": "Buenos Aires"
        },
        {
            "country": "Armenia",
            "city": "Yerevan"
        },
        {
            "country": "Aruba",
            "city": "Oranjestad"
        },
        {
            "country": "Australia",
            "city": "Canberra"
        },
        {
            "country": "Austria",
            "city": "Wien"
        },
        {
            "country": "Azerbaijan",
            "city": "Baku"
        },
        {
            "country": "Bahamas",
            "city": "Nassau"
        },
        {
            "country": "Bahrain",
            "city": "al-Manama"
        },
        {
            "country": "Bangladesh",
            "city": "Dhaka"
        },
        {
            "country": "Barbados",
            "city": "Bridgetown"
        },
        {
            "country": "Belarus",
            "city": "Minsk"
        },
        {
            "country": "Belgium",
            "city": "Bruxelles [Brussel]"
        },
        {
            "country": "Belize",
            "city": "Belmopan"
        },
        {
            "country": "Benin",
            "city": "Porto-Novo"
        },
        {
            "country": "Bermuda",
            "city": "Hamilton"
        },
        {
            "country": "Bhutan",
            "city": "Thimphu"
        },
        {
            "country": "Bolivia",
            "city": "La Paz"
        },
        {
            "country": "Bosnia and Herzegovina",
            "city": "Sarajevo"
        },
        {
            "country": "Botswana",
            "city": "Gaborone"
        },
        {
            "country": "Bouvet Island",
            "city": null
        },
        {
            "country": "Brazil",
            "city": "Brasília"
        },
        {
            "country": "British Indian Ocean Territory",
            "city": null
        },
        {
            "country": "Brunei",
            "city": "Bandar Seri Begawan"
        },
        {
            "country": "Bulgaria",
            "city": "Sofia"
        },
        {
            "country": "Burkina Faso",
            "city": "Ouagadougou"
        },
        {
            "country": "Burundi",
            "city": "Bujumbura"
        },
        {
            "country": "Cambodia",
            "city": "Phnom Penh"
        },
        {
            "country": "Cameroon",
            "city": "Yaound"
        },
        {
            "country": "Canada",
            "city": "Ottawa"
        },
        {
            "country": "Cape Verde",
            "city": "Praia"
        },
        {
            "country": "Cayman Islands",
            "city": "George Town"
        },
        {
            "country": "Central African Republic",
            "city": "Bangui"
        },
        {
            "country": "Chad",
            "city": "N'Djam"
        },
        {
            "country": "Chile",
            "city": "Santiago de Chile"
        },
        {
            "country": "China",
            "city": "Peking"
        },
        {
            "country": "Christmas Island",
            "city": "Flying Fish Cove"
        },
        {
            "country": "Cocos (Keeling) Islands",
            "city": "West Island"
        },
        {
            "country": "Colombia",
            "city": "Santaf"
        },
        {
            "country": "Comoros",
            "city": "Moroni"
        },
        {
            "country": "Congo",
            "city": "Brazzaville"
        },
        {
            "country": "Cook Islands",
            "city": "Avarua"
        },
        {
            "country": "Costa Rica",
            "city": "San Jos"
        },
        {
            "country": "Croatia",
            "city": "Zagreb"
        },
        {
            "country": "Cuba",
            "city": "La Habana"
        },
        {
            "country": "Cyprus",
            "city": "Nicosia"
        },
        {
            "country": "Czech Republic",
            "city": "Praha"
        },
        {
            "country": "Denmark",
            "city": "Copenhagen"
        },
        {
            "country": "Djibouti",
            "city": "Djibouti"
        },
        {
            "country": "Dominica",
            "city": "Roseau"
        },
        {
            "country": "Dominican Republic",
            "city": "Santo Domingo de Guzm"
        },
        {
            "country": "East Timor",
            "city": "Dili"
        },
        {
            "country": "Ecuador",
            "city": "Quito"
        },
        {
            "country": "Egypt",
            "city": "Cairo"
        },
        {
            "country": "El Salvador",
            "city": "San Salvador"
        },
        {
            "country": "England",
            "city": "London"
        },
        {
            "country": "Equatorial Guinea",
            "city": "Malabo"
        },
        {
            "country": "Eritrea",
            "city": "Asmara"
        },
        {
            "country": "Estonia",
            "city": "Tallinn"
        },
        {
            "country": "Ethiopia",
            "city": "Addis Abeba"
        },
        {
            "country": "Falkland Islands",
            "city": "Stanley"
        },
        {
            "country": "Faroe Islands",
            "city": "Tórshavn"
        },
        {
            "country": "Fiji Islands",
            "city": "Suva"
        },
        {
            "country": "Finland",
            "city": "Helsinki [Helsingfors]"
        },
        {
            "country": "France",
            "city": "Paris"
        },
        {
            "country": "French Guiana",
            "city": "Cayenne"
        },
        {
            "country": "French Polynesia",
            "city": "Papeete"
        },
        {
            "country": "French Southern territories",
            "city": null
        },
        {
            "country": "Gabon",
            "city": "Libreville"
        },
        {
            "country": "Gambia",
            "city": "Banjul"
        },
        {
            "country": "Georgia",
            "city": "Tbilisi"
        },
        {
            "country": "Germany",
            "city": "Berlin"
        },
        {
            "country": "Ghana",
            "city": "Accra"
        },
        {
            "country": "Gibraltar",
            "city": "Gibraltar"
        },
        {
            "country": "Greece",
            "city": "Athenai"
        },
        {
            "country": "Greenland",
            "city": "Nuuk"
        },
        {
            "country": "Grenada",
            "city": "Saint George's"
        },
        {
            "country": "Guadeloupe",
            "city": "Basse-Terre"
        },
        {
            "country": "Guam",
            "city": "Aga"
        },
        {
            "country": "Guatemala",
            "city": "Ciudad de Guatemala"
        },
        {
            "country": "Guinea",
            "city": "Conakry"
        },
        {
            "country": "Guinea-Bissau",
            "city": "Bissau"
        },
        {
            "country": "Guyana",
            "city": "Georgetown"
        },
        {
            "country": "Haiti",
            "city": "Port-au-Prince"
        },
        {
            "country": "Heard Island and McDonald Islands",
            "city": null
        },
        {
            "country": "Holy See (Vatican City State)",
            "city": "Citt"
        },
        {
            "country": "Honduras",
            "city": "Tegucigalpa"
        },
        {
            "country": "Hong Kong",
            "city": "Victoria"
        },
        {
            "country": "Hungary",
            "city": "Budapest"
        },
        {
            "country": "Iceland",
            "city": "Reykjav"
        },
        {
            "country": "India",
            "city": "New Delhi"
        },
        {
            "country": "Indonesia",
            "city": "Jakarta"
        },
        {
            "country": "Iran",
            "city": "Tehran"
        },
        {
            "country": "Iraq",
            "city": "Baghdad"
        },
        {
            "country": "Ireland",
            "city": "Dublin"
        },
        {
            "country": "Israel",
            "city": "Jerusalem"
        },
        {
            "country": "Italy",
            "city": "Roma"
        },
        {
            "country": "Ivory Coast",
            "city": "Yamoussoukro"
        },
        {
            "country": "Jamaica",
            "city": "Kingston"
        },
        {
            "country": "Japan",
            "city": "Tokyo"
        },
        {
            "country": "Jordan",
            "city": "Amman"
        },
        {
            "country": "Kazakhstan",
            "city": "Astana"
        },
        {
            "country": "Kenya",
            "city": "Nairobi"
        },
        {
            "country": "Kiribati",
            "city": "Bairiki"
        },
        {
            "country": "Kuwait",
            "city": "Kuwait"
        },
        {
            "country": "Kyrgyzstan",
            "city": "Bishkek"
        },
        {
            "country": "Laos",
            "city": "Vientiane"
        },
        {
            "country": "Latvia",
            "city": "Riga"
        },
        {
            "country": "Lebanon",
            "city": "Beirut"
        },
        {
            "country": "Lesotho",
            "city": "Maseru"
        },
        {
            "country": "Liberia",
            "city": "Monrovia"
        },
        {
            "country": "Libyan Arab Jamahiriya",
            "city": "Tripoli"
        },
        {
            "country": "Liechtenstein",
            "city": "Vaduz"
        },
        {
            "country": "Lithuania",
            "city": "Vilnius"
        },
        {
            "country": "Luxembourg",
            "city": "Luxembourg [Luxemburg/L"
        },
        {
            "country": "Macao",
            "city": "Macao"
        },
        {
            "country": "North Macedonia",
            "city": "Skopje"
        },
        {
            "country": "Madagascar",
            "city": "Antananarivo"
        },
        {
            "country": "Malawi",
            "city": "Lilongwe"
        },
        {
            "country": "Malaysia",
            "city": "Kuala Lumpur"
        },
        {
            "country": "Maldives",
            "city": "Male"
        },
        {
            "country": "Mali",
            "city": "Bamako"
        },
        {
            "country": "Malta",
            "city": "Valletta"
        },
        {
            "country": "Marshall Islands",
            "city": "Dalap-Uliga-Darrit"
        },
        {
            "country": "Martinique",
            "city": "Fort-de-France"
        },
        {
            "country": "Mauritania",
            "city": "Nouakchott"
        },
        {
            "country": "Mauritius",
            "city": "Port-Louis"
        },
        {
            "country": "Mayotte",
            "city": "Mamoutzou"
        },
        {
            "country": "Mexico",
            "city": "Ciudad de M"
        },
        {
            "country": "Micronesia, Federated States of",
            "city": "Palikir"
        },
        {
            "country": "Moldova",
            "city": "Chisinau"
        },
        {
            "country": "Monaco",
            "city": "Monaco-Ville"
        },
        {
            "country": "Mongolia",
            "city": "Ulan Bator"
        },
        {
            "country": "Montserrat",
            "city": "Plymouth"
        },
        {
            "country": "Morocco",
            "city": "Rabat"
        },
        {
            "country": "Mozambique",
            "city": "Maputo"
        },
        {
            "country": "Myanmar",
            "city": "Rangoon (Yangon)"
        },
        {
            "country": "Namibia",
            "city": "Windhoek"
        },
        {
            "country": "Nauru",
            "city": "Yaren"
        },
        {
            "country": "Nepal",
            "city": "Kathmandu"
        },
        {
            "country": "Netherlands",
            "city": "Amsterdam"
        },
        {
            "country": "Netherlands Antilles",
            "city": "Willemstad"
        },
        {
            "country": "New Caledonia",
            "city": "Noum"
        },
        {
            "country": "New Zealand",
            "city": "Wellington"
        },
        {
            "country": "Nicaragua",
            "city": "Managua"
        },
        {
            "country": "Niger",
            "city": "Niamey"
        },
        {
            "country": "Nigeria",
            "city": "Abuja"
        },
        {
            "country": "Niue",
            "city": "Alofi"
        },
        {
            "country": "Norfolk Island",
            "city": "Kingston"
        },
        {
            "country": "North Korea",
            "city": "Pyongyang"
        },
        {
            "country": "Northern Ireland",
            "city": "Belfast"
        },
        {
            "country": "Northern Mariana Islands",
            "city": "Garapan"
        },
        {
            "country": "Norway",
            "city": "Oslo"
        },
        {
            "country": "Oman",
            "city": "Masqat"
        },
        {
            "country": "Pakistan",
            "city": "Islamabad"
        },
        {
            "country": "Palau",
            "city": "Koror"
        },
        {
            "country": "Palestine",
            "city": "Gaza"
        },
        {
            "country": "Panama",
            "city": "Ciudad de Panam"
        },
        {
            "country": "Papua New Guinea",
            "city": "Port Moresby"
        },
        {
            "country": "Paraguay",
            "city": "Asunci"
        },
        {
            "country": "Peru",
            "city": "Lima"
        },
        {
            "country": "Philippines",
            "city": "Manila"
        },
        {
            "country": "Pitcairn",
            "city": "Adamstown"
        },
        {
            "country": "Poland",
            "city": "Warszawa"
        },
        {
            "country": "Portugal",
            "city": "Lisboa"
        },
        {
            "country": "Puerto Rico",
            "city": "San Juan"
        },
        {
            "country": "Qatar",
            "city": "Doha"
        },
        {
            "country": "Reunion",
            "city": "Saint-Denis"
        },
        {
            "country": "Romania",
            "city": "Bucuresti"
        },
        {
            "country": "Russian Federation",
            "city": "Moscow"
        },
        {
            "country": "Rwanda",
            "city": "Kigali"
        },
        {
            "country": "Saint Helena",
            "city": "Jamestown"
        },
        {
            "country": "Saint Kitts and Nevis",
            "city": "Basseterre"
        },
        {
            "country": "Saint Lucia",
            "city": "Castries"
        },
        {
            "country": "Saint Pierre and Miquelon",
            "city": "Saint-Pierre"
        },
        {
            "country": "Saint Vincent and the Grenadines",
            "city": "Kingstown"
        },
        {
            "country": "Samoa",
            "city": "Apia"
        },
        {
            "country": "San Marino",
            "city": "San Marino"
        },
        {
            "country": "Sao Tome and Principe",
            "city": "S"
        },
        {
            "country": "Saudi Arabia",
            "city": "Riyadh"
        },
        {
            "country": "Scotland",
            "city": "Edinburgh"
        },
        {
            "country": "Senegal",
            "city": "Dakar"
        },
        {
            "country": "Seychelles",
            "city": "Victoria"
        },
        {
            "country": "Sierra Leone",
            "city": "Freetown"
        },
        {
            "country": "Singapore",
            "city": "Singapore"
        },
        {
            "country": "Slovakia",
            "city": "Bratislava"
        },
        {
            "country": "Slovenia",
            "city": "Ljubljana"
        },
        {
            "country": "Solomon Islands",
            "city": "Honiara"
        },
        {
            "country": "Somalia",
            "city": "Mogadishu"
        },
        {
            "country": "South Africa",
            "city": "Pretoria"
        },
        {
            "country": "South Georgia and the South Sandwich Islands",
            "city": null
        },
        {
            "country": "South Korea",
            "city": "Seoul"
        },
        {
            "country": "South Sudan",
            "city": "Juba"
        },
        {
            "country": "Spain",
            "city": "Madrid"
        },
        {
            "country": "SriLanka",
            "city": null
        },
        {
            "country": "Sudan",
            "city": "Khartum"
        },
        {
            "country": "Suriname",
            "city": "Paramaribo"
        },
        {
            "country": "Svalbard and Jan Mayen",
            "city": "Longyearbyen"
        },
        {
            "country": "Swaziland",
            "city": "Mbabane"
        },
        {
            "country": "Sweden",
            "city": "Stockholm"
        },
        {
            "country": "Switzerland",
            "city": "Bern"
        },
        {
            "country": "Syria",
            "city": "Damascus"
        },
        {
            "country": "Tajikistan",
            "city": "Dushanbe"
        },
        {
            "country": "Tanzania",
            "city": "Dodoma"
        },
        {
            "country": "Thailand",
            "city": "Bangkok"
        },
        {
            "country": "The Democratic Republic of Congo",
            "city": null
        },
        {
            "country": "Togo",
            "city": "Lom"
        },
        {
            "country": "Tokelau",
            "city": "Fakaofo"
        },
        {
            "country": "Tonga",
            "city": "Nuku'alofa"
        },
        {
            "country": "Trinidad and Tobago",
            "city": "Port-of-Spain"
        },
        {
            "country": "Tunisia",
            "city": "Tunis"
        },
        {
            "country": "Turkey",
            "city": "Ankara"
        },
        {
            "country": "Turkmenistan",
            "city": "Ashgabat"
        },
        {
            "country": "Turks and Caicos Islands",
            "city": "Cockburn Town"
        },
        {
            "country": "Tuvalu",
            "city": "Funafuti"
        },
        {
            "country": "Uganda",
            "city": "Kampala"
        },
        {
            "country": "Ukraine",
            "city": "Kyiv"
        },
        {
            "country": "United Arab Emirates",
            "city": "Abu Dhabi"
        },
        {
            "country": "United Kingdom",
            "city": "London"
        },
        {
            "country": "United States",
            "city": "Washington"
        },
        {
            "country": "United States Minor Outlying Islands",
            "city": null
        },
        {
            "country": "Uruguay",
            "city": "Montevideo"
        },
        {
            "country": "Uzbekistan",
            "city": "Toskent"
        },
        {
            "country": "Vanuatu",
            "city": "Port-Vila"
        },
        {
            "country": "Venezuela",
            "city": "Caracas"
        },
        {
            "country": "Vietnam",
            "city": "Hanoi"
        },
        {
            "country": "Virgin Islands, British",
            "city": "Road Town"
        },
        {
            "country": "Virgin Islands, U.S.",
            "city": "Charlotte Amalie"
        },
        {
            "country": "Wales",
            "city": "Cardiff"
        },
        {
            "country": "Wallis and Futuna",
            "city": "Mata-Utu"
        },
        {
            "country": "Western Sahara",
            "city": "El-Aai"
        },
        {
            "country": "Yemen",
            "city": "Sanaa"
        },
        {
            "country": "Yugoslavia",
            "city": "Beograd"
        },
        {
            "country": "Zambia",
            "city": "Lusaka"
        },
        {
            "country": "Zimbabwe",
            "city": "Harare"
        }
    ]


        let capitalCity = "";

        for(let i=0;i<capitalCities.length;i++) {
          if (capitalCities[i].country == countryFormatted || capitalCities[i].country == countryCheck) {
            capitalCity = capitalCities[i].city
          }
        }

        if(capitalCity !== "") {
          console.log(`The capital city of ${countryChoice} is ${capitalCity}`)
          countryCapitals()
        } else {
          console.log(`The capital city of ${countryChoice} couldn't be found, please try again`)
          countryCapitals()
        }




      }

    //==============================================
    //==============================================

    //==============================================
    //==============================================


    function mathFunctions() {

    //prompt for keyword
    let ask = prompt("What calculations did you want to perform? (Options: multiply, divide, add, minus, or exit");

    //convert into lowercase
    ask = ask.toLowerCase();
    //when prompted invoke that function

    if(ask == 'exit') {
      exitApp()
    }


    if(ask == 'multiply'){
      multiply()
    }else if(ask == 'divide'){
      divide()
    }else if(ask == 'add'){
      add()
    }else if(ask == 'minus'){
      minus()
    }else{
     console.log("Please choose one of following: multiply, divide, add or minus")
    }


    //functions
    function multiply(num1, num2){
      let val1 = prompt("Enter value to multiply")
      let val2 = prompt("Enter value to multiply with " + val1)
      console.log(`${val1} * ${val2} = ${val1 * val2}`);
      mathFunctions()
    }
    function divide(num1, num2){
      let val1 = prompt("Enter value to divide")
      let val2 = prompt("Enter value to divide by " + val1)
      console.log(`${val1} / ${val2} = ${val1 / val2}`);
      mathFunctions()
    }
    function add(num1, num2){
      let val1 = prompt("Enter starting value ")
      let val2 = prompt("Enter value to add " + val1)
      console.log(`${val1} + ${val2} = ${val1 + val2}`);
      mathFunctions()
    }
    function minus(num1, num2){
      let val1 = prompt("Enter starting value")
      let val2 = prompt("Enter value to minus " + val1)
      console.log(`${val1} - ${val2} = ${val1 - val2}`);
      mathFunctions()
    }

    }


    //==============================================
    //==============================================





    //if selected is unclear about capital cities for state or countries, confirm user choice
    function checkCapitalChoice() {
      let subPrompt = prompt('did you want to know country capitals or state capitals? enter 1 for country capital and 2 for state capitals')

          if (subPrompt == '1') {
            countryCapitals()
          } else if (subPrompt == '2') {
            stateCapitals()
          }
    }

    function printOptions() {
      console.log('')
      console.log('Type one of the below options in quote marks to run the program: ')
      console.log('"country capitals" = capital cities for countries')
        console.log('"state capitals" = capital cities for U.S states')
        console.log('"temperature" = convert temperatures (Celcius <> Fahrenheit) ')
        console.log('"exchange" = currency exchange')
        console.log('"maths" = math calculations')
        console.log('"loan payments" = loan payments')
        console.log('')
        userChoice()
    }



    function choiceSelector(choice) {
      let choiceLower = choice.toLowerCase()

      if(choiceLower === 'country capitals' || choiceLower === 'country capital' || choiceLower === 'capital cities') {
        countryCapitals()
      } if(choiceLower === 'state capitals') {
        stateCapitals()
      }
      else if(choiceLower.includes('capitals') || choiceLower.includes('capital cities') || choiceLower.includes('capital city')) {
        checkCapitalChoice()

      } else if (choiceLower === 'help') {
          printOptions()
      } else if (choiceLower === 'open the pod bay doors hal') {
          console.log('')
          console.log("I'm sorry Dave, I'm afraid I can't do that")
          console.log('')
          userChoice()
      } else if(choiceLower === 'temperature' || choiceLower === 'convert temperature' || choiceLower === 'convert temp') {
        convertTemperature()
      } else if(choiceLower === 'maths' || choiceLower === 'calculations' || choiceLower === 'math') {
        mathFunctions()
      } else if(choiceLower === 'exchange rates' || choiceLower === 'exchange') {
        calculateExchangeRate()
      } else if(choiceLower === 'loan payments' || choiceLower === 'loan') {
        calculateLoan()
      } else if (choiceLower === 'quit') {
        return quitAll()
      } else {
        console.log("Sorry, I didn't understand what you wrote. Here is a list of what I can do : ")
        printOptions();
      }


    }

    function quitAll() {
      console.log("Goodbye...")
    }

    function exitApp() {
      console.log("")
      console.log("I'll exit this program and return you to the main menu.")
      console.log("")
       userChoice()
    }


    function userChoice() {
      let userChoice = prompt("What would you like to do? type help for all options ")

      choiceSelector(userChoice)
    }



    userChoice()
