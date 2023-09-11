import AnimaScroll from './Modules/anima-scroll.js';
import Accordion from './Modules/accordion.js';
import TabNav from './Modules/tabNav.js';
import Modal from './Modules/modal.js';
import Tooltip from './Modules/tooltip.js';
import DropDownMenu from './Modules/dropDownMenu.js';
import MenuMobile from './Modules/menuMobile.js';
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

const scrollAnima = new AnimaScroll('[data-anime="scroll"]');
scrollAnima.init();

const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initFuncionamento();
fetchAnimais('../../animaisAPI.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
