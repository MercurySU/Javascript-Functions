/*console.time()
console.log("ola freddie mercury")
console.error("freddie está morto")
console.timeEnd()

//type of
let numero = "20"
let letras = 150
console.log(typeof numero);
console.log(typeof letras);


//Operador Ternário 
const idadeMin = 18
const idadeCli= 23
/*if clássico: 
if(idadeCli >= idadeMin){
    console.log("Open Bar liberado")
} else{
    console.log("Open Bar bloqueado")
}
console.log(idadeCli >= idadeMin ? "Open Bar liberado" : "Open Bar bloqueado");

//TEMPLATE STRINGS
let ano = 1946
let dia = 5
let mes = "setembro"
console.log(`Freddie Mercury nasceu em ${dia} de ${mes} de ${ano}.`)

//Funções: declarar e executar
function imprime(texto){
    console.log(texto)
}
//executando: 
imprime("ola")
imprime("freddie")
imprime("mercury")

//Função sem parametros
function soma(){
    return 2 + 2;
}
console.log(soma())
//Função matemática 
//math round arredonda pontos flutuantes
let flutuante = Math.round(4.5)
console.log(flutuante) 

//Função math.ceil()
let flut = Math.ceil(3.2)
console.log(flut)
    
//Função math.floor()
let flu = Math.floor(3.8)
console.log(flu)

//Função Math.pow  exponenciação
let fl = Math.pow(2 , 2)
console.log(fl)

//Função Math.sqrt()   raiz quadrada
let f = Math.sqrt(100)
console.log(f)

//Função Math.min()  retorna o menor valor dos parametros
let x = Math.min(0, -20, -4)
console.log(x)

//Função Math.max()
let y = Math.max(0, 4, -20, 5, 6)
console.log(y)

//Função Math.random()  retorna valor randomico de 0 a 1
let a = Math.random()
console.log(a)
let b = Math.random()
console.log(b)


function fatorial (num){
    return (num*fatorial(num-1));
}
console.log(fatorial(5));

function fatorial(num){
    let x=num;
    if(num===1 || num===0){
        return 1;
    }else{
        while(num > 1){
            num--;
            x= x*num;
        }
    }
    return x;
    }
   
  console.log(fatorial(5));

 function somaSuc(num){
    let x=num;
    while(num){

    }
 }

 function soma(a,b){
    soma = a+b
    return soma
 }
 console.log(soma(4,5));

 function soma(a,b){
    return a + b
 }
 console.log(soma(3,6))

function idade(anoNasc, idade){
    idade = 2022 - anoNasc
    return idade
}console.log(soma(2003))

function frase(idade, nome){
    return `seu nome é ${nome} e tem ${idade} anos.`
}
console.log(frase(19,"suzana"))
console.log(frase("suzana",19))



//Chamando function dentro de outra funciton 
function soma(a,b){
    return a + b
}
console.log(soma(3,6))

function multiplicacao(a,b){
    return a*b
}
console.log(multiplicacao(3,5), (2,4))

console.log(multiplicacao(soma(2,2), soma(3,1)))
//a function multiplicação recebe soma() e soma() como parametros 
//2+2  3+1 -->  4 *  4 --> 16

//expressao de função 

const soma1 = function(a,b){
    return a + b
}
console.log(soma1(3,8))


//arrow function 
function apresentar(nome){
    retunr `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (a, b) => a + b

//Arrow function extenso 

const somaNum = (a,b) => {
    if (a>10 || b>10){
    return "somente numeros de 1 a 9"
} else {
    return a+b
}
}
console.log(somaNum(12,14))
*/
const lukeLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Luke logado com sucesso!"
  }
  
  const leiaLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Leia logada com sucesso!"
  }
  
console.log(lukeLogin())
console.log(leiaLogin())

const numera = 34; 
const emNumera = new String(numera)
console.log(emNumera)

const suzana = "sUZana";
console.log(suzana.charAt(0))
console.log(suzana.indexOf("a"))

console.log(suzana.toUpperCase())
console.log(suzana.toLowerCase())
