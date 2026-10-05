const catalogo = [
    { id: 1, titulo: "Matrix", tipo: "filme", ano: 1999, generos: ["ação", "ficção científica"], nota: 9, assistido: true },
    { id: 2, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["drama", "crime"], nota: 10, assistido: false },
    { id: 3, titulo: "Interestelar", tipo: "filme", ano: 2014, generos: ["ficção científica", "drama"], nota: 9, assistido: true },
    { id: 4, titulo: "The Office", tipo: "serie", ano: 2005, generos: ["comédia"], nota: 8, assistido: true },
    { id: 5, titulo: "Duna", tipo: "filme", ano: 2021, generos: ["aventura", "ficção científica"], nota: 8, assistido: false },
    { id: 6, titulo: "Dark", tipo: "serie", ano: 2017, generos: ["suspense", "mistério"], nota: 9, assistido: false }
];


console.log(catalogo);

console.log(`Título do primeiro item: ${catalogo[0].titulo}`);
console.log(`Ano do último item: ${catalogo[catalogo.length - 1].ano}`);

const segundoGenero = catalogo[2].generos[1];
if (segundoGenero) {
    console.log(`Segundo gênero do terceiro item: ${segundoGenero}`);
} else {
    console.log("O terceiro item não possui um segundo gênero.");
}


catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosemcaixaalta = catalogo.map(item => item.titulo.toUpperCase());

console.log(titulosemcaixaalta);


const naoassistido = catalogo.filter(item => item.assistido === false);
console.log(`Itens não assistidos: ${naoassistido.length}`);



const maiorque9 = catalogo.find(item => item.nota >= 9);
if (maiorque9) {
    console.log(`Primeiro com nota >= 9: ${maiorque9.titulo} (nota ${maiorque9.nota})`);
}
else { 
    console.log("Nenhum item maior que 9");    
}



const somaNotas = catalogo.reduce((soma, item) => soma + item.nota, 0);

const media = somaNotas / catalogo.length;
console.log(`Media geral: ${media.toFixed(2)}`);


const assistido = catalogo.filter(item => item.assistido);
const somaAssistido = assistido.reduce((soma, item) => soma + item.nota, 0);
const mediaAssistido = assistido.length > 0 ? somaAssistido / assistido.length : 0;

console.log(`Média dos assistidos: ${mediaAssistido.toFixed(2)}`);




const maior = catalogo.some(item=> item.ano < 2000);

const pelomenos1genero = catalogo.every(item => item.genero >= 1);

console.log(maior);
console.log(pelomenos1genero);


const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;

const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;

const top3 = [...catalogo].sort((a, b) => b.nota - a.nota).slice(0, 3);

//serve para inserir aonde tem o id output

document.getElementById("output").innerHTML = `

    <p>Total de itens: ${catalogo.length}</p>
    <p>Filmes: ${qtdFilmes} | Séries: ${qtdSeries}</p>
    <p>Não assistidos: ${naoassistido.length}</p>
    <p>Média geral: ${media.toFixed(2)}</p>
    <h3>Top 3</h3>
    <ol>
        ${top3.map(item => `<li>${item.titulo} — ${item.nota}</li>`).join("")}
    </ol>
`;