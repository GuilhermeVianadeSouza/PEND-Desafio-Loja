'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

function mostrarProdutos(){
    const product = document.getElementById('card')
    const caminhoImagem = './img/'

    produtos.forEach(func =>{

    const container = document.createElement('div')
    container.classList.add('produto')
    
    const imagens = document.createElement('img')
    imagens.src = caminhoImagem + func.imagem

    const nome = document.createElement('h2')
    nome.textContent = func.nome

    const descricao = document.createElement('a')
    descricao.textContent = func.descricao

    const avaliacao = document.createElement('a')
    avaliacao.textContent = func.classificacao

    const category = document.createElement('a')
    category.textContent = func.categoria
    
    const preco = document.createElement('a')
    preco.textContent = func.preco

    container.appendChild(imagens)
    container.appendChild(nome)
    container.appendChild(descricao)
    container.appendChild(avaliacao)
    container.appendChild(category)
    container.appendChild(preco)

    product.appendChild(container)
    })

}

mostrarProdutos()