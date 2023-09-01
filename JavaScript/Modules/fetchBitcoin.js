export default function initFetchBitcoin() {
  fetch('https://www.blockchain.com/pt/ticker')
    .then((response) => response.json())
    .then((btcJson) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / btcJson.BRL.sell).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
