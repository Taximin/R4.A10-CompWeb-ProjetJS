export default class Country
{
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
    }

    getPopDensity()
    {
        return (this.population / this.area).toFixed(2);
    }

    // getBorders()
    // {
    //     let ctnBorders = []
    //     for(let border of this.borders){
    //         for(let country of countries){
    //             if(border === country.alpha3Code){
    //                 ctnBorders.push(country.alpha3Code);
    //             }
    //         }
    //     }
    //     return ctnBorders;
    // }

    toString()
    {
        return "Code Alpha 3: " + this.codeAlpha3 + "\n" + "Nom: " + this.name + "\n" + "Continent: " + this.continent + "\n" + "Population: " + this.population + "\n" + "Densité de population: " + this.getPopDensity() + "\n" + "Capitale: " + this.capital + "\n" + "Gentilé: " + this.demonym + "\n" + "Top Level Domain: " + this.topLevelDomain + "\n" /*+ "Pays limitrophes: " + this.getBorders()*/;
    }

    static getLanguages()
    {
        
    }
}