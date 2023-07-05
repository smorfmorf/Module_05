function reverseString(str) {
    const reverse = str.split("").reverse().join("");
    return reverse;
}

const inputString = "Привет мир";
const reversedString = reverseString(inputString);
console.log(reversedString); // Вывод: "рим тевирП"
