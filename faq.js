const accordionList = document.querySelectorAll('.pergunta dt')

function activeAccordion(){
  this.classList.toggle('active')
  this.nextElementSibling.classList.toggle('active')
}

accordionList.forEach((item)=>{
  item.addEventListener('click', activeAccordion)
})