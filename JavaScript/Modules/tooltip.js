export default function initTooltip() {
  const tooltipList = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseOut = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mousemove', onMouseMove);
      this.element.removeEventListener('mouseout', onMouseOut);
    },
  };

  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    const tooltipBoxText = element.getAttribute('aria-label');
    tooltipBox.innerText = tooltipBoxText;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = createTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    onMouseOut.tooltipBox = tooltipBox;
    onMouseOut.element = this;
    this.addEventListener('mousemove', onMouseMove);
    this.addEventListener('mouseout', onMouseOut);
  }

  if (tooltipList.length) {
    tooltipList.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', onMouseOver);
    });
  }
}
