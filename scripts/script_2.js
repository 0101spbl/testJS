let number = prompt("Tape ton nombre !");

function fact(number) {
    f = 1
    for (i = 1; i <= number; i++) {
        f *= i;   // ou f *= i;
    }
    return f;
}

console.log("La factorielle de " + number + " est " + fact(number));