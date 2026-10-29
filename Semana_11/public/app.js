const data = {
    "destinos": [
        {
            "id": 1,
            "nome_local": "Coliseu",
            "cidade": "Roma",
            "distancia_capital": 0,
            "preco_passagem": 0,
            "informacoes_local": "Anfiteatro do século I, o maior já construído pelo Império Romano. Recebia até 50 mil espectadores em lutas de gladiadores e espetáculos públicos.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/960px-Colosseo_2020.jpg",
            "categoria": "Monumento",
            "hora_funcionamento": "08:30 - 19:15",
            "destaque": true
        },
        {
            "id": 2,
            "nome_local": "Torre de Pisa",
            "cidade": "Pisa",
            "distancia_capital": 350,
            "preco_passagem": 35,
            "informacoes_local": "Campanário do século XII com quase 60 metros de altura, famoso pela inclinação causada pelo solo instável. Fica na Piazza dei Miracoli.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Italy_-_Pisa_-_Leaning_Tower.jpg/960px-Italy_-_Pisa_-_Leaning_Tower.jpg",
            "categoria": "Monumento",
            "hora_funcionamento": "09:00 - 20:00",
            "destaque": false
        },
        {
            "id": 3,
            "nome_local": "Galleria degli Uffizi",
            "cidade": "Florença",
            "distancia_capital": 275,
            "preco_passagem": 45,
            "informacoes_local": "Um dos museus de arte mais importantes do mundo, com obras de Botticelli, Leonardo da Vinci, Michelangelo e Rafael.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Florence%2C_Italy_-_panoramio_%28125%29.jpg/960px-Florence%2C_Italy_-_panoramio_%28125%29.jpg",
            "categoria": "Museu",
            "hora_funcionamento": "08:15 - 18:30 (fechado às segundas)",
            "destaque": true
        },
        {
            "id": 4,
            "nome_local": "Basílica de São Marcos",
            "cidade": "Veneza",
            "distancia_capital": 530,
            "preco_passagem": 70,
            "informacoes_local": "Catedral de estilo bizantino na Praça São Marcos, revestida por mosaicos dourados. É o cartão-postal de Veneza.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/960px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg",
            "categoria": "Religioso",
            "hora_funcionamento": "09:30 - 17:15",
            "destaque": false
        },
        {
            "id": 5,
            "nome_local": "Duomo di Milano",
            "cidade": "Milão",
            "distancia_capital": 575,
            "preco_passagem": 75,
            "informacoes_local": "Catedral gótica cuja construção levou quase seis séculos. Seus terraços oferecem vista panorâmica da cidade entre agulhas de mármore.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Milan_Cathedral_from_Piazza_del_Duomo.jpg/960px-Milan_Cathedral_from_Piazza_del_Duomo.jpg",
            "categoria": "Religioso",
            "hora_funcionamento": "09:00 - 19:00",
            "destaque": false
        },
        {
            "id": 6,
            "nome_local": "Parque Arqueológico de Pompeia",
            "cidade": "Pompeia",
            "distancia_capital": 240,
            "preco_passagem": 45,
            "informacoes_local": "Cidade romana soterrada pela erupção do Vesúvio em 79 d.C. Ruas, casas e afrescos ficaram preservados sob as cinzas.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Aerial_image_of_Pompeii_and_Mount_Vesuvius_%28view_from_the_southeast%29.jpg/960px-Aerial_image_of_Pompeii_and_Mount_Vesuvius_%28view_from_the_southeast%29.jpg",
            "categoria": "Sítio Arqueológico",
            "hora_funcionamento": "09:00 - 19:00",
            "destaque": false
        },
        {
            "id": 7,
            "nome_local": "Cinque Terre",
            "cidade": "Riomaggiore",
            "distancia_capital": 420,
            "preco_passagem": 50,
            "informacoes_local": "Cinco vilarejos coloridos à beira-mar na Ligúria, ligados por trilhas costeiras e por trem. Patrimônio Mundial da UNESCO.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Riomaggiore_From_Ferry_Cinque_Terre_Italy_Sep23_A7C_07414.jpg/960px-Riomaggiore_From_Ferry_Cinque_Terre_Italy_Sep23_A7C_07414.jpg",
            "categoria": "Natureza",
            "hora_funcionamento": "Acesso livre 24h",
            "destaque": true
        },
        {
            "id": 8,
            "nome_local": "Arena di Verona",
            "cidade": "Verona",
            "distancia_capital": 500,
            "preco_passagem": 60,
            "informacoes_local": "Anfiteatro romano do século I ainda em uso. No verão recebe um dos festivais de ópera ao ar livre mais famosos do mundo.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Arena-XE3F2406a.jpg/960px-Arena-XE3F2406a.jpg",
            "categoria": "Monumento",
            "hora_funcionamento": "09:00 - 19:00",
            "destaque": false
        },
        {
            "id": 9,
            "nome_local": "Piazza del Campo",
            "cidade": "Siena",
            "distancia_capital": 230,
            "preco_passagem": 30,
            "informacoes_local": "Praça medieval em formato de concha, palco da tradicional corrida de cavalos Palio di Siena, que acontece duas vezes por ano.",
            "imagem": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Siena5.jpg",
            "categoria": "Praça",
            "hora_funcionamento": "Acesso livre 24h",
            "destaque": false
        },
        {
            "id": 10,
            "nome_local": "Lago di Como",
            "cidade": "Bellagio",
            "distancia_capital": 630,
            "preco_passagem": 85,
            "informacoes_local": "Lago alpino cercado por vilas históricas e montanhas. Bellagio, a 'pérola do lago', é ponto de partida para passeios de barco.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/960px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg",
            "categoria": "Natureza",
            "hora_funcionamento": "Acesso livre 24h",
            "destaque": true
        }
    ],
    "atracoes": [
        {
            "id": 1,
            "destinoId": 1,
            "nome": "Arena e hipogeu",
            "descricao": "Os corredores subterrâneos onde ficavam gladiadores e animais antes de entrar na arena.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Colosseum_hypogeum.JPG/960px-Colosseum_hypogeum.JPG"
        },
        {
            "id": 2,
            "destinoId": 1,
            "nome": "Arco de Constantino",
            "descricao": "Arco triunfal de 315 d.C., ao lado do Coliseu, construído para celebrar a vitória de Constantino.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Arch_of_Constantine_%28Rome%29_-_South_side%2C_from_Via_triumphalis.jpg/960px-Arch_of_Constantine_%28Rome%29_-_South_side%2C_from_Via_triumphalis.jpg"
        },
        {
            "id": 3,
            "destinoId": 1,
            "nome": "Fórum Romano",
            "descricao": "Ruínas de templos e prédios públicos que formavam o centro da vida política da Roma antiga.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/960px-Foro_Romano_Musei_Capitolini_Roma.jpg"
        },
        {
            "id": 4,
            "destinoId": 2,
            "nome": "Catedral de Pisa",
            "descricao": "Catedral românica do século XI, com fachada de mármore branco, na mesma praça da torre.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Pisa_-_Cattedrale_da_Battistero_02.jpg/960px-Pisa_-_Cattedrale_da_Battistero_02.jpg"
        },
        {
            "id": 5,
            "destinoId": 2,
            "nome": "Batistério de Pisa",
            "descricao": "O maior batistério da Itália, famoso pela acústica do seu interior.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/CampodeiMiracoliPisa.jpg/960px-CampodeiMiracoliPisa.jpg"
        },
        {
            "id": 6,
            "destinoId": 2,
            "nome": "Camposanto Monumentale",
            "descricao": "Cemitério monumental cercado por galerias com afrescos medievais.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Camposanto_Pisa_100.JPG/960px-Camposanto_Pisa_100.JPG"
        },
        {
            "id": 7,
            "destinoId": 3,
            "nome": "O Nascimento de Vênus",
            "descricao": "Pintura de Sandro Botticelli, uma das obras mais conhecidas do Renascimento.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/960px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
        },
        {
            "id": 8,
            "destinoId": 3,
            "nome": "Anunciação",
            "descricao": "Obra de juventude de Leonardo da Vinci, exposta na galeria.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Annunciation_%28Leonardo_c._1472%E2%80%931476%29.jpg/960px-Annunciation_%28Leonardo_c._1472%E2%80%931476%29.jpg"
        },
        {
            "id": 9,
            "destinoId": 3,
            "nome": "Corredor Vasariano",
            "descricao": "Passagem elevada que liga os Uffizi ao Palazzo Pitti, passando sobre a Ponte Vecchio.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/The_Vasari_Corridor_Bridge%2C_Via_della_Ninna%2C_Florence.jpg/960px-The_Vasari_Corridor_Bridge%2C_Via_della_Ninna%2C_Florence.jpg"
        },
        {
            "id": 10,
            "destinoId": 4,
            "nome": "Pala d'Oro",
            "descricao": "Retábulo de ouro decorado com esmaltes e pedras preciosas, atrás do altar-mor.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Venise%2C_Pala_d%27Oro_expos%C3%A9e.JPG/960px-Venise%2C_Pala_d%27Oro_expos%C3%A9e.JPG"
        },
        {
            "id": 11,
            "destinoId": 4,
            "nome": "Cavalos de São Marcos",
            "descricao": "Quadriga de bronze; as peças originais ficam no museu da basílica.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Horses_of_Basilica_San_Marco_bright.jpg/960px-Horses_of_Basilica_San_Marco_bright.jpg"
        },
        {
            "id": 12,
            "destinoId": 4,
            "nome": "Campanário de São Marcos",
            "descricao": "Torre de quase 100 metros com vista para a praça e a lagoa de Veneza.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Campanile_of_St._Mark%27s_Basilica_-_remote_view.jpg/960px-Campanile_of_St._Mark%27s_Basilica_-_remote_view.jpg"
        },
        {
            "id": 13,
            "destinoId": 5,
            "nome": "Terraços do Duomo",
            "descricao": "Caminho pelo telhado da catedral, entre pináculos e estátuas de mármore.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/View_west_along_Duomo_roof%2C_Milan.jpg/960px-View_west_along_Duomo_roof%2C_Milan.jpg"
        },
        {
            "id": 14,
            "destinoId": 5,
            "nome": "Madonnina",
            "descricao": "Estátua dourada no pináculo mais alto do Duomo, símbolo de Milão.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Madonnina_%28statue%29_Virgin_Mary_atop_Milan_Cathedral_in_Italy.jpg/960px-Madonnina_%28statue%29_Virgin_Mary_atop_Milan_Cathedral_in_Italy.jpg"
        },
        {
            "id": 15,
            "destinoId": 5,
            "nome": "Galleria Vittorio Emanuele II",
            "descricao": "Galeria comercial do século XIX, coberta por vidro e ferro, ao lado da catedral.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg"
        },
        {
            "id": 16,
            "destinoId": 6,
            "nome": "Fórum de Pompeia",
            "descricao": "Praça central da cidade, cercada por templos e prédios públicos.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Building_of_Eumachia%2C_Pompeii_Forum%2C_Entrance.jpg/960px-Building_of_Eumachia%2C_Pompeii_Forum%2C_Entrance.jpg"
        },
        {
            "id": 17,
            "destinoId": 6,
            "nome": "Anfiteatro de Pompeia",
            "descricao": "Um dos anfiteatros romanos de pedra mais antigos que se conhecem.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Pompeji_-_Arena.jpg/960px-Pompeji_-_Arena.jpg"
        },
        {
            "id": 18,
            "destinoId": 6,
            "nome": "Casa do Fauno",
            "descricao": "Grande casa romana, com a estátua do fauno dançante e o mosaico de Alexandre.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/House_of_the_Faun_%28Pompeii%29.jpg/960px-House_of_the_Faun_%28Pompeii%29.jpg"
        },
        {
            "id": 19,
            "destinoId": 7,
            "nome": "Via dell'Amore",
            "descricao": "Trilha à beira-mar entre Riomaggiore e Manarola.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Via_dell%27Amore-Manarola-2390.JPG/960px-Via_dell%27Amore-Manarola-2390.JPG"
        },
        {
            "id": 20,
            "destinoId": 7,
            "nome": "Manarola",
            "descricao": "Vilarejo de casas coloridas sobre as rochas, cercado por vinhedos.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Manarola_NW_Cinque_Terre_Sep23_A7C_07233.jpg/960px-Manarola_NW_Cinque_Terre_Sep23_A7C_07233.jpg"
        },
        {
            "id": 21,
            "destinoId": 7,
            "nome": "Vernazza",
            "descricao": "Vilarejo com um pequeno porto e uma torre de vigia medieval.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg/960px-Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg"
        },
        {
            "id": 22,
            "destinoId": 8,
            "nome": "Festival de Ópera",
            "descricao": "Temporada de ópera ao ar livre que acontece na Arena todo verão.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Monumental_stage_prop_from_the_opera_Aida_-_02.jpg/960px-Monumental_stage_prop_from_the_opera_Aida_-_02.jpg"
        },
        {
            "id": 23,
            "destinoId": 8,
            "nome": "Casa de Julieta",
            "descricao": "Casa medieval com o balcão ligado à história de Romeu e Julieta.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Casa_di_Giulietta-Verona.jpg/960px-Casa_di_Giulietta-Verona.jpg"
        },
        {
            "id": 24,
            "destinoId": 8,
            "nome": "Piazza Bra",
            "descricao": "A maior praça de Verona, onde fica a Arena.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Piazza_Bra%2C_Verona.jpg/960px-Piazza_Bra%2C_Verona.jpg"
        },
        {
            "id": 25,
            "destinoId": 9,
            "nome": "Torre del Mangia",
            "descricao": "Torre do século XIV ao lado do Palazzo Pubblico, com vista para a cidade.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Torre_del_Mangia_in_Siena%2C_Italy.jpg/960px-Torre_del_Mangia_in_Siena%2C_Italy.jpg"
        },
        {
            "id": 26,
            "destinoId": 9,
            "nome": "Palazzo Pubblico",
            "descricao": "Palácio medieval que é a sede da prefeitura de Siena.",
            "imagem": "https://upload.wikimedia.org/wikipedia/commons/9/96/552SienaPalPubblico.JPG"
        },
        {
            "id": 27,
            "destinoId": 9,
            "nome": "Fonte Gaia",
            "descricao": "Fonte de mármore no alto da praça.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Siena_Piazza_del_Campo_Fonte_Gaia_1.jpg/960px-Siena_Piazza_del_Campo_Fonte_Gaia_1.jpg"
        },
        {
            "id": 28,
            "destinoId": 10,
            "nome": "Villa Melzi",
            "descricao": "Vila com jardins à beira do lago, em Bellagio.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG/960px-Bellagio_-_Villa_Melzi_d%27Eril_-_2023-09-01_00-15-09_003.JPG"
        },
        {
            "id": 29,
            "destinoId": 10,
            "nome": "Villa Carlotta",
            "descricao": "Vila em Tremezzo com jardim botânico e coleção de arte.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Tremezzo_-_Villa_Carlotta.jpg/960px-Tremezzo_-_Villa_Carlotta.jpg"
        },
        {
            "id": 30,
            "destinoId": 10,
            "nome": "Passeio de barco",
            "descricao": "Barcos ligam Bellagio a Varenna e Menaggio pelo lago.",
            "imagem": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Bellagio_from_Lake_Como_ferry_to_north.jpg/960px-Bellagio_from_Lake_Como_ferry_to_north.jpg"
        }
    ],
    "aluno": {
        "nome": "Gustavo Martins de Ávila",
        "matricula": "912341",
        "curso": "Ciência da Computação",
        "turma": "Manhã",
        "redes": [
            {
                "nome": "GitHub",
                "link": "https://github.com/Mavilaa",
                "icone": "bi-github"
            }
        ],
        "sobre": "Site feito para o Trabalho Prático 1 de Desenvolvimento de Interfaces Web. Ele reúne destinos turísticos da Itália, com as informações de cada lugar, o preço da passagem de trem saindo de Roma e as principais atrações para visitar."
    }
};

