// @ts-check

var Mousetrap = require("mousetrap");

const actual = document.getElementById("actual")
const resultado = document.getElementById("resultado")


/**
 * Añade `n` a actual
 *
 * @argument n {number}
 * @returns void
 */
const appendNumber = (n) => {
    if (actual.innerHTML == "0") {
        actual.innerHTML = "";
    }
    actual.innerHTML += n;
}

// Botones numericos
for (let i = 0; i < 10; i++) {
    document.getElementById(`btn-${i}`).addEventListener("click", () => {
        appendNumber(i);
    })
    Mousetrap.bind(`${i}`, () => {
        appendNumber(i);
    });
}

/**
 * Obtiene los valores de `actual` y `resultado` como numeros
 *
 * @typedef {{actual: number, resultado: number}} valores
 * @returns valores
 */
const getValues = () => {
    const a = parseInt(actual.innerHTML);
    const r =  parseInt(resultado.innerHTML);
    return {
        actual: a,
        resultado: r
    };
}

/**
 * Ejecuta la operacion asignada, mostrando el resultado
 *
 * @argument op {(n1: number, n2: number) => number}
 */
const execOp = (op) => {
    const vals = getValues();
    resultado.innerHTML = op(vals.resultado, vals.actual).toString();
    actual.innerHTML = "0";
}

const sumar = () => execOp((a, b) => a + b);
const restar = () => execOp((a, b) => a - b);
const multiplicar = () => execOp((a, b) => a * b);
const dividir = () => execOp((a, b) => a / b);

document.getElementById("btn-suma").addEventListener("click", sumar);
document.getElementById("btn-resta").addEventListener("click", restar); 
document.getElementById("btn-multiplicacion").addEventListener("click", multiplicar);
document.getElementById("btn-division").addEventListener("click", dividir);

Mousetrap.bind("+", sumar);
Mousetrap.bind("-", restar);
Mousetrap.bind("*", multiplicar);
Mousetrap.bind("/", dividir);

document.getElementById("btn-back").addEventListener("click", () => {
    actual.innerHTML = actual.innerHTML.slice(0, -1);
});

document.getElementById("btn-limpiar").addEventListener("click", () => {
    actual.innerHTML = "0";
    resultado.innerHTML = "0";
})
