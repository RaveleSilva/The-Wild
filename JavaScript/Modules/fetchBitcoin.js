export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((btcJson) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / btcJson.BRL.sell).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
