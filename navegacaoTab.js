const imagesList = document.querySelectorAll('.js-tabmenu li')
const animalsContent = document.querySelectorAll('.js-tabcontent .animal-desc')

//Função para remover a classe 'ativo de todos os itens de animalsContent e adicionar apenas no item com o índice do parâmetro

function activeTab(index){
  animalsContent.forEach((item)=>{
    item.classList.remove('ativo')
  })

  animalsContent[index].classList.add('ativo')
}

//Função para adicionar o evento de click em todos os elementos de imagesList e ativar a função activeTab com o índice do elemento

imagesList.forEach((item, index)=>{
  item.addEventListener('click', function(){
    activeTab(index)
  })
}) 
