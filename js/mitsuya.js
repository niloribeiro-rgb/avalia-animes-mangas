let imagem = ["img/jui.png", "img/bomi.png", "img/dre.png", "img/love.png", "img/mori.png", "img/blu.png", "img/dii.png", "img/juu.png", "img/mob.png", "img/kimi.png"];
let texto = ["24 Volumes", "12 Volumes", "12 Volumes", "152 Capitulos","4 Volumes", "1 Temporada", "2 Temporadas", "3 Temporadas", "3 Temporadas", "3 Temporadas"
 ];
let peq = ["Na vingança, a vítima também se torna um monstro.",
     "Até as flores mais belas florescem depois da dor.",
      "Às vezes, a liberdade também se torna uma prisão.",
    "Até um coração abandonado merece um novo amor.",
"Mesmo perdido, o amor sempre encontra o caminho de casa.", 
"Às vezes, precisamos nos perder para descobrir quem realmente somos.",
"Entre venenos e segredos, a curiosidade revela a verdade.",
"Às vezes, lutar contra maldições é mais fácil do que enfrentar a própria dor.", 
"Ser forte não significa esconder o que sentimos, mas aprender a aceitar quem somos.", 
"Ser forte não significa esconder o que sentimos, mas aprender a aceitar quem somos."]
;
let preco = ["Juujika No Rokunin", " Temporada de Flores", "Dreaming Freedom ", "For My Abandoned Love", "A Caminho de Encontrar a Mamãe", "Blue Period", "Diários de uma Apotecária", "Jujutsu Kaisen", "Mob Psycho 100", "Kimi ni Todoke"
];



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