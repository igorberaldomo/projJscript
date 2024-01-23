let num = window.document.getElementById("fnum")// pego o numero
let lista = window.document.getElementById("flista") // pega a tabela4
let res = document.querySelector('div#res')
let valores = []// inicia um array

function isNumero(n) {
    if (Number(n) < 0 || Number(n) > 100) {
        return false // avisa se passou o valor
    } else {
        return true
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}
function adicionar() {
    if (num.value.length == 0) {
        window.alert('Por favor digite o numero')
    }
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text += ` Valor ${num.value} adicionado `
        lista.appendChild(item)
     } else{
        window.alert('valor inválido ou repitido na lista')
     }
     num.value = ''
     num.focus()
}

function finalizar() {
    let i = 0
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    res.innerHTML = ''
    for (i = 0; i < valores.length; i++) {
        soma += valores[i]
        media += valores[i]
        if (maior < valores[i]) {
            maior = valores[i]
        }
        if (menor > valores[i]) {
            menor = valores[i]
        }
        // todas de numeros, maior valor, menor valor, soma dos valores, media
    }
    media = media / valores.length
    res.innerHTML += `Tem ${valores.length} numeros no array<br/>`
    res.innerHTML += `O maior numero é ${maior}<br/>`
    res.innerHTML += `O menor numero é ${menor}<br/>`
    res.innerHTML += `A soma dos numeros é ${soma}<br/>`
    res.innerHTML += `A media dos numero é ${media}<br/>`
}