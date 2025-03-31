const clear = document.querySelector("#bs");
const plusOrMnus = document.querySelector("#pos-neg");
const percent = document.querySelector("#percent");
const divide = document.querySelector("#divide");

const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");

const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const add = document.querySelector("#add");

const utl = document.querySelector("#utl");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");
const screen = document.querySelector("#screen");

var firstEntry = [];
var operator = "";
var secondEntry = [];
var moveToSecond = false;
var answer = "";
var compFirstEntry = "";
var compSecondEntry = "";

function getArray(n) {
    if (moveToSecond === false) {
        return firstEntry.push(n);
    } else {
        return secondEntry.push(n);
    }
}

function pushToScreen() {
    if (moveToSecond === false) {
        let display = firstEntry.join("");
        screen.textContent = display;
    } else {
        let display = secondEntry.join("");
        screen.textContent = display;
    }
}

clear.addEventListener("click", () => {
    firstEntry = [];
    operator = "";
    secondEntry = [];
    moveToSecond = false;
    screen.textContent = "0"
});

seven.addEventListener("click", () => {
    getArray(7);
    pushToScreen();
});
eight.addEventListener("click", () => {
    getArray(8);
    pushToScreen();
});
nine.addEventListener("click", () => {
    getArray(9);
    pushToScreen();
});
four.addEventListener("click", () => {
    getArray(4);
    pushToScreen();
});
five.addEventListener("click", () => {
    getArray(5);
    pushToScreen();
});
six.addEventListener("click", () => {
    getArray(6);
    pushToScreen();
});
one.addEventListener("click", () => {
    getArray(1);
    pushToScreen();
});
two.addEventListener("click", () => {
    getArray(2);
    pushToScreen();
});
three.addEventListener("click", () => {
    getArray(3);
    pushToScreen();
});
zero.addEventListener("click", () => {
    getArray(0);
    pushToScreen();
});
decimal.addEventListener("click", () => {
    getArray(".");
    pushToScreen();
});

add.addEventListener("click", () => {
    moveToSecond = true;
    operator = "add";
    compFirstEntry = parseInt(screen.textContent);
    console.log(operator);
})
minus.addEventListener("click", () => {
    moveToSecond = true;
    operator = "minus";
    compFirstEntry = parseInt(screen.textContent);
    console.log(operator);
})
multiply.addEventListener("click", () => {
    moveToSecond = true;
    operator = "mult";
    compFirstEntry = parseInt(screen.textContent);
    console.log(operator);
})
divide.addEventListener("click", () => {
    moveToSecond = true;
    operator = "divide";
    compFirstEntry = parseInt(screen.textContent);
    console.log(operator);
})

equal.addEventListener("click", () => {
    compSecondEntry = parseInt(screen.textContent);
    if (operator === "add") {
        answer = compFirstEntry + compSecondEntry;
        screen.textContent = answer;
    } else if (operator === "minus") {
        answer = compFirstEntry - compSecondEntry;
        screen.textContent = answer;
    } else if (operator === "mult") {
        answer = compFirstEntry * compSecondEntry;
        screen.textContent = answer;
    } else if (operator === "divide") {
        answer = compFirstEntry / compSecondEntry;
        screen.textContent = answer;
    }
})