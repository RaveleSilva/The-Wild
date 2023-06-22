export default function initDropDownMenu(){}

const dropDownList = document.querySelectorAll('[data-dropdown]')

dropDownList.forEach(dropdown =>{
  ['click', 'touchstart'].forEach(userEvent =>{
    dropdown.addEventListener(userEvent, dropDownActive)
  })
})

function dropDownActive(event){
  event.preventDefault()
  this.classList.toggle('ativo')
}
