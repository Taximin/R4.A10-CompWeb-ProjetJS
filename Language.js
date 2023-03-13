//export default
class Language
{
    constructor(iso, nom)
    {
        this.iso = iso;
        this.nom = nom;
    }

    toString()
    {
        return "ISO: " + this.iso + 
               "\nNom: " + this.nom;
    }
}