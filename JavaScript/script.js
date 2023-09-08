import initAnimaScroll from './Modules/anima-scroll.js';
import Accordion from './Modules/accordion.js';
import TabNav from './Modules/tabNav.js';
import Modal from './Modules/modal.js';
import Tooltip from './Modules/tooltip.js';
import initDropDownMenu from './Modules/dropDownMenu.js';
import initMenuMobile from './Modules/menuMobile.js';
import initFuncionamento from './Modules/funcionamento.js';
import fetchAnimais from './Modules/fetchAnimais.js';
import fetchBitcoin from './Modules/fetchBitcoin.js';

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] .animal-desc');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initMenuMobile();
initDropDownMenu();
initAnimaScroll();
initFuncionamento();

fetchAnimais('../../animaisAPI.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
