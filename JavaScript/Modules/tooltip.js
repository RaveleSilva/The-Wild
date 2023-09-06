export default class Tooltip {
  constructor(tooltip) {
    this.tooltipList = document.querySelectorAll(tooltip);

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    const tooltipBoxText = element.getAttribute('aria-label');

    tooltipBox.innerText = tooltipBoxText;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseout', this.onMouseLeave);
  }

  addTooltipEvent() {
    this.tooltipList.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltipList.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
