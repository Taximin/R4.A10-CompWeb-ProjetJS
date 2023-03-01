import countries from './countries.json' assert { type: "json" };
import Language from './Language.js';

export default class Country
{
    constructor(codeAlpha3, 
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
    }
    static allCountries = [];
    static fill_db()
    {
        for(let country of countries)
        {
            Country.allCountries.push(
                new Country(
                    country.alpha3Code,
                    country.area,
                    country.borders || null,
                    country.capital || null,
                    country.continent || null,
                    country.demonym,
                    country.name,
                    country.population,
                    country.topLevelDomain
                )
            )
        }
    }
    getPopDensity()
    {
        return this.population / this.area;
    }
    getBorders()
    {
    }
    toString()
    {
        return "Code Alpha 3: " + this.codeAlpha3 + "\n" + "Nom: " + this.name + "\n" + "Continent: " + this.continent + "\n" + "Population: " + this.population + "\n" + "Densité de population: " + this.getPopDensity() + "\n" + "Capitale: " + this.capital + "\n" + "Gentilé: " + this.demonym + "\n" + "Top Level Domain: " + this.topLevelDomain + "\n" + "Pays limitrophes: " + this.getBorders();
    }

    static all_languages = [];

    static getLanguages()
    {
        for(let country of countries)
        {
            Country.all_languages.push(
                new Language(
                    country.languages, 
                    country.languages
                )
            )
        }
        console.log(Country.all_languages);
    }
}

Country.fill_db()
Country.getLanguages()
//console.log(Country.allCountries)   
console.log(Country.allCountries)
