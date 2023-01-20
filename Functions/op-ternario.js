//Operador Ternário 
const idadeMin = 18
const idadeCli= 23
//if clássico: 
if(idadeCli >= idadeMin){
    console.log("Open Bar liberado")
} else{
    console.log("Open Bar bloqueado")
}
//If operador ternário --> (var > var2 ? "true" : "false")
console.log(idadeCli >= idadeMin ? "Open Bar liberado" : "Open Bar bloqueado") 