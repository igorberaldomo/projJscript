function tabuada(){
    let num = window.document.getElementById("txtnum")
    let tab = window.document.getElementById("seltab")
    if(num.value.lenght == 0){
    window.alert("Por favor, digite um numero!")
    }else{ // lembrar que o else tem que envolver o resto das operações
        let n = Number(num.value)
        var c =1
        tab.innerHTML =''
        while(c <= 10){
        let item = document.createElement('option')
        item.text += `${n} x ${c} =  ${n*c}`
        item.value = `tab${c}`// indica qual item foi selecionado
        tab.appendChild(item)
        c++
        }
    }
}