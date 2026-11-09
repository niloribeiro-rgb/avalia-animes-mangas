const inputPesquisar = document.querySelector(`#inputPesquisar`)
let cardsContainer = document.querySelector('.cardsContainer');

let card = ["ola", "algo", "outro"]
let animes = []

dadosArmazedodosApi()
async function dadosArmazedodosApi() {

    let dados
    try {
        const response = await fetch('../json/animesEMangas.json')
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

    pucharJson()
    async function pucharJson() {
        // alert(dados[1].nome)
        // alert(dados[2].nome)
        //alert(dados.length)
        inserirCards()

    }

    inserirCard()
    function inserirCard() {

        let html = ""
        for (let i = 0; i < dados.length; i++) {
            html += `<div class="conteiner" id="conteiner">`
            html += `<img src="../${dados[i].Imagem}" alt="brasas">`
            html += ` <p class="texto-pequeno">${dados[i].Volumes}</p>`
            html += `<p class="Preço">${dados[i].nome}</p>`
            html += `<p class="pequeno">${dados[i].Texto}</p> </div>`
            cardsContainer.innerHTML = html
        }

    }


    inputPesquisar.addEventListener('input', (event) => {
        pesquisarAnimes()
    })


    function pesquisarAnimes() {
        let textoPesquisa = inputPesquisar.value
        //alert(textoPesquisa)
        let posicao = []
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].nome.includes(textoPesquisa) == true) {
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
        for (let i = 0; i < dados.length; i++) {
            if (i == posicao[indexPosicao]) {
                indexPosicao++
                html += `<div class="conteiner" id="conteiner">`
                html += `<img src="../${dados[i].Imagem}" alt="brasas">`
                html += ` <p class="texto-pequeno">${dados[i].Volumes}</p>`
                html += `<p class="Preço">${dados[i].nome}</p>`
                html += `<p class="pequeno">${dados[i].Texto}</p> </div>`
                cardsContainer.innerHTML = html
            }
        }

        cardsContainer.innerHTML = html

    }
}


