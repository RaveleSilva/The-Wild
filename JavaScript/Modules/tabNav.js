export default class TabNav {
  constructor(menu, content) {
    this.imagesList = document.querySelectorAll(menu);
    this.animalsContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.animalsContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const direcao = this.animalsContent[index].dataset.anime;
    this.animalsContent[index].classList.add(this.activeClass, direcao);
  }

  addTabNavEvent() {
    this.imagesList.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.imagesList.length && this.animalsContent.lenght) {
      this.addTabNavEvent();
    }
  }
}
