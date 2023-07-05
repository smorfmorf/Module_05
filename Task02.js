function modifyString(str) {
    const modifyStrig = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return modifyStrig;
}

const inputString = "привет Мир";
const modifiedString = modifyString(inputString);
console.log(modifiedString); // Вывод: "Привет мир"
