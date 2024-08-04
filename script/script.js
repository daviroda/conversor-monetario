
function converter() { 
    let cotaçãodolar = window.document.getElementById('valordolar') //cotação do dolar
    let cotaçãodolarvalor = cotaçãodolar.value; //pega o valor do input
    let carteira = window.document.getElementById('valorconv') //valor que deseja converter
    let carteiravalor = carteira.value; //pega o valor do input
    let res = window.document.getElementById('res')
    let conve = carteiravalor / cotaçãodolarvalor //calculo
    let valorfinal = conve 

    res.innerHTML = `<h2>Com a cotação do Dolar em R$${cotaçãodolarvalor}...</h2>
<p>convertendo ${carteiravalor}R$ temos <strong>${valorfinal.toFixed(2)}US$ convertidos</strong></p>`
} //arrumar estilo