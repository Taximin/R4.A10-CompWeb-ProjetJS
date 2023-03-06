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
        console.log(country.getBorders());
    }
}

outsideTheContinent()