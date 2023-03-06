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
 * @returns {Array} 
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
            //À partir du codeAlpha3 de chaque voisin, on récupère le pays correspondant
            for (let key2 in Country.allCountries)
            {
                //Un pays correspond à un autre lorsque leurs codesAlpha3 sont identiques
                if(alpha3CodeNeighbor === Country.allCountries[key2].codeAlpha3)
                {
                    //Si le pays n'est pas déjà dans le tableau et que le continent du pays n'est pas le même que celui du voisin
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
 * @returns {Array<Country>}
 */
function moreNeighbors()
{
    let maxNeighbors = {0 : []};
    for (let key in Country.allCountries)
    {
        let neighbors = Country.allCountries[key].getBorders();
        if (neighbors.length > maxNeighbors[0])
        {
            maxNeighbors[0] = neighbors.length;
            maxNeighbors[1] = [Country.allCountries[key]];
        }
        else if (neighbors.length === maxNeighbors[0])
        {
            maxNeighbors[1].push(Country.allCountries[key]);
        }
    }
    return maxNeighbors;
}

//console.log(outsideTheContinent());
console.log(moreNeighbors());