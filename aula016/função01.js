/* funções ~sao ações executadas assim que são chamadas ou e decorrência de algum evento
função ação(parametro){
    retorno resultado
}*/

function parimpar(n){
    if(n %2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(' o numero é ' + parimpar(22))
console.log(' o numero é ' + parimpar(11))