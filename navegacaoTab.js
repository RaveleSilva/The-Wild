const imagesList = document.querySelectorAll('[data-tab="menu"] li')
const animalsContent = document.querySelectorAll('[data-tab="content"] .animal-desc')

//Função para remover a classe 'ativo de todos os itens de animalsContent e adicionar apenas no item com o índice do parâmetro

function activeTab(index){
  animalsContent.forEach((item)=>{
    item.classList.remove('ativo')
  })
  const direcao = animalsContent[index].dataset.anime
  animalsContent[index].classList.add('ativo', direcao)
}

//Função para adicionar o evento de click em todos os elementos de imagesList e ativar a função activeTab com o índice do elemento

imagesList.forEach((item, index)=>{
  item.addEventListener('click', function(){
    activeTab(index)
  })
}) 
