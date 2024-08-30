let notas = [9,10,7,6,5];

let a = [
    [1,2,3],
    [2,1,4],
    [8,7,7]
];

console.log(a[1][2]);


let capitais = {
    DF: 'Brasilia',
    DF_DDD: 61,
    BA: 'Salvador',
    BA_DDD: 71
};


console.log(capitais.DF);

for (const key in capitais) {
    const valor = capitais[key];
    console.log(key + " - " + valor);
}

/**
 * verifica se um numero é par
 * @param {Interger} n 
 * @returns {boolean}
 */
function verificaNumeroPar(n){
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(verificaNumeroPar(2));
console.log(verificaNumeroPar(3));