document.documentElement.classList.add('js')

const imagesList = document.querySelectorAll('.js-tabmenu li')
const animalsDescriptions = document.querySelectorAll('.js-tabcontent .animal-desc')

if (animalsDescriptions && imagesList){
  function activeTab(index){
    animalsDescriptions.forEach((item)=>{
      item.classList.remove('ativo')
    })
    animalsDescriptions[index].classList.add('ativo')
  }

  imagesList.forEach((item, index)=>{
    item.addEventListener('click', function(){
      activeTab(index)
    })
  })
}