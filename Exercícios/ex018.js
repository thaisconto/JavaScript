function fatorial (n){
    fat = 1
    for(var i = n; i > 1; i--){
        fat = fat * i
    }
    return fat
}

console.log(fatorial(5))
//-----------------------------------------
/*
função recursiva: quando a função chama ela mesma
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
Enão:
n! = n x (n-1)!
Exceto 1! = 1
*/
function fatorialR (n){
    if (n == 1){
        return 1
    }else{
        return n * fatorialR(n-1)
    }
}
console.log(fatorialR(5))