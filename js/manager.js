const inputPesquisar = document.querySelector(`#inputPesquisar`)
const cardsContainer = document.querySelector(`.cardsContainer`)

let card = ["ola", "algo", "outro"]
let animes = []

async function dadosArmazedodosApi() {
    let dados
    try {
        const response = await fetch('json/cards.json')
        dados = await response.json()

        if (!response) {
            alert(`erro: ${response.status} - ${response.statusText}`)
        }

        //  alert(dados[2].nome)
        //  alert(dados.length)

    }
    catch (erro) {
        console.error(error)
    }
    return dados
}
pucharJson()
async function pucharJson() {
    animes = await dadosArmazedodosApi()
    alert(animes[1].nome)
    alert(animes[2].nome)
    alert(animes.length)
    inserirCards()

}


function inserirCards() {
    // let {dados} = dadosArmazedodosApi()
    let html = ""
    for (let i = 0; i < animes.length; i++) {
        html += `<p>${animes[i]}</p>`
        alert(animes[i])
    }
    cardsContainer.innerHTML = html
}

inputPesquisar.addEventListener('input', (event) => {
    pesquisarAnimes()
})


function pesquisarAnimes() {
    let textoPesquisa = inputPesquisar.value

    let posicao = []
    for (let i = 0; i < animes.length; i++) {
        if (animes[i].includes(textoPesquisa) == true) {
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
    for (let i = 0; i < animes.length; i++) {
        if (i == posicao[indexPosicao]) {
            indexPosicao++
            html += `<p>${animes[i]}</p>`
        }
    }

    cardsContainer.innerHTML = html

}