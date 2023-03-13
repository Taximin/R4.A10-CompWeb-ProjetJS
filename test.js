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
 * @returns {Array<Int8Array,Country>}
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

/**
 * Pays n’ayant aucun voisin.
 * @returns {Array<Country>}
 * 
 */
function neighborLess()
{
    let lessNeighbors = [];
    for (let key in Country.allCountries)
    {
        let neighbors = Country.allCountries[key].getBorders();
        if (neighbors.length == 0)
        {
            lessNeighbors.push(Country.allCountries[key]);
        }
    }
    return lessNeighbors;
}

/**
 * Pays (possibilité de plusieurs) parlant le plus de langues. Affichez aussi les langues.
 * @returns {Array<Int8Array,Country>}
 */
function moreLanguages()
{
    let maxLanguages = {0 : []};
    for (let key in Country.allCountries)
    {
        let languages = Country.allCountries[key].getLanguages();

        if (languages.length > maxLanguages[0])
        {
            maxLanguages[0] = languages.length;
            maxLanguages[1] = [Country.allCountries[key]];
        }
        else if (languages.length === maxLanguages[0])
        {
            maxLanguages[1].push(Country.allCountries[key]);
        }
    }
    return maxLanguages;
}

/**
 * Pays ayant au moins un voisin parlant l’une de ses langues. Affichez aussi les pays voisins et les langues en question
 * @returns {Array<Country, Country>}
 */
function withCommonLanguage(){
    let res = [];
    for (let key in Country.allCountries){
        let languages = Country.allCountries[key].getLanguages();
        let neighborsAlpha = Country.allCountries[key].getBorders();
        let neighbors = [];
        for(let neighborAlpha of neighborsAlpha){
            neighbors.push(Country.allCountries[neighborAlpha]);
        }
        for(let neighbor of neighbors){
            for(let language of languages){
                if(neighbor != undefined){
                    // console.log(res.indexOf(Country.allCountries[key].codeAlpha3))
                    if(!res.includes(Country.allCountries[key].codeAlpha3)){
                        res[res.indexOf(Country.allCountries[key].codeAlpha3) + 1].push([neighbor.codeAlpha3, language.iso]);
                    }
                    else if(neighbor.getLanguages().includes(language)){
                        res.push(Country.allCountries[key].codeAlpha3, [[neighbor.codeAlpha3, language.iso]]);
                    }
                }
            }
        }
    }
    return res;
}

/**
 * Pays sans aucun voisin ayant au moins une de ses monnaies.
 * @returns {Array<Country>}
 */
function withoutCommonCurrency(){
    let res = [];
    for(let key in Country.allCountries){
        res.push(Country.allCountries[key]);
    }
    for(let country of res){
        let currencies = country.currencies;
        let neighborAlpha = country.getBorders();
        let neighbors = [];
        for(let neighbor of neighborAlpha){
            neighbors.push(Country.allCountries[neighbor]);
        }
        for(let neighbor of neighbors){
            for(let currency of currencies){
                if(neighbor != undefined){
                    for(let neighbCurrency of neighbor.getCurrencies()){
                        if(neighbCurrency["code"] == currency){
                            res.splice(res.indexOf(country), 1);
                        }
                    }
                }
            }
        }
    }
    return res;
}

/**
 * Pays triés par ordre décroissant de densité de population
 * @returns {Array<Country>}
 */
function sortingDecreasingDensity()
{
    let lstAllCountries = Object.values(Country.allCountries);

    lstAllCountries.sort((a, b) => {
        return b.getPopDensity() - a.getPopDensity();
    });

    return lstAllCountries;
}

/**
 * Pays ayant plusieurs Top Level Domains Internet.
 * @returns {Array<Country>}
 */
function moreTopLevelDomains()
{
    let lstMoreTopLevelDomains = [];
    for (let key in Country.allCountries)
    {
        if (Country.allCountries[key].topLevelDomain.length > 1)
        {
            lstMoreTopLevelDomains.push(Country.allCountries[key]);
        }
    }

    return lstMoreTopLevelDomains;
}

/**
 * Liste de tous les pays que l’on peut visiter en passant de l’un à l’autre
 * @param {string} nom_pays
 */
function veryLongTrip(nom_pays)
{
    //Pour chaque pays
    for (let key in Country.allCountries) 
    {
        //On cherche le pays correspondant au nom passé en paramètre
        if (nom_pays === Country.allCountries[key].name)
        {
            console.log(Country.allCountries[key]);
            //On parcourt ses voisins (codeAlpha3)
            for (let alpha3CodeNeighbor of Country.allCountries[key].getBorders())
            {
                //À partir du codeAlpha3 de chaque voisin, on récupère le pays correspondant
                for (let key2 in Country.allCountries)
                {
                    //Un pays correspond à un autre lorsque leurs codesAlpha3 sont identiques
                    if(alpha3CodeNeighbor === Country.allCountries[key2].codeAlpha3)
                    {
                        //Si le pays n'est pas déjà dans le tableau
                        if (!lstAllCountriesLongTrip.includes(Country.allCountries[key2]))
                        {
                            lstAllCountriesLongTrip.push(Country.allCountries[key2]);
                            veryLongTrip(Country.allCountries[key2].name);
                        }
                    }
                }
            }
        }
    }
    return lstAllCountriesLongTrip;
}

//console.log(outsideTheContinent());
//console.log(moreNeighbors());
//console.log(neighborsLess());
//console.log(moreLanguages());
//console.dir(withCommonLanguage(), {'maxArrayLength': null});
console.dir(withoutCommonCurrency(), {'maxArrayLength': null});
//console.log(sortingDecreasingDensity());
//console.log(moreTopLevelDomains());
let lstAllCountriesLongTrip = [];
veryLongTrip("France");
console.log(lstAllCountriesLongTrip);
console.log(lstAllCountriesLongTrip.length);