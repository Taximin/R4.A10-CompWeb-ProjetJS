import Language from './Language.js';
import Currency from './Currency.js';

export default class Country
{
    static allCountries = {};
    static allCurrencies = {};
    static allLanguages = {};

    constructor(
        codeAlpha3, 
        area, 
        borders, 
        capital, 
        continent,
        demonym,
        name,
        population,
        topLevelDomain)
    {
        this.codeAlpha3 = codeAlpha3;
        this.area = area;
        this.borders = borders;
        this.capital = capital;
        this.continent = continent;
        this.demonym = demonym;
        this.name = name;
        this.population = population;
        this.topLevelDomain = topLevelDomain;

        this.fill_db();
    }

    getPopDensity()
    {
        return (this.population / this.area).toFixed(2);
    }

    getBorders()
    {
        let ctnBorders = []
        for(let border of this.borders)
        {
            for(let country of allCountries)
            {
                if(border === country.alpha3Code)
                {
                    ctnBorders.push(country.alpha3Code);
                }
            }
        }
        return ctnBorders;
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
        for(let country of Country.allCountries)
        {
            Country.allCountries[country.alpha3Code] = new Country(country.alpha3Code,
                country.area,
                country.borders,
                country.capital,
                country.continent,
                country.demonym,
                country.name,
                country.population,
                country.topLevelDomain);

            if(country.currencies != undefined && country.currencies.length < 2){
                let currency = country.currencies[0];
                if(allCurrencies[currency.code] == undefined && currency.code != ""){
                    allCurrencies[currency.code] = new Currency(currency.code, currency.symbol);
                }
            }

            else if(country.currencies != undefined && country.currencies.length > 1){
                for(let currency of country.currencies){
                    if(allCurrencies[currency.code] == undefined && currency.code != ""){
                        allCurrencies[currency.code] = new Currency(currency.code, currency.symbol);
                    }
                }
            }      

            let languages = country.languages;
            for(let language of languages){
                if(allLanguages[language.iso639_2] == undefined && language.iso639_2 != ""){
                    allLanguages[language.iso639_2] = new Language(language.iso639_2, language.name);
                }
            }
        }
    }

    static getLanguages()
    {
        return this.allLanguages;
    }

    static getCurrencies()
    {
        return this.allCurrencies;
    }
}