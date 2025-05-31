/*function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}*/

const calculadora = {
    somar: function(a, b){
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    }
}

export {calculadora};

export function multiplicar(a, b) {
    return a * b;
}