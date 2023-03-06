import Country from "./Country.js";

/** 
 * @param {string} demo
 * @returns {Array} 
 * Blablabla
 * */
function test(demo) {}

Country.fill_db();

/**
 * Pays dont au moins un pays frontalier n’est pas dans le même continent.
 */
function outsideTheContinent()
{
    let resPays = [];
    for (let country of Country.allCountries)
    {
        for (let alpha3CodeNeighbor of country.getBorders())
        {
            for (let country2 of Country.allCountries)
            {
                if(alpha3CodeNeighbor === country2.codeAlpha3)
                {
                    if (country2.continent !== country.continent)
                    {
                        resPays.push(country);
                    }
                }
            }
        }
    }
}

/**
 * Pays (possibilité de plusieurs) ayant le plus grand nombre de voisins. Affichez aussi les voisins.
 */
function moreNeighbors()
{
    let maxNeighbors = {0 : []};
    for (let country of Country.allCountries)
    {
        let neighbors = country.getBorders();
        if (neighbors.length > maxNeighbors[0])
        {
            maxNeighbors = {neighbors.length : [country]};
        }
        else if (neighbors.length === maxNeighbors[0])
        {
            maxNeighbors[neighbors.length].push(country);
        }
    }
}

outsideTheContinent()