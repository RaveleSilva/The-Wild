export default class Modal {
  constructor(btnAbrir, btnFechar, container) {
    this.botaoAbrir = document.querySelector(btnAbrir);
    this.botaoFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(container);
    this.activeClass = 'ativo';

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.fecharClicandoFora = this.fecharClicandoFora.bind(this);
  }

  abrirFecharModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.abrirFecharModal();
  }

  fecharClicandoFora(event) {
    if (event.target === this.containerModal) {
      this.containerModal.classList.toggle(this.activeClass);
    }
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.fecharClicandoFora);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
