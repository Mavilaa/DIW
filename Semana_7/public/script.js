var nome = prompt("Qual o seu nome?");


while (isNaN(quantidade_de_despesas) && isNaN(renda)) {
    var quantidade_de_despesas = prompt("Qual a sua quantidade de despesas");
    var renda = prompt("Qual a sua renda mensal?");
    renda = Number(renda);
    quantidade_de_despesas = Number(quantidade_de_despesas);
    if (quantidade_de_despesas < 1) {

        quantidade_de_despesas = 1;

    }
    else if (quantidade_de_despesas > 5) {

        quantidade_de_despesas = 5;

    }
}



    while (isNaN(quantidade_de_despesas) && isNaN(renda)) {
        var quantidade_de_despesas = prompt("Qual a sua quantidade de despesas");
        var renda = parseFloat(prompt("Qual a sua renda mensal?"));
        quantidade_de_despesas = Number(quantidade_de_despesas);
        if (quantidade_de_despesas < 1) {
    
            quantidade_de_despesas = 1;
    
        }
        else if (quantidade_de_despesas > 5) {
    
            quantidade_de_despesas = 5;
    
        }
    }
    
let total = 0;

for (let i = 0; i < quantidade_de_despesas; i++) { 

    var despesa = parseFloat(prompt("Digite sua despesa"));

    total += despesa;

}

console.log(total);
let sobra = 0;

if (total > renda) {
    console.log("Você gastou mais do que ganhou");
    alert("Você gastou mais do que ganhou");
}
else { 
    
    sobra = parseFloat(renda - total);
    if (sobra >= renda * 0.3) {
        console.log("Ótimo: boa margem de sobra");
        alert("Ótimo: boa margem de sobra");
    }
    else { 
        console.log("Ok: dá para melhorar a sobra.");
        alert("Ok: dá para melhorar a sobra.");
    }
}



alert("Nome:" + nome);
console.log(nome);
alert("Renda:" + renda);
console.log(renda);
alert("Total:" + total);
console.log(total);
alert("Sobra:" + sobra);
console.log(sobra);