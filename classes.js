const menu = document.querySelector('.menu')

menu.className // string
menu.classList // lista de classes
menu.classList.add('ativo') // adiciona a classe ativo ao elemento
menu.classList.add('ativo', 'mobile') // é possível adicionar mais de uma classe ao mesmo tempo
menu.classList.remove('ativo') // remove a classe ativo
menu.classList.toggle('ativo') // adiciona ou remove a classe ativo a depender se o elemento possui a classe ou não
menu.classList.contains('ativo') // verifica se o elemento possui uma classe com nome ativo - retorna true ou false
menu.classList.replace('ativo', 'inativo') // substitui a classe ativo por inativo

menu.attributes[0] // retorna o primeiro atributo(class, ids, etc..) do elemento
menu.attributes.id // retorna o atributo selecionado (neste caso o id)
menu.getAttribute('id') // também retorna o atributo selecionado
menu.setAttribute('alt', 'Raposa') // adiciona um atributo ao elemento
menu.hasAttribute('id') // verifica se o elemento possui o atributo
// menu.removeAttribute() // remove um atributo do elemento

// Adicione a classe ativo a todos os itens do menu
const menuLinks = document.querySelectorAll('.menu a')

menuLinks.forEach((item) =>{
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuLinks.forEach((item, index) =>{
  if (index > 0){
    item.classList.remove('ativo')
  } 
})

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')
imagens.forEach((item) => {
  if(item.hasAttribute('alt')){
    console.log('Possui o atributo alt')
  }
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu a[href^="https"')

linkExterno.setAttribute('target', '_blank')
linkExterno.setAttribute('href', 'https://dogs.origamid.dev/')


