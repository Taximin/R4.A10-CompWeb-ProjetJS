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
    //Pour chaque pays
    for (let key in Country.allCountries)
    {
        //On parcourt ses voisins (codeAlpha3)
        for (let alpha3CodeNeighbor of Country.allCountries[key].getBorders())
        {
            //Pour chaque pays
            for (let key2 in Country.allCountries)
            {
                //À partir du codeAlpha3 de chaque voisin, on récupère le pays correspondant
                if(alpha3CodeNeighbor === Country.allCountries[key2].codeAlpha3)
                {
                    if (Country.allCountries[key2].continent !== Country.allCountries[key].continent && !resPays.includes(Country.allCountries[key2]))
                    {
                        resPays.push(Country.allCountries[key2]);
                    }
                }
            }
        }
    }
    return resPays;
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

console.log(outsideTheContinent());