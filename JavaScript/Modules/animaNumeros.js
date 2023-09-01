export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let inicial = 0;
      const timer = setInterval(() => {
        if (inicial < total) {
          inicial += incremento;
          numero.innerText = inicial;
        } else {
          clearInterval(timer);
          numero.innerText = total;
        }
      }, 20);
    });
  }

  let observer;

  function handleMutation(Mutation) {
    if (Mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector('.numeros');

  observer.observe(observerTarget, { attributes: true });
}
