export default function initMenuMobile(){
  const button = document.querySelector('[data-menu="button"')
  if(button){
    const menuList = document.querySelector('[data-menu="list"]')

    function openMenu(){
      button.classList.toggle('active')
      menuList.classList.toggle('active')
    }

    button.addEventListener('click', openMenu)
  }
}