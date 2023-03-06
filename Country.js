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
        population,
        topLevelDomain)
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
            "\nContinent: " + this.continent + 
            "\nPopulation: " + this.population + 
            "\nDensité de population: " + this.getPopDensity() + 
            "\nCapitale: " + this.capital + 
            "\nGentilé: " + this.demonym + 
            "\nTop Level Domain: " + this.topLevelDomain + 
            "\nPays limitrophes: " + this.getBorders();
        }
        
        static fill_db()
        {
            for(let country of countries){
                Country.allCountries[country.alpha3Code] = new Country(
                    country.alpha3Code,
                    country.area,
                    country.borders,
                    country.capital,
                    country.continent,
                    country.demonym,
                    country.name,
                    country.population,
                    country.topLevelDomain
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
    
    getLanguages()
    {
        
    }
    
    getCurrencies()
    {
    }
}