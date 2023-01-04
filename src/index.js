module.exports = function toReadable (number) {
    let wordsBasic = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen"];
    let decimals = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let res = "";
    let array = [];
    let arrayInWords = [];
    array = String(number).split("");
    if (number < 10) {arrayInWords[0] = wordsBasic[number];}
    if (array[array.length - 2] === "0") {arrayInWords[0] = wordsBasic[Number(array[array.length - 1])];}
    if (array[array.length - 2] === "1") {
        arrayInWords[0] = wordsBasic[Number(String(array[array.length - 2]) + String(array[array.length - 1]))];
    }
    if (Number(array[array.length - 2]) >= 2) {
        arrayInWords[0] =  wordsBasic[Number(array[array.length - 1])];
        arrayInWords[1] = decimals[Number(array[array.length - 2])];
    }
    if (Number(array[array.length - 3]) >= 1) {
        arrayInWords[2] = "hundred";
        arrayInWords[3] = wordsBasic[array[array.length - 3]];
    }
    res = arrayInWords.reverse().join(" ");
    res = res.replace(/ {1,}/g," ");
    res = res.trim();
    if (number === 0) {
        return "zero";
    } else {
        return res;
    }
}
