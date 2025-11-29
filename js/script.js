document.getElementById("formsalario").addEventListener("submit",function(event){
    event.preventDefault()
    var salario=document.getElementById("salario").value
    document.getElementById("outputsalario").innerHTML=salario
    document.getElementById("formsalario").reset()
})

document.getElementById("formdespesas").addEventListener("submit",function(event){
    event.preventDefault()
    var data=document.getElementById("datadespesa").value
    var nome=document.getElementById("nomedespesa").value 
    var valor=document.getElementById("valordespesa").value 
    var despesa={data:data, nome:nome, valor:valor}
    var lista_despesas = JSON.parse(localStorage.getItem('listagem')) || []

    lista_despesas.push(despesa)
    localStorage.setItem('listagem',JSON.stringify(lista_despesas))
    document.getElementById('formdespesas').reset()
    exibir_despesas()
})

function exibir_despesas(){
    var lista_despesas=JSON.parse(localStorage.getItem('listagem'))||[]
    var output=document.getElementById('output')

    output.innerHTML=''
    for(let i=0;i<lista_despesas.length;i++){
        let li=document.createElement('li')
        li.textContent='Data: '+lista_despesas[i].data+' | Nome: '+lista_despesas[i].nome+' | Valor: '+lista_despesas[i].valor
        output.appendChild(li)
    }
}

function novomes(){
    lista = document.getElementById("output")
    salario = document.getElementById("outputsalario")

    if(!lista.lastElementChild && salario.textContent == ""){
        alert("Não há o que ser resetado")
    }
    else{
    document.getElementById("outputsalario").innerHTML=""
    while(lista.lastElementChild){
    lista.lastElementChild.remove()
    }
    }
}