function formatPrice(preco_passagem) {
    if (preco_passagem === 0) {
        return 'Sem passagem (fica em Roma)';
    }
    return `€ ${preco_passagem.toFixed(2)}`;
}

function formatDistancia(distancia_capital) {
    if (distancia_capital === 0) {
        return 'Fica na capital';
    }
    return `${distancia_capital} km de Roma`;
}

function buscarDestino(id) {
    return data.destinos.find(destino => destino.id == id);
}

function buscarAtracoes(destinoId) {
    return data.atracoes.filter(atracao => atracao.destinoId == destinoId);
}

function renderDestaques() {
    const indicadores = document.getElementById('carrossel-indicadores');
    const itens = document.getElementById('carrossel-itens');
    const destaques = data.destinos.filter(destino => destino.destaque);

    let htmlIndicadores = '';
    let htmlItens = '';

    destaques.forEach((destino, i) => {
        let ativo = '';
        if (i === 0) ativo = 'active';

        htmlIndicadores += `<button type="button" data-bs-target="#carrossel" data-bs-slide-to="${i}" class="${ativo}"></button>`;

        htmlItens += `
            <div class="carousel-item ${ativo}">
                <a href="detalhes.html?id=${destino.id}">
                    <img src="${destino.imagem}" class="d-block w-100 carrossel-img" alt="${destino.nome_local}">
                </a>
                <div class="carrossel-legenda">
                    <h3><a href="detalhes.html?id=${destino.id}">${destino.nome_local}</a></h3>
                    <p>${destino.cidade} - ${destino.informacoes_local}</p>
                </div>
            </div>`;
    });

    indicadores.innerHTML = htmlIndicadores;
    itens.innerHTML = htmlItens;
}

