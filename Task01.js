function convert(Euro) {
    const dolar = 1.2;
    const ruble = 64;
    const priceInDollars = Euro * dolar;
    const priceInRubles = priceInDollars * ruble;
    return priceInRubles;
}
