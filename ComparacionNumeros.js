let numero1 = 4;
let numero2 = 4;
let numero3 = 2;

function numeros(num1, num2, num3) {
    
    if (num1 === num2 && num1 === num3) {
        console.log("Los números son iguales:", num1, num2, num3);
    } else {
        let numeros = [num1, num2, num3];

        let descendente = numeros.slice().sort((a, b) => b - a);
        console.log("Mayor a menor:", descendente);

        let ascendente = numeros.slice().sort((a, b) => a - b);
        console.log("Menor a mayor:", ascendente);

        let menor = ascendente[0];
        let medio = ascendente[1];
        let mayor = ascendente[2];
    }
}

numeros(numero1, numero2, numero3);