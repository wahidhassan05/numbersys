let userInput = document.getElementById("field");
let input = document.getElementById("input");
let output = document.getElementById("output");
let numOutPut = document.getElementById("numOut");
let convertBtn = document.getElementById("convert");
let numArr = [];

function decimalToBinary() {
  let num = parseInt(userInput.value);

  while (num >= 1) {
    numArr.push(num % 2);
    num = Math.floor(num / 2);
  }
  let newNum = numArr.reverse();
  let number = newNum.join("");
  numOutPut.textContent = number;
  numArr = [];
}

function binaryToDecimal() {
  let num = userInput.value;
  let number = 0;
  for (let i = 0; i < num.length; i++) {
    number += parseInt(num[i]) * 2 ** (num.length - 1 - i);
  }
  numOutPut.textContent = number;
  num = [];
}

function decimalToOctal() {
  let num = parseInt(userInput.value);

  while (num >= 1) {
    numArr.push(num % 8);
    num = Math.floor(num / 8);
  }
  let newNum = numArr.reverse();
  let number = newNum.join("");
  numOutPut.textContent = number;
  numArr = [];
}

function octalToDecimal() {
  let num = userInput.value;
  let number = 0;
  for (let i = 0; i < num.length; i++) {
    number += parseInt(num[i]) * 8 ** (num.length - 1 - i);
  }
  numOutPut.textContent = number;
  num = [];
}

function decimalToHexa() {
  let num = parseInt(userInput.value);

  while (num >= 1) {
    if (num % 16 === 10) {
      numArr.push("A");
    } else if (num % 16 === 11) {
      numArr.push("B");
    } else if (num % 16 === 12) {
      numArr.push("C");
    } else if (num % 16 === 13) {
      numArr.push("D");
    } else if (num % 16 === 14) {
      numArr.push("E");
    } else if (num % 16 === 15) {
      numArr.push("F");
    } else {
      numArr.push(num % 16);
    }

    num = Math.floor(num / 16);
  }
  let newNum = numArr.reverse();
  let number = newNum.join("");
  numOutPut.textContent = number;
  numArr = [];
}

function hexaToDecimal() {
  let num = userInput.value;
  let number = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "A") {
      number += 10 * 16 ** (num.length - 1 - i);
    } else if (num[i] === "B") {
      number += 11 * 16 ** (num.length - 1 - i);
    } else if (num[i] === "C") {
      number += 12 * 16 ** (num.length - 1 - i);
    } else if (num[i] === "D") {
      number += 13 * 16 ** (num.length - 1 - i);
    } else if (num[i] === "E") {
      number += 14 * 16 ** (num.length - 1 - i);
    } else if (num[i] === "F") {
      number += 15 * 16 ** (num.length - 1 - i);
    } else {
      number += parseInt(num[i]) * 16 ** (num.length - 1 - i);
    }
  }
  numOutPut.textContent = number;
  num = [];
}

