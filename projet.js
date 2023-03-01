const countries = require('./countries.json');


class Country{
    constructor(codeAlpha3, 
        area, 
        borders, 
        capital, 
        continent,
        demonym,
        name,
        population,
        topLevelDomain,){
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

    static fill_db(){
        for(let country of countries){
            Country.allCountries.push(
                new Country(
                    country.alpha3Code,
                    country.area,
                    country.borders || null,
                    country.capital,
                    country.continent,
                    country.demonym,
                    country.name,
                    country.population,
                    country.topLevelDomain
                )
            )
        }
    }
}


Country.fill_db()
console.log(Country.allCountries)   