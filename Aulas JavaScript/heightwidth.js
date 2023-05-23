// const section = document.querySelector('.main-img')

// section.clientHeight // height + padding
// section.offsetHeight // height + padding + border
// section.offsetWidth // width + padding + border
// section.scrollHeight // height total, mesmo dentro de scroll
// section.offsetLeft // Distancia entre o elemento e a borda esquerda da janela
// section.offsetRight // Distancia entre o elemento e a borda direita da janela
// section.offsetTop // Distancia entre o elemento e a borda de cima da janela
// section.offsetBottom // Distancia entre o elemento e a borda de baixo da janela
// section.getBoundingClientRect() // retorna um objeto com dados sobre a posição do mesmo dentro da janela

// window.innerWidth // largura atual da janela
// window.outerWidth // largura total da janela contando elementos externos(ex:dev tootl)
// window.innerHeight // altura atual da janela
// window.outerHeight // altura da janela contando as barras de navegação

// window.pageXOffset // distancia total do scroll horizontal
// window.pageYOffset // distancia total do scroll vertical

// window.matchMedia('(max-width: 600px)').matches // retorna true se a largura da tela tiver no maximo 600 pixels e false se tiver mais

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img')
console.log(primeiraImagem.offsetTop)

// Retorne a soma da largura de todas as imagens
window.onload = function(){
    function somaLarguraImagens(){
        const imagens = document.querySelectorAll('img')
        let larguraTotal = 0

        imagens.forEach((item) =>{
            larguraTotal += item.offsetWidth
        })

        console.log(larguraTotal)
    }

    somaLarguraImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach((item) =>{
    let resultado
    let larguraLink = item.offsetWidth
    let alturaLink = item.offsetHeight

    if(larguraLink < 48 || alturaLink < 48){
        console.log(item, 'Não possui boa acessibilidade')
    }else{
        console.log(item, 'Possui boa acessibilidade')
    }
})



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu')
const smallSizeWindow = window.matchMedia('(max-width: 720px)').matches

if(smallSizeWindow){
    menu.classList.add('menu-mobile')
}