function createDestinoCard(destino) {
    const coluna = document.createElement('div');
    coluna.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'mb-4');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100');
    card.setAttribute('data-id', destino.id);

    const link = document.createElement('a');
    link.setAttribute('href', `detalhes.html?id=${destino.id}`);

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src', destino.imagem);
    img.setAttribute('alt', destino.nome_local);
    link.appendChild(img);

    const corpo = document.createElement('div');
    corpo.classList.add('card-body');

    const titulo = document.createElement('h3');
    titulo.classList.add('card-title');
    titulo.innerHTML = `<a href="detalhes.html?id=${destino.id}">${destino.nome_local}</a>`;

    const cidade = document.createElement('p');
    cidade.classList.add('card-cidade');
    cidade.textContent = `${destino.cidade} - ${destino.categoria}`;

    const preco = document.createElement('p');
    preco.classList.add('card-preco');
    preco.textContent = formatPrice(destino.preco_passagem);

    corpo.appendChild(titulo);
    corpo.appendChild(cidade);
    corpo.appendChild(preco);

    card.appendChild(link);
    card.appendChild(corpo);
    coluna.appendChild(card);

    return coluna;
}

function renderDestinos(destinos) {
    const lista = document.getElementById('lista-destinos');
    lista.innerHTML = '';

    destinos.forEach(destino => {
        lista.appendChild(createDestinoCard(destino));
    });
}

