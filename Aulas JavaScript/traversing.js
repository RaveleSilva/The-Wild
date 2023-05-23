// const menu = document.querySelector('.menu')

// menu.outerHTML // todo o html do elemento
// menu.innerHTML // html interno
// menu.innerText // texto, sem tags

// const imagesContainer = document.querySelector('.main-img')

// imagesContainer.parentElement // retorna o pai do elemento
// imagesContainer.parentElement.parentElement // retorna o pai do pai do elemento e assim por diante
// imagesContainer.previousElementSibling // retorna o elemento anterior
// imagesContainer.nextElementSibling // retorna o próximo elemento

// imagesContainer.children // HTMLCollection com os filhos
// imagesContainer.firstChild // O primeiro filho do elemento
// imagesContainer.children[index] // O filho na posição do índice indicado
// imagesContainer.children[1] // O segundo filho do elemento
// imagesContainer.children[imagesContainer.children.length - 1] // o último filho do elemento

// const contato = document.querySelector('.contato')
// const titulo = document.querySelector('.titulo')

// contato.appendChild(imagesContainer) // move imagesContainer para o final de contato
// contato.insertBefore(imagesContainer, titulo) // move imagesContainer para antes de titulo
// contato.removeChild(titulo) // remove titulo de dentro de contato
// contato.replaceChild(imagesContainer, titulo) // substitui imagesContainer por titulo

// const novoH1 = document.createElement('h1')

// novoH1.innerText = 'Novo Título'
// novoH1.classList.add('titulo')

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const menuCopy = menu.cloneNode(true)
const copy = document.querySelector('.copy')

copy.appendChild(menuCopy)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const ddReferente = primeiroDt.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('#animais')

faq.innerHTML = animais.innerHTML







