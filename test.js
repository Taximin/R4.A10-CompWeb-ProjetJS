import Country from "./Country.js";

/** 
 * @param {string} continent
 * @returns {Array} 
 * Blablabla
 * */
function test() {}

/**
 * Pays dont au moins un pays frontalier n’est pas dans le même continent.
 */
function outsideTheContinent()
{
    let resPays = [];
    for(let country of Country.allCountries)
    {
        //console.log(country.getBorders());
        for(let border of country.getBorders())
        {
            if(border.continent !== country.continent)
            {
                resPays.push(country);
            }
        }
    }
}

/**
 * Pays (possibilité de plusieurs) ayant le plus grand nombre de voisins. Affichez aussi les voisins.
 */
function moreNeighbors()
{
    
}

outsideTheContinent()