import Country from './Country.js';

export default class Currency
{
    static all_currencies = [];
    
    constructor(name, symbol)
    {
        this.name = name;
        this.symbol = symbol;
    }

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
}