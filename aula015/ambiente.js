/* o vetor ,também chamado de array, é uma variavel com varios elementos,
cada elemento é composto por seu valor e por uma chave de identificação*/
/*let num0 = [5,8,4]//quando um elemento entra numa posição em que não existe, ele automaticamente cria uma nova posição e aloca o elemento.
num0[3]= 6
num0.push(7)
console.log(`Primeiro array é ${num0}`)
*/
/*ou usar o comando num0.push(n) em que num0 e o nome do array e n é o valor a ser acresentado */ 


/*let num = [5,8,2,9,3] //lembrar que o primeiro elemento é o 0
num.push(1)// é importante a order da adição
num.sort() // vai ordenar do menor pro maior
num.push(1)// ele é colocado depois do sort não vai ser ordenado
console.log(`${num}`)
console.log(`O array tem ${num.length} posições`) // o comprimento do array
console.log(`o primeiro elemento é ${num[0]}`)*/

/*let test = [4,5,6,7,8]
let i = 0
    for(i = 0; i < test.length;i++){
        console.log(test[i])
    }*/ // outra maneira de escrever é :

/*let valores = [8,1,7,4,2,9]
let test1 = 0
    for(let test1 in valores){ // para todas as posições dentro do vetor
        console.log(valores[test1])
    }*/

let find = [4,5,6,7,8]
let found = find.indexOf(7)
if(found == -1){
    console.log(`o valor não foi encontrado`)
}else{
console.log(`a variavel está na posição ${found}`)}

