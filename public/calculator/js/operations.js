function sum() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer = calculate(Number(display2), Number(display1), operator || "+");
        document.getElementById('display2').value = answer;
    } else {
        document.getElementById('display2').value = display1;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = '+';
}

function sub() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer = calculate(Number(display2), Number(display1), operator || "-");
        document.getElementById('display2').value = answer;
    } else {
        document.getElementById('display2').value = display1;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = '-';
}

function mul() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer = calculate(Number(display2), Number(display1), operator || "*");
        document.getElementById('display2').value = answer;
    } else {
        document.getElementById('display2').value = display1;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = '*';
}

function div() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer = calculate(Number(display2), Number(display1), operator || "/");
        document.getElementById('display2').value = answer;
    } else {
        document.getElementById('display2').value = display1;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = '/';
}

function dot() {
    const num = document.getElementById('display1').value;
    if (!num.includes(".")) {
        document.getElementById('display1').value = num + ".";
    }
}

function equal() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "" && operator !== "") {
        let answer = calculate(Number(display2), Number(display1), operator);
        document.getElementById('display1').value = answer;
        document.getElementById('display2').value = "";
        document.getElementById('operator').value = "";
    }
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return num2;
    }
}
