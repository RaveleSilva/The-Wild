export default function initTooltip(){
  const toolTips = document.querySelectorAll('[data-tooltip]')

  if(toolTips){
    toolTips.forEach((item)=>{
      item.addEventListener('mouseover', onMouseOver)
    })
  
    function onMouseOver(){
      const tooltipBox = criarTooltipBox(this)
  
      onMouseMove.tooltipBox = tooltipBox
      onMouseLeave.tooltipBox = tooltipBox
      onMouseLeave.element = this
  
      this.addEventListener('mouseleave', onMouseLeave)
      this.addEventListener('mousemove', onMouseMove)
    }
  
    const onMouseLeave = {
      handleEvent(){
        this.tooltipBox.remove()
        this.element.removeEventListener('mouseleave', onMouseLeave)
        this.element.removeEventListener('mousemove', onMouseMove)
      }
    }
  
    const onMouseMove = {
      handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 20 + 'px'
        this.tooltipBox.style.left = event.pageX + 20 + 'px'
      }
    }
  
    function criarTooltipBox(element){
      const tooltipBox = document.createElement('div')
      const tooltipText = element.getAttribute('aria-label')
  
      tooltipBox.classList.add('tooltip')
      tooltipBox.innerText = tooltipText
      document.body.appendChild(tooltipBox)
  
      return tooltipBox
    }
  }
}