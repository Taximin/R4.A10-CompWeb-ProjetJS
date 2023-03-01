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
    static allCountries = {};
    static fill_db()
    {
        for(let country of countries)
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
        }
    }
    getPopDensity()
    {
        return (this.population / this.area).toFixed(2);
    }
    getBorders()
    {
        let ctnBorders = []
        for(let border of this.borders){
            for(let country of countries){
                if(border === country.alpha3Code){
                    ctnBorders.push(country.alpha3Code);
                }
            }
        }
        return ctnBorders;
    }
    toString()
    {
        return "Code Alpha 3: " + this.codeAlpha3 + "\n" + "Nom: " + this.name + "\n" + "Continent: " + this.continent + "\n" + "Population: " + this.population + "\n" + "Densité de population: " + this.getPopDensity() + "\n" + "Capitale: " + this.capital + "\n" + "Gentilé: " + this.demonym + "\n" + "Top Level Domain: " + this.topLevelDomain + "\n" + "Pays limitrophes: " + this.getBorders();
    }

    static all_languages = [];

    static getLanguages()
    {
        //Pour chaque pays
        for(let country of countries)
        {
            //Pour chaque langage du pays
            for(let language of country.languages)
            {
                //On vérifie qu'il n'est pas déjà dans la liste
                if (!Country.all_languages.some(lang => lang.iso === language.iso639_2))
                {
                    //Si ce n'est pas le cas, on l'ajoute en créant un objet Language
                    Country.all_languages.push(
                        new Language(
                            language.iso639_2, 
                            language.name
                        )
                    )
                }
            }
        }
        return Country.all_languages;
    }
}

Country.fill_db()
// Country.getLanguages()   
// console.log(Country.allCountries)
console.log(Country.allCountries['ZWE'].getBorders());
console.log(Country.allCountries['ZWE'].toString());
