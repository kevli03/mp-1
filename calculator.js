const num1Input = document.getElementById("first-number").value;
const num2Input = document.getElementById("second-number").value;
const num1 = Number(num1Input);
const num2 = Number(num2Input);

function addition() {
    let passes = true;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        passes = false;
    }
    else {
        result = num1 + num2;
    }

    if (passes) {
        if (result < 0) {
            document.getElementById("output").innerHTML = String(result);
        }
        else {
            document.getElementById("output").innerHTML = String(result);
        }
    }
    else {
        document.getElementById("output").innerHTML = "Result not computable";
    }
}

function subtraction() {
    let passes = true;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        passes = false;
    }
    else {
        result = num1 - num2;
    }

    if (passes) {
        if (result < 0) {
            document.getElementById("output").innerHTML = String(result);
        }
        else {
            document.getElementById("output").innerHTML = String(result);
        }
    }
    else {
        document.getElementById("output").innerHTML = "Result not computable";
    }
}

function multiplication() {
    let passes = true;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        passes = false;
    }
    else {
        result = num1 * num2;
    }

    if (passes) {
        if (result < 0) {
            document.getElementById("output").innerHTML = String(result);
        }
        else {
            document.getElementById("output").innerHTML = String(result);
        }
    }
    else {
        document.getElementById("output").innerHTML = "Result not computable";
    }
}

function division() {
    let passes = true;
    let result = 0;

    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        passes = false;
    }
    else {
        result = num1 / num2;
    }

    if (passes) {
        if (result < 0) {
            document.getElementById("output").innerHTML = String(result);
        }
        else {
            document.getElementById("output").innerHTML = String(result);
        }
    }
    else {
        document.getElementById("output").innerHTML = "Result not computable";
    }
}

function power() {
    let passes = true;
    let result = 0;

    if (isNaN(num1) || isNaN(num2) || num2 % 1 !== 0) {
        passes = false;
    }
    else {
        if (num1 === 0) {
            result = 0;
        }
        else if (num2 === 0) {
            result = 1;
        }
        else {
            if (num2 < 0) {
                result = 1 / num1;
                for (let i = -1; i >= num2; i--) {
                    result *= (1 / num1);
                }
            }
            else {
                result = num1;
                for (let i = -1; i <= num2; i++) {
                    result *= num1;
                }
            }
        }
    }

    if (passes) {
        if (result < 0) {
            document.getElementById("output").innerHTML = String(result);
        }
        else {
            document.getElementById("output").innerHTML = String(result);
        }
    }
    else {
        document.getElementById("output").innerHTML = "Result not computable";
    }
}

function clearing() {
    document.getElementById("first-number").innerHTML = "";
    document.getElementById("second-number").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}