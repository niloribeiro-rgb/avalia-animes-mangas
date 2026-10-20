const inputPesquisar = document.querySelector(`#inputPesquisar`)
const cardsContainer = document.querySelector(`.cardsContainer`)

let card = ["ala", "algo", "outro"]

function adicionarCards() {

}

inputPesquisar.addEventListener('input', (event) => {
    pesquisarAnimes()
})


function pesquisarAnimes() {
    let textoPesquisa = inputPesquisar.value

    let posicao = []
    for (let i = 0; i < card.length; i++) {
        if (card[i].includes(textoPesquisa) == true) {
            posicao.push(i)
        }
    }
    alert("psicoes: " + posicao)
}