function renderAluno() {
    const aluno = data.aluno;

    document.getElementById('aluno-sobre').textContent = aluno.sobre;
    let redes = '';
    aluno.redes.forEach(rede => {
        redes += `<a href="${rede.link}" target="_blank" title="${rede.nome}"><i class="bi ${rede.icone}"></i></a>`;
    });

    document.getElementById('aluno-autoria').innerHTML = `
        <div class="autoria-pessoa">
            <i class="bi bi-person-circle autoria-icone"></i>
            <div>
                <p><strong>Aluno:</strong> ${aluno.nome}</p>
                <p><strong>Matrícula:</strong> ${aluno.matricula}</p>
                <p><strong>Curso:</strong> ${aluno.curso}</p>
                <p><strong>Turma:</strong> ${aluno.turma}</p>
            </div>
        </div>
        <p class="redes"><strong>Redes sociais:</strong> ${redes}</p>`;
}

function renderDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const destino = buscarDestino(id);

    const geral = document.getElementById('detalhes-gerais');
    const fotos = document.getElementById('lista-atracoes');

    if (!destino) {
        geral.innerHTML = '<p>Destino não encontrado. <a href="index.html">Voltar para a página inicial</a></p>';
        document.getElementById('secao-atracoes').style.display = 'none';
        return;
    }

    document.title = `${destino.nome_local} - Destinos da Itália`;

    geral.innerHTML = `
        <div class="col-12 col-lg-6 mb-3">
            <img src="${destino.imagem}" class="img-fluid detalhe-img" alt="${destino.nome_local}">
        </div>
        <div class="col-12 col-lg-6">
            <span class="badge text-bg-success mb-2">${destino.categoria}</span>
            <h2 class="detalhe-titulo">${destino.nome_local}</h2>
            <p class="detalhe-cidade">${destino.cidade}, Itália</p>
            <p>${destino.informacoes_local}</p>
            <ul class="ficha">
                <li><strong>Horário:</strong> ${destino.hora_funcionamento}</li>
                <li><strong>Distância:</strong> ${formatDistancia(destino.distancia_capital)}</li>
                <li><strong>Passagem de trem:</strong> ${formatPrice(destino.preco_passagem)}</li>
                <li><strong>Atrações cadastradas:</strong> ${buscarAtracoes(destino.id).length}</li>
            </ul>
        </div>`;

    let html = '';
    buscarAtracoes(destino.id).forEach(atracao => {
        html += `
            <div class="card foto-atracao">
                <img src="${atracao.imagem}" class="card-img-top" alt="${atracao.nome}">
                <div class="card-body">
                    <h4 class="card-title">${atracao.nome}</h4>
                    <p class="card-text">${atracao.descricao}</p>
                </div>
            </div>`;
    });
    fotos.innerHTML = html;
}
function rolarGaleria(direcao) {
    const galeria = document.getElementById('lista-atracoes');
    galeria.scrollLeft = galeria.scrollLeft + direcao * 300;
}

function mostrarSetasGaleria() {
    const galeria = document.getElementById('lista-atracoes');
    let visibilidade = 'hidden';
    if (galeria.scrollWidth > galeria.clientWidth) {
        visibilidade = 'visible';
    }
    document.getElementById('btnGaleriaAnterior').style.visibility = visibilidade;
    document.getElementById('btnGaleriaProxima').style.visibility = visibilidade;
}

if (document.getElementById('carrossel')) {
    renderDestaques();
    renderDestinos(data.destinos);
    renderAluno();
}

if (document.getElementById('detalhes-gerais')) {
    renderDetalhes();

    document.getElementById('btnGaleriaAnterior').addEventListener('click', function () {
        rolarGaleria(-1);
    });
    document.getElementById('btnGaleriaProxima').addEventListener('click', function () {
        rolarGaleria(1);
    });

    mostrarSetasGaleria();
    window.addEventListener('resize', mostrarSetasGaleria);
}
