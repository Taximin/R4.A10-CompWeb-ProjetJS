import countries from './countries.json' assert { type: "json" };

import Country from "./Country.js";
import Currency from "./Currency.js";
import Language from "./Language.js";

const allCountries = {};
const allCurrencies = {};
const allLanguages = {};

function fill_db()
{
    for(let country of countries)
    {
        allCountries[country.alpha3Code] = new Country(country.alpha3Code,
            country.area,
            country.borders,
            country.capital,
            country.continent,
            country.demonym,
            country.name,
            country.population,
            country.topLevelDomain);

        if(country.currencies != undefined)
        {
            if(country.currencies.length < 2)
            {
                let currency = country.currencies[0];
                if(allCurrencies[currency.code] == undefined && currency.code != "")
                {
                    allCurrencies[currency.code] = new Currency(currency.code, currency.symbol);
                }
            }
            else if(country.currencies.length > 1)
            {
                for(let currency of country.currencies)
                {
                    if(allCurrencies[currency.code] == undefined && currency.code != "")
                    {
                        allCurrencies[currency.code] = new Currency(currency.code, currency.symbol);
                    }
                }
            }
        }        

        let languages = country.languages;
        for(let language of languages)
        {
            if(allLanguages[language.iso639_2] == undefined && language.iso639_2 != "")
            {
                allLanguages[language.iso639_2] = new Language(language.iso639_2, language.name);
            }
        }
    }
}

fill_db()

// console.log(allCountries)
// console.log(allCountries['ZWE'].getBorders());
// console.log(allCountries['ZWE'].toString());
// console.log(allLanguages);
// console.log(allCurrencies);