function mainCall() {
  let userInputChoice = input.options[input.selectedIndex].text;
  let useroutputChoice = output.options[output.selectedIndex].text;
  if (userInputChoice === "DEC" && useroutputChoice === "BIN") {
    decimalToBinary();
  } else if (userInputChoice === "DEC" && useroutputChoice === "HEX") {
    decimalToHexa();
  } else if (userInputChoice === "DEC" && useroutputChoice === "OCT") {
    decimalToOctal();
  } else if (userInputChoice === "BIN" && useroutputChoice === "DEC") {
    binaryToDecimal();
  } else if (userInputChoice === "BIN" && useroutputChoice === "HEX") {
    let num = userInput.value;
    let number = 0;
    for (let i = 0; i < num.length; i++) {
      number += parseInt(num[i]) * 2 ** (num.length - 1 - i);
    }

    while (number >= 1) {
      if (number % 16 === 10) {
        numArr.push("A");
      } else if (number % 16 === 11) {
        numArr.push("B");
      } else if (number % 16 === 12) {
        numArr.push("C");
      } else if (number % 16 === 13) {
        numArr.push("D");
      } else if (number % 16 === 14) {
        numArr.push("E");
      } else if (number % 16 === 15) {
        numArr.push("F");
      } else {
        numArr.push(number % 16);
      }

      number = Math.floor(number / 16);
    }
    let newNum = numArr.reverse();
    let newNumber = newNum.join("");
    numOutPut.textContent = newNumber;
    numArr = [];
  } else if (userInputChoice === "BIN" && useroutputChoice === "OCT") {
    let num = userInput.value;
    let number = 0;
    for (let i = 0; i < num.length; i++) {
      number += parseInt(num[i]) * 2 ** (num.length - 1 - i);
    }

    while (number >= 1) {
      numArr.push(number % 8);
      number = Math.floor(number / 8);
    }
    let newNum = numArr.reverse();
    let newNumber = newNum.join("");
    numOutPut.textContent = newNumber;
    numArr = [];
  } else if (userInputChoice === "HEX" && useroutputChoice === "DEC") {
    hexaToDecimal();
  } else if (userInputChoice === "HEX" && useroutputChoice === "BIN") {
    let num = userInput.value;
    let number = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "A") {
        number += 10 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "B") {
        number += 11 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "C") {
        number += 12 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "D") {
        number += 13 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "E") {
        number += 14 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "F") {
        number += 15 * 16 ** (num.length - 1 - i);
      } else {
        number += parseInt(num[i]) * 16 ** (num.length - 1 - i);
      }
    }

    while (number >= 1) {
      numArr.push(number % 2);
      number = Math.floor(number / 2);
    }
    let newNum = numArr.reverse();
    let newNumber = newNum.join("");
    numOutPut.textContent = newNumber;
    numArr = [];
  } else if (userInputChoice === "HEX" && useroutputChoice === "OCT") {
    let num = userInput.value;
    let number = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "A") {
        number += 10 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "B") {
        number += 11 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "C") {
        number += 12 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "D") {
        number += 13 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "E") {
        number += 14 * 16 ** (num.length - 1 - i);
      } else if (num[i] === "F") {
        number += 15 * 16 ** (num.length - 1 - i);
      } else {
        number += parseInt(num[i]) * 16 ** (num.length - 1 - i);
      }
    }

    while (number >= 1) {
      numArr.push(number % 8);
      number = Math.floor(number / 8);
    }
    let newNum = numArr.reverse();
    let newNumber = newNum.join("");
    numOutPut.textContent = newNumber;
    numArr = [];
  } else if (userInputChoice === "OCT" && useroutputChoice === "DEC") {
    octalToDecimal();
  } else if (userInputChoice === "OCT" && useroutputChoice === "BIN") {
    let num = userInput.value;
    let number = 0;
    for (let i = 0; i < num.length; i++) {
      number += parseInt(num[i]) * 8 ** (num.length - 1 - i);
    }
    while (number >= 1) {
      numArr.push(number % 2);
      number = Math.floor(number / 2);
    }
    let newNum = numArr.reverse();
    let newNumber = newNum.join("");
    numOutPut.textContent = newNumber;
    numArr = [];
  } else if (userInputChoice === "OCT" && useroutputChoice === "HEX") {
    let num = userInput.value;
    let number = 0;
    for (let i = 0; i < num.length; i++) {
      number += parseInt(num[i]) * 8 ** (num.length - 1 - i);
    }
    while (number >= 1) {
      if (number % 16 === 10) {
        numArr.push("A");
      } else if (number % 16 === 11) {
        numArr.push("B");
      } else if (number % 16 === 12) {
        numArr.push("C");
      } else if (number % 16 === 13) {
        numArr.push("D");
      } else if (number % 16 === 14) {
        numArr.push("E");
      } else if (number % 16 === 15) {
        numArr.push("F");
      } else {
        numArr.push(number % 16);
      }

      number = Math.floor(number / 16);
    }
    let newNum = numArr.reverse();
    let newNumber = newNum.join("");
    numOutPut.textContent = newNumber;
    numArr = [];
  } else if (
    userInputChoice === "Choose..." &&
    useroutputChoice === "Choose..."
  ) {
    alert("Please choose input and output format");
  } else if (userInputChoice === "Choose...") {
    alert("Please choose an input format");
  } else if (useroutputChoice === "Choose...")
    alert("Please choose an output format");
}

convertBtn.addEventListener("click", mainCall);
