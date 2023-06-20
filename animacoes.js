// Animação show/hide perguntas frequentes

const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

function activeAccordion(){
  this.classList.toggle('active')
  this.nextElementSibling.classList.toggle('active')
}

accordionList.forEach((item)=>{
  item.addEventListener('click', activeAccordion)
})

// Animação de sections ao scroll

function initAnimaScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  if(sections.length){
    const windowSize = window.innerHeight * 0.6

    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowSize) < 0

        if(isSectionVisible){
          section.classList.add('ativo')
        }else{
          section.classList.remove('ativo')
        }
      })
    }
  
    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}

initAnimaScroll()
