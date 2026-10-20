let imagem = ["jui.png", "bomi.png", "dre.png", "love.png", "mori.png", "blu.png", "rell.png", "cria.png", "rotina.png", "higie.png"];
let texto = ["24 Volumes", "12 Volumes", "12 Volumes", "152 Capitulos","4 Volumes", "1 Temporada", "2 Temporadas", "8. 🎨 Criatividade e hobbies", "9. 📅 Organização da rotina", "10.🧴 Higiene geral"
 ];
let peq = ["Na vingança, a vítima também se torna um monstro.",
     "Até as flores mais belas florescem depois da dor.",
      "Às vezes, a liberdade também se torna uma prisão.",
    "Até um coração abandonado merece um novo amor.",
"Mesmo perdido, o amor sempre encontra o caminho de casa.", 
"Às vezes, precisamos nos perder para descobrir quem realmente somos.",
"",
"", 
"", 
""]
;
let preco = ["Juujika No Rokunin", " Temporada de Flores", "Dreaming Freedom ", "For My Abandoned Love", "A Caminho de Encontrar a Mamãe", "Blue Period", "Dica pensando na sua saúde", "Dica pensando na sua saúde", "Dica pensando na sua saúde", "Dica pra melhorar sua saúde"
];

let card [{imagem: "", }]

let i 
function criarCard() {
    let conta = document.querySelector('.conta');

    for (i = 0; i < texto.length; i++) {
        conta.innerHTML += `<div class="conteiner" id="conteiner">
            <img src="${imagem[i]}" alt="brasas">
            <p class="texto-pequeno">${texto[i]}</p>
             <p class="Preço">${preco[i]}</p>
            <p class="pequeno">${peq[i]}</p>
           

           

        </div>`
    }
}
criarCard()