/*
    * Написать программу принимающую строчку, внутри которой есть несколько записей вида "$120", нужно вывести ВСЕ числа после доллара
    * Пример: "Есть несколько товаров по $120 и $20 и $70 все они крутые" - > 120 20 70
    */

const text = "Есть несколько товаров по $120 и $20 и $70 все они крутые";

const prices = []
let dollarIndex = -1;
while (true) {
    dollarIndex = text.indexOf("$", dollarIndex + 1);
    if (dollarIndex == -1)
        break;

    spaceIndex = text.indexOf(" ", dollarIndex + 1);

    const price = text.slice(dollarIndex + 1, spaceIndex);
    prices.push(price);

    if (spaceIndex == -1)
        break;

    dollarIndex = spaceIndex;
}

console.log(prices);

