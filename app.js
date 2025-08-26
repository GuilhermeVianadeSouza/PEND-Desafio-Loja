'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

//Função de criação e mostragem do card Promorcional
// function cardPromorcional(){
//     const promorcional = document.getElementById('promocional')
    
//     const tela = document.createElement('div')
//     container.classList.add('promocional')

//     tela.appendChild()
// }

function converterClassificacao(classificacao){
    const estrela = {
        1: "★☆☆☆☆",
      2: "★★☆☆☆",
      3: "★★★☆☆",
      4: "★★★★☆",
      5: "★★★★★"
        }
    return estrela[classificacao];
}

//Função para mostrar cada um dos card
function mostrarProdutos(){
    const product = document.getElementById('card')
    //Criado uma variavel constante para que eu consiga utilizar o caminho da imagem sem alterar no JSON
    const caminhoImagem = './img/' //boa prática?

    produtos.forEach(func =>{

    const container = document.createElement('div')
    container.classList.add('produto')
    
    const imagens = document.createElement('img')
    imagens.src = caminhoImagem + func.imagem

    const nome = document.createElement('h2')
    nome.textContent = func.nome

    const descricao = document.createElement('a')
    descricao.textContent = func.descricao

    const avaliacao = document.createElement('p')
    avaliacao.textContent = converterClassificacao(func.classificacao)

    const category = document.createElement('h3')
    category.textContent = func.categoria
    
    const preco = document.createElement('p2')
    preco.textContent = "R$:" + func.preco

    container.appendChild(imagens)
    container.appendChild(nome)
    container.appendChild(descricao)
    container.appendChild(avaliacao)
    container.appendChild(category)
    container.appendChild(preco)

    product.appendChild(container)
    })
}

// cardPromocional()
converterClassificacao()
mostrarProdutos()
