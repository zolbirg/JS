function calculator(string) {
  let result, valueLeft, valueRight;
  let isNumbers = true;

  let arr = string.split(" ");

  main();

  function main() {
    if (arr.length === 3 && isAlphanumeric(arr[0]) && isAlphanumeric(arr[2])) {
      if (!isRoman(arr[0]) === !isRoman(arr[2]) && isRoman(arr[0]) === isRoman(arr[2])) {
        if (isRoman(arr[0])) {
          valueLeft = convertRomanStringToNumber(arr[0]);
          isNumbers = false;
        } else {
          valueLeft = arr[0];
        }

        if (isRoman(arr[2])) {
          valueRight = convertRomanStringToNumber(arr[2]);
          isNumbers = false;
        } else {
          valueRight = arr[2];
        }

          calculait(valueLeft, arr[1], valueRight);
   
        if (!isNumbers) result = convertNumberToRomanString(result);
      }
    } else {
      throw new Error("Некорректные данные");
    }
  }

  function isAlphanumeric(str) {
    if (/^[0-9a-zA-Z]+$/.test(str)) return true;
  }
  
  function isRoman(str) {
    if (/^[IVXLCDM]+$/.test(str)) return true;
  }

  function convertNumberToRomanString(num) {
    let romanNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanLetter = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    let ans = "";

    //find the closest roman numeral
    for (let i = 0; i < romanNumber.length; i++) {
      if (num >= romanNumber[i]) {
        // Add the roman numeral
        ans += romanLetter[i];

        // subtract from digit being converted
        num -= romanNumber[i];

        //check again (alternately use modulus)
        i--;
      }
    }

    return ans;
  }

  function convertRomanStringToNumber(s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return [...s].reduce(
      (r, c, i, s) => (map[s[i + 1]] > map[c] ? r - map[c] : r + map[c]),
      0
    );
  }

  function calculait(a, c, b) {
    a = Number(a);
    b = Number(b);

    if(a < 11 && b < 11 && a > 0 && b > 0 ){
    switch (c) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;

      case "/":
        if (b === 0) {
          throw new Error("Division by zero");
        }
        result = Math.floor(a / b);
        break;
    }}else{throw new Error("Некорректные данные");}
  }

  return result.toString();
}
module.exports = calculator; // Не трогайте эту строчку;}
