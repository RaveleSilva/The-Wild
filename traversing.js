const menu = document.querySelector('.menu')

menu.outerHTML // todo o html do elemento
menu.innerHTML // html interno
menu.innerText // texto, sem tags

const imagesContainer = document.querySelector('.main-img')

imagesContainer.parentElement // retorna o pai do elemento
imagesContainer.parentElement.parentElement // retorna o pai do pai do elemento e assim por diante
imagesContainer.previousElementSibling // retorna o elemento anterior
imagesContainer.nextElementSibling // retorna o próximo elemento

imagesContainer.children // HTMLCollection com os filhos
imagesContainer.firstChild // O primeiro filho do elemento
imagesContainer.children[index] // O filho na posição do índice indicado
imagesContainer.children[1] // O segundo filho do elemento
imagesContainer.children[imagesContainer.children.length - 1] // o último filho do elemento



