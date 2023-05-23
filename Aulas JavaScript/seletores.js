const animais = document.getElementById('animais')
console.log(animais)
const titulo = document.querySelector('h1')

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const mainImages = document.querySelectorAll("[src^='img/imagem'")
console.log(mainImages)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#")
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animal-desc h2')
console.log(firstH2)

// Selecione o último p do site
const paragraph = document.getElementsByTagName('p')
const paragraphArray = Array.from(paragraph)
let ultimoP = paragraphArray[--paragraphArray.length]