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
    for (let key in Country.allCountries)
    {
        console.log(Country.allCountries[key].getBorders());
        break;
        for (let alpha3CodeNeighbor of Country.allCountries[key].getBorders())
        {
            for (let key2 in Country.allCountries)
            {
                if(alpha3CodeNeighbor === Country.allCountries[key2].codeAlpha3)
                {
                    if (Country.allCountries[key2].continent !== Country.allCountries[key].continent)
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
}*/

outsideTheContinent()