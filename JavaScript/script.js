import tabNav from './Modules/tabNav.js';
import initAnimaScroll from './Modules/anima-scroll.js';
import Accordion from './Modules/accordion.js';
import initModal from './Modules/modal.js';
import initTooltip from './Modules/tooltip.js';
import initDropDownMenu from './Modules/dropDownMenu.js';
import initMenuMobile from './Modules/menuMobile.js';
import initFuncionamento from './Modules/funcionamento.js';
import initFetchAnimais from './Modules/fetchAnimais.js';
import initFetchBitcoin from './Modules/fetchBitcoin.js';

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initModal();
initMenuMobile();
initDropDownMenu();
initAnimaScroll();
tabNav();
initTooltip();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
