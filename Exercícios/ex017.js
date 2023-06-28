function parImpar(n){
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'ímpar'
    }
}

console.log(parImpar(5))
console.log(parImpar(8))
//----------------------------------
function soma(n1, n2){
    return n1+n2
}
console.log(soma(2,3))
console.log(soma(2))
//------------------
//para evitar que fique algum indefinido, posso passar parâmetros pré-definidos
function somaR(n1=0, n2=0){
    return n1+n2
}
console.log(somaR(2,3))
console.log(somaR(2))
//----------------------------
//também posso passar uma função dentro da variável
var x = function(n){
    return n*2
}
console.log(x(5))