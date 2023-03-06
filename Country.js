import Language from './Language.js';
import Currency from './Currency.js';
import countries from './countries.json' assert { type: "json" };

export default class Country
{
    static allCountries = {};
    static allCurrencies = {};
    static allLanguages = {};
    
    constructor(alpha3Code,
        area,
        borders,
        capital,
        continent,
        demonym,
        name,
        translatedNames,
        population,
        topLevelDomain,
        currencies,
        languages)
        {
            this.codeAlpha3 = alpha3Code;
            this.area = area;
            this.borders = borders;
            this.capital = capital;
            this.continent = continent;
            this.demonym = demonym;
            this.name = name;
            this.population = population;
            this.topLevelDomain = topLevelDomain;
            this.currencies = currencies;
            this.languages = languages;
        }
        
    getPopDensity()
    {
        return (this.population / this.area).toFixed(2);
    }
    
    getBorders()
    {
        if (this.borders != undefined)
        {
            return this.borders;
        }
        return [];
    }
    
    toString()
    {
        return  "Code Alpha 3: " + this.codeAlpha3 + 
        "\nNom:" + this.name + 
        "\nNoms traduits: " + this.translatedNames +
        "\nContinent: " + this.continent + 
        "\nPopulation: " + this.population + 
        "\nDensité de population: " + this.getPopDensity() + 
        "\nCapitale: " + this.capital + 
        "\nGentilé: " + this.demonym + 
        "\nTop Level Domain: " + this.topLevelDomain + 
        "\nPays limitrophes: " + this.getBorders() + 
        "\nLangues parlées: " + this.getLanguages() +
        "\nMonnaies utilisées: " + this.getCurrencies();
    }
    
    static fill_db()
    {
        let translatedNames = [];
        let desiredTrans = ['de', 'es', 'it']
        let currencies = [];
        let ctnLanguages = [];
        
        for(let country of countries){
            let currencies = [];
            let ctnLanguages = [];

            translatedNames.push(country.name);
            for(let trans in desiredTrans){
                translatedNames.push(country.translations[trans]);
            }

            if(country.currencies != undefined && country.currencies.length < 2){
                let currency = country.currencies[0];
                currencies.push(currency.code);
            }
            else if(country.currencies != undefined && country.currencies.length > 1){
                for(let currency of country.currencies){
                    currencies.push(currency.code);
                }
            }

            if(country.languages != undefined && country.languages.length < 2){
                let language = country.languages[0];
                ctnLanguages.push(language.iso639_2);
            }
            else if(country.languages != undefined && country.languages.length > 1){
                for(let language of country.languages){
                    ctnLanguages.push(language.iso639_2);
                }
            }

            Country.allCountries[country.alpha3Code] = new Country(
                country.alpha3Code,
                country.area,
                country.borders,
                country.capital,
                country.continent,
                country.demonym,
                country.translations['fr'],
                translatedNames,
                country.population,
                country.topLevelDomain,
                currencies,
                ctnLanguages
                );

            if(country.currencies != undefined && country.currencies.length < 2){
                let currency = country.currencies[0];
                if(Country.allCurrencies[currency.code] == undefined && currency.code != ""){
                    Country.allCurrencies[currency.code] = new Currency(currency.code, currency.symbol);
                }
            }
            
            else if(country.currencies != undefined && country.currencies.length > 1){
                for(let currency of country.currencies){
                    if(Country.allCurrencies[currency.code] == undefined && currency.code != ""){
                        Country.allCurrencies[currency.code] = new Currency(currency.code, currency.symbol);
                    }
                }
            }      
            
            let languages = country.languages;
            for(let language of languages){
                if(Country.allLanguages[language.iso639_2] == undefined && language.iso639_2 != ""){
                    Country.allLanguages[language.iso639_2] = new Language(language.iso639_2, language.name);
                }
            }
        }
    }

    getCurrencies()
    {
        let ctnCurrencies = []
        for (let currency of this.currencies)
        {
            ctnCurrencies.push(Country.allCurrencies[currency]);
        }
        return ctnCurrencies;
    }

    getLanguages()
    {
        let ctnLanguages = []
        for (let language of this.languages)
        {
            ctnLanguages.push(Country.allLanguages[language]);
        }
        return ctnLanguages;
    }
}