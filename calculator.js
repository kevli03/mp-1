function addition() {
    const num1Input = document.getElementById("first-number").value;
    const num2Input = document.getElementById("second-number").value;
    const num1 = Number(num1Input);
    const num2 = Number(num2Input);

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
            document.getElementById("output").innerHTML = `<p style='color: red;'>${String(result)}</p>`;
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
    const num1Input = document.getElementById("first-number").value;
    const num2Input = document.getElementById("second-number").value;
    const num1 = Number(num1Input);
    const num2 = Number(num2Input);

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
            document.getElementById("output").innerHTML = `<p style='color: red;'>${String(result)}</p>`;
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
    const num1Input = document.getElementById("first-number").value;
    const num2Input = document.getElementById("second-number").value;
    const num1 = Number(num1Input);
    const num2 = Number(num2Input);

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
            document.getElementById("output").innerHTML = `<p style='color: red;'>${String(result)}</p>`;
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
    const num1Input = document.getElementById("first-number").value;
    const num2Input = document.getElementById("second-number").value;
    const num1 = Number(num1Input);
    const num2 = Number(num2Input);

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
            document.getElementById("output").innerHTML = `<p style='color: red;'>${String(result)}</p>`;
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
    const num1Input = document.getElementById("first-number").value;
    const num2Input = document.getElementById("second-number").value;
    const num1 = Number(num1Input);
    const num2 = Number(num2Input);

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
            result = 1
            if (num2 < 0) {
                for (let i = 0; i > num2; i--) {
                    result *= (1 / num1);
                }
            }
            else {
                for (let i = 0; i < num2; i++) {
                    result *= num1;
                }
            }
        }
    }

    if (passes) {
        if (result < 0) {
            document.getElementById("output").innerHTML = `<p style='color: red;'>${String(result)}</p>`;
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
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}
