//Chamando function dentro de outra funciton 
function soma(a,b){
    return a + b
}
console.log(soma(3,6))

function multiplicacao(a,b){
    return a*b
}
console.log(soma(multiplicacao(3,5), multiplicacao(2,4)))