const inputPesquisar = document.querySelector(`#inputPesquisar`)
const cardsContainer = document.querySelector(`.cardsContainer`)

let card = ["ola", "algo", "outro"]

let { dadoscopiado } = dadosArmazedodosApi()
// alert(dados[0])
async function dadosArmazedodosApi() {
    let dados
    try {
        const response = await fetch('json/cards.json')
         dados = await response.json()

        if (!response) {
            alert(`erro: ${response.status} - ${response.statusText}`)
        }
        alert(dados[2].nome)
        alert(dados.length)

        
    }
    catch (erro) {
        console.error(error)
    }
    dadoscopiado = await dados
    return {dadoscopiado}
}

inserirCards()
function inserirCards() {
    // let {dados} = dadosArmazedodosApi()
    let html = ""
    for (let i = 0; i < card.length; i++) {
        html += `<p>${card[i]}</p>`
    }
    cardsContainer.innerHTML = html
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
    // alert("psicoes: " + posicao)
    inserirCardspesquisado(posicao)
}

function inserirCardspesquisado(posicao) {

    if (posicao == "") {
        cardsContainer.innerHTML = `<p>Nenhum encontrado</p>`
        return
    }

    let html = ""
    let indexPosicao = 0
    for (let i = 0; i < card.length; i++) {
        if (i == posicao[indexPosicao]) {
            indexPosicao++
            html += `<p>${card[i]}</p>`
        }
    }

    cardsContainer.innerHTML = html

}