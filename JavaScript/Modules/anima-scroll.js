export default function initAnimaScroll(){
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