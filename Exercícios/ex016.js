var num = [5,8,9]
console.log(`Nosso vetor é ${num}`)
//adicionando valor no índice 3
num[3] = 6
console.log(`Novo vetor é ${num}`)
//adicinando valor criando um novo índice (por último)
num.push(4)
console.log(`Novo vetor é ${num}`)
//para saber o tamanho do vetor
console.log(`O tamanho do vetor é: ${num.length}`)
//colocar em ordem crescente
console.log(`O vetor em ordem crescente é: ${num.sort()}`)
//verificar valor de um índice 3
console.log(`O valor no índice 3 é: ${num[3]}`)
//outra forma de mostrar o array
for(var i=0; i< num.length; i++){
    console.log(`A posição ${i} tem valor ${num[i]}`)
}
//usando FOR-IN
for(var i in num){
    console.log(`A posição ${i} tem valor ${num[i]}`)
}
//buscando em qual índice está o valor 9
var posicao = num.indexOf(9)
if(posicao == -1){
    console.log('Não existe esse valor no vetor')
} else{
console.log(`Está no índice ${posicao}`)
}