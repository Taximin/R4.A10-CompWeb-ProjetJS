export default class Currency
{    
    constructor(code, symbol)
    {
        this.code = code;
        this.symbol = symbol;
    }

    toString()
    {
        return "Code: " + this.code + 
               "\nSymbol: " + this.symbol;
    